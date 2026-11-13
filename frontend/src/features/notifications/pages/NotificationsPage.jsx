import { useAuth } from "../../../context/AuthContext";
import useNotifications from "../hooks/useNotifications";
import { notificationService } from "../services/notificationService";
import NotificationList from "../components/NotificationList";
import PageState from "../../../components/common/PageState";

export default function NotificationsPage() {
  const { user } = useAuth();
  const { data, loading, error, reload } = useNotifications(user.id);
  const read = async (id) => { await notificationService.markRead(id); reload(); };
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Notifications</h1>
      <PageState loading={loading} error={error} empty={data && !data.length} emptyText="Aucune notification.">
        <NotificationList items={data || []} onRead={read} />
      </PageState>
    </div>
  );
}
