import { useParams } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import useFetch from "../../../hooks/useFetch";
import PageState from "../../../components/common/PageState";
import { stageService } from "../services/stageService";
import ApplicationForm from "../../applications/components/ApplicationForm";

export default function StageDetailsPage() {
  const { id } = useParams();
  const { user } = useAuth();
  const { data: stage, loading, error } = useFetch(() => stageService.get(id), [id]);

  return (
    <PageState loading={loading} error={error} empty={!loading && !stage} emptyText="Cette offre n'existe plus.">
      {stage && (
        <div className="max-w-2xl space-y-4">
          <h1 className="text-2xl font-semibold">{stage.titre}</h1>
          <p className="text-slate-600">{stage.entreprise} · {stage.domaine} · {stage.type} · {stage.duree} · {stage.places} place(s)</p>
          <p className="rounded-lg bg-white p-4 shadow-sm">{stage.description}</p>
          {user.role === "etudiant" && <ApplicationForm stage={stage} />}
        </div>
      )}
    </PageState>
  );
}
