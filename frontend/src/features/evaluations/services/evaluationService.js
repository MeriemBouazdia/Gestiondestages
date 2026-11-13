import { db, respond, http } from "../../../services/api";

export const evaluationService = {
  get: (etudiantId) => respond(() => db.evaluations.find((e) => e.etudiantId === Number(etudiantId)), () => http.get(`/evaluations/${etudiantId}`)),
  save: (etudiantId, ev) =>
    respond(
      () => {
        const i = db.evaluations.findIndex((e) => e.etudiantId === Number(etudiantId));
        const item = { ...ev, etudiantId: Number(etudiantId) };
        if (i >= 0) db.evaluations[i] = item;
        else db.evaluations.push(item);
        if (ev.validee) db.notifications.unshift({ id: Date.now(), userId: Number(etudiantId), texte: "Votre évaluation finale est disponible.", lu: false });
      },
      () => http.put(`/evaluations/${etudiantId}`, ev)
    ),
};
