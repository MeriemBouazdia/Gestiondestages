import { useAuth } from "../../../context/AuthContext";
import useEvaluation from "../hooks/useEvaluation";
import EvaluationView from "../components/EvaluationView";
import PageState from "../../../components/common/PageState";

export default function MyEvaluationPage() {
  const { user } = useAuth();
  const { data, loading, error } = useEvaluation(user.id);
  const ready = data && data.validee;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Mon évaluation</h1>
      <PageState loading={loading} error={error} empty={!ready} emptyText="Votre évaluation finale n'est pas encore disponible.">
        {ready && <EvaluationView evaluation={data} />}
      </PageState>
    </div>
  );
}
