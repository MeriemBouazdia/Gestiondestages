import { db, respond, http } from "../../../services/api";

export const applicationService = {
  mine: (uid) => respond(() => db.applications.filter((a) => a.etudiantId === uid), () => http.get("/applications/mine")),
  received: (uid) =>
    respond(
      () => db.applications.filter((a) => db.stages.find((s) => s.id === a.stageId)?.entrepriseId === uid),
      () => http.get("/applications/received")
    ),
  apply: (stage, user, file) =>
    respond(
      () => {
        if (db.applications.some((a) => a.stageId === stage.id && a.etudiantId === user.id)) {
          throw new Error("Vous avez déjà postulé à cette offre.");
        }
        db.applications.unshift({ id: Date.now(), stageId: stage.id, titre: stage.titre, etudiantId: user.id, etudiant: user.nom, cv: file.name, statut: "en_attente" });
        db.notifications.unshift({ id: Date.now() + 1, userId: stage.entrepriseId, texte: `Nouvelle candidature de ${user.nom}`, lu: false });
      },
      () => {
        const fd = new FormData();
        fd.append("cv", file);
        return http.post(`/stages/${stage.id}/apply`, fd);
      }
    ),
  decide: (app, statut) =>
    respond(
      () => {
        db.applications.find((a) => a.id === app.id).statut = statut;
        db.notifications.unshift({ id: Date.now(), userId: app.etudiantId, texte: `Votre candidature « ${app.titre} » est ${statut === "acceptee" ? "acceptée" : "refusée"}.`, lu: false });
      },
      () => http.patch(`/applications/${app.id}`, { statut })
    ),
};
