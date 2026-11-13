import { useParams } from "react-router-dom";
import useEvaluation from "../hooks/useEvaluation";
import { evaluationService } from "../services/evaluationService";
import EvaluationForm from "../components/EvaluationForm";
import PageState from "../../../components/common/PageState";

// Encadrant : évaluer un étudiant par critères
export default function EvaluatePage() {
  const { etudiantId } = useParams();
  const { data, loading, error } = useEvaluation(etudiantId);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Évaluation du stagiaire</h1>
      <PageState loading={loading} error={error}>
        <EvaluationForm initial={data || undefined} onSubmit={(ev) => evaluationService.save(etudiantId, ev)} />
      </PageState>
    </div>
  );
}
