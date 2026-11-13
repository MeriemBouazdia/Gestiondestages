import { db, respond, http } from "../../../services/api";

export const reportService = {
  forStudent: (id) => respond(() => db.reports.filter((r) => r.etudiantId === id), () => http.get("/reports/mine")),
  forSupervisor: (id) =>
    respond(
      () => {
        const ids = db.assignments.filter((a) => a.encadrantId === id).map((a) => a.etudiantId);
        return db.reports.filter((r) => ids.includes(r.etudiantId)).map((r) => ({ ...r, etudiant: db.users.find((u) => u.id === r.etudiantId)?.nom }));
      },
      () => http.get("/reports/supervised")
    ),
  upload: (user, file) =>
    respond(
      () => {
        db.reports.unshift({ id: Date.now(), etudiantId: user.id, nom: file.name, date: new Date().toISOString().slice(0, 10), remarque: "" });
        const a = db.assignments.find((x) => x.etudiantId === user.id);
        if (a) db.notifications.unshift({ id: Date.now(), userId: a.encadrantId, texte: `${user.nom} a déposé un rapport.`, lu: false });
      },
      () => {
        const fd = new FormData();
        fd.append("report", file);
        return http.post("/reports", fd);
      }
    ),
  comment: (id, remarque) => respond(() => { db.reports.find((r) => r.id === id).remarque = remarque; }, () => http.patch(`/reports/${id}`, { remarque })),
};
