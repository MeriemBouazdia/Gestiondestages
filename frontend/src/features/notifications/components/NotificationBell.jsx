import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import useNotifications from "../hooks/useNotifications";

export default function NotificationBell() {
  const { user } = useAuth();
  const { data } = useNotifications(user.id);
  const unread = (data || []).filter((n) => !n.lu).length;
  return (
    <Link to="/notifications" className="relative hover:underline">
      Notifications
      {unread > 0 && <span aria-label={`${unread} non lues`} className="ml-1 rounded-full bg-rose-600 px-2 text-xs">{unread}</span>}
    </Link>
  );
}
