import useFetch from "../../../hooks/useFetch";
import { supervisionService } from "../services/supervisionService";

export const useAllAssignments = () => useFetch(supervisionService.list);
export const useSupervisorStudents = (id) => useFetch(() => supervisionService.forSupervisor(id), [id]);
export const useMyAssignment = (id) => useFetch(() => supervisionService.forStudent(id), [id]);
