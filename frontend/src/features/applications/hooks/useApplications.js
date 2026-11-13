import useFetch from "../../../hooks/useFetch";
import { applicationService } from "../services/applicationService";

export const useMyApplications = (uid) => useFetch(() => applicationService.mine(uid), [uid]);
export const useReceivedApplications = (uid) => useFetch(() => applicationService.received(uid), [uid]);
