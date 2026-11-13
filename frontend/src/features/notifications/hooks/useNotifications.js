import useFetch from "../../../hooks/useFetch";
import { notificationService } from "../services/notificationService";

export default function useNotifications(uid) {
  return useFetch(() => notificationService.list(uid), [uid]);
}
