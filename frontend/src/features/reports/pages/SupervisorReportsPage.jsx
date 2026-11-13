import { useAuth } from "../../../context/AuthContext";
import { useSupervisorReports } from "../hooks/useReports";
import { reportService } from "../services/reportService";
import ReportList from "../components/ReportList";
import PageState from "../../../components/common/PageState";

export default function SupervisorReportsPage() {
  const { user } = useAuth();
  const { data, loading, error, reload } = useSupervisorReports(user.id);
  const comment = async (id, text) => { await reportService.comment(id, text); reload(); };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Rapports déposés</h1>
      <PageState loading={loading} error={error} empty={data && !data.length} emptyText="Aucun rapport déposé par vos étudiants.">
        <ReportList reports={data || []} onComment={comment} />
      </PageState>
    </div>
  );
}
