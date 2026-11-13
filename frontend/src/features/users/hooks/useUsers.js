import useFetch from "../../../hooks/useFetch";
import { userService } from "../services/userService";

export default function useUsers(role) {
  return useFetch(() => userService.listByRole(role), [role]);
}
