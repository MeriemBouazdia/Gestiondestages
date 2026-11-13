import useFetch from "../../../hooks/useFetch";
import { evaluationService } from "../services/evaluationService";

export default function useEvaluation(etudiantId) {
  return useFetch(() => evaluationService.get(etudiantId), [etudiantId]);
}
