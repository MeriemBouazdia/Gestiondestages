import { db, respond, http } from "./api";

export const authService = {
  // En démo, le rôle choisi sur la page de connexion sélectionne un compte de test.
  login: (email, password, role) =>
    respond(
      () => ({ token: "demo", user: db.users.find((u) => u.role === role) }),
      () => http.post("/auth/login", { email, password })
    ),
  register: (data) =>
    respond(
      () => {
        const { password, ...user } = data;
        const u = { ...user, id: Date.now(), actif: true };
        db.users.push(u);
        return { token: "demo", user: u };
      },
      () => http.post("/auth/register", data)
    ),
  updateProfile: (id, data) =>
    respond(
      () => Object.assign(db.users.find((u) => u.id === id), data),
      () => http.put(`/users/${id}`, data)
    ),
};
