import { db, respond, http } from "../../../services/api";

const join = (a) => ({
  ...a,
  etudiant: db.users.find((u) => u.id === a.etudiantId)?.nom,
  encadrant: db.users.find((u) => u.id === a.encadrantId),
});

export const supervisionService = {
  list: () => respond(() => db.assignments.map(join), () => http.get("/supervision")),
  forSupervisor: (id) => respond(() => db.assignments.filter((a) => a.encadrantId === id).map(join), () => http.get("/supervision/mine")),
  forStudent: (id) => respond(() => { const a = db.assignments.find((x) => x.etudiantId === id); return a ? join(a) : null; }, () => http.get("/supervision/mine")),
  assign: (etudiantId, encadrantId) =>
    respond(
      () => {
        const a = db.assignments.find((x) => x.etudiantId === etudiantId);
        if (a) a.encadrantId = encadrantId;
        else db.assignments.push({ id: Date.now(), etudiantId, encadrantId, progression: 0 });
        db.notifications.unshift({ id: Date.now(), userId: etudiantId, texte: "Un encadrant vous a été affecté.", lu: false });
      },
      () => http.post("/supervision", { etudiantId, encadrantId })
    ),
  setProgress: (id, progression) => respond(() => { db.assignments.find((a) => a.id === id).progression = progression; }, () => http.patch(`/supervision/${id}`, { progression })),
};
