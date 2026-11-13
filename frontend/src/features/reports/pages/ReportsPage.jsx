import { useAuth } from "../../../context/AuthContext";
import { useStudentReports } from "../hooks/useReports";
import { reportService } from "../services/reportService";
import ReportUpload from "../components/ReportUpload";
import ReportList from "../components/ReportList";
import PageState from "../../../components/common/PageState";

export default function ReportsPage() {
  const { user } = useAuth();
  const { data, loading, error, reload } = useStudentReports(user.id);
  const upload = async (file) => { await reportService.upload(user, file); reload(); };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Mon rapport de stage</h1>
      <ReportUpload onUpload={upload} />
      <PageState loading={loading} error={error} empty={data && !data.length} emptyText="Aucun rapport déposé.">
        <ReportList reports={data || []} />
      </PageState>
    </div>
  );
}
