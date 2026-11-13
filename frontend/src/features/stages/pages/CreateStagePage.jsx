import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import useFetch from "../../../hooks/useFetch";
import PageState from "../../../components/common/PageState";
import { stageService } from "../services/stageService";
import StageForm from "../components/StageForm";

// Création (/stages/new) et modification (/stages/:id/edit)
export default function CreateStagePage() {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(() => (id ? stageService.get(id) : Promise.resolve(null)), [id]);

  const submit = async (values) => {
    if (id) await stageService.update(id, values);
    else await stageService.create(values, user);
    navigate("/stages");
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">{id ? "Modifier l'offre" : "Publier une offre"}</h1>
      <PageState loading={loading} error={error}>
        <StageForm initial={data || undefined} onSubmit={submit} submitLabel={id ? "Enregistrer" : "Publier l'offre"} />
      </PageState>
    </div>
  );
}
