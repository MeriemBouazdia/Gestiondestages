import { db, respond, http } from "../../../services/api";

export const notificationService = {
  list: (uid) => respond(() => db.notifications.filter((n) => n.userId === uid), () => http.get("/notifications")),
  markRead: (id) => respond(() => { db.notifications.find((n) => n.id === id).lu = true; }, () => http.patch(`/notifications/${id}/read`)),
};
