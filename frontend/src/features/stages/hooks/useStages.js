import useFetch from "../../../hooks/useFetch";
import { stageService } from "../services/stageService";

export default function useStages() {
  return useFetch(stageService.list);
}
