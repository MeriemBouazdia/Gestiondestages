import { db, respond, http } from "../../../services/api";

export const stageService = {
  list: () => respond(() => db.stages, () => http.get("/stages")),
  get: (id) => respond(() => db.stages.find((s) => s.id === Number(id)), () => http.get(`/stages/${id}`)),
  create: (s, user) =>
    respond(
      () => { db.stages.unshift({ ...s, id: Date.now(), entrepriseId: user.id, entreprise: user.nom, etat: "ouverte" }); },
      () => http.post("/stages", s)
    ),
  update: (id, s) => respond(() => { Object.assign(db.stages.find((x) => x.id === Number(id)), s); }, () => http.put(`/stages/${id}`, s)),
  remove: (id) => respond(() => { db.stages = db.stages.filter((x) => x.id !== id); }, () => http.delete(`/stages/${id}`)),
};
