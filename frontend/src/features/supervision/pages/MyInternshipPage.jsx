import { useAuth } from "../../../context/AuthContext";
import { useMyAssignment } from "../hooks/useSupervision";
import ProgressBar from "../components/ProgressBar";
import PageState from "../../../components/common/PageState";

// Étudiant : encadrant et avancement du stage
export default function MyInternshipPage() {
  const { user } = useAuth();
  const { data, loading, error } = useMyAssignment(user.id);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Mon stage</h1>
      <PageState loading={loading} error={error} empty={!data} emptyText="Aucun encadrant ne vous a encore été affecté.">
        {data && (
          <div className="max-w-md space-y-3 rounded-lg bg-white p-5 shadow-sm">
            <p><span className="text-slate-500">Encadrant :</span> {data.encadrant?.nom}</p>
            <p><span className="text-slate-500">E-mail :</span> {data.encadrant?.email}</p>
            <ProgressBar value={data.progression} />
          </div>
        )}
      </PageState>
    </div>
  );
}
