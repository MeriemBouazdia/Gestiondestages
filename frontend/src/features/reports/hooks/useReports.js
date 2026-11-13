import useFetch from "../../../hooks/useFetch";
import { reportService } from "../services/reportService";

export const useStudentReports = (id) => useFetch(() => reportService.forStudent(id), [id]);
export const useSupervisorReports = (id) => useFetch(() => reportService.forSupervisor(id), [id]);
