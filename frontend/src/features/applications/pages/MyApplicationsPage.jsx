import { useAuth } from "../../../context/AuthContext";
import { useMyApplications } from "../hooks/useApplications";
import ApplicationList from "../components/ApplicationList";
import PageState from "../../../components/common/PageState";

export default function MyApplicationsPage() {
  const { user } = useAuth();
  const { data, loading, error } = useMyApplications(user.id);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Mes candidatures</h1>
      <PageState loading={loading} error={error} empty={data && !data.length} emptyText="Vous n'avez pas encore postulé. Consultez les offres pour commencer.">
        <ApplicationList apps={data || []} />
      </PageState>
    </div>
  );
}
