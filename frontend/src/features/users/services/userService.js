import { db, respond, http } from "../../../services/api";

export const userService = {
  listByRole: (role) => respond(() => db.users.filter((u) => u.role === role), () => http.get("/users", { params: { role } })),
  create: (u) => respond(() => { db.users.push({ ...u, id: Date.now(), actif: true }); }, () => http.post("/users", u)),
  toggle: (id) => respond(() => { const u = db.users.find((x) => x.id === id); u.actif = !u.actif; }, () => http.patch(`/users/${id}/toggle`)),
};
