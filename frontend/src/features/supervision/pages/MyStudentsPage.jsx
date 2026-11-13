import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useSupervisorStudents } from "../hooks/useSupervision";
import { supervisionService } from "../services/supervisionService";
import ProgressBar from "../components/ProgressBar";
import PageState from "../../../components/common/PageState";

// Encadrant : étudiants affectés, avancement, accès à l'évaluation
export default function MyStudentsPage() {
  const { user } = useAuth();
  const { data, loading, error, reload } = useSupervisorStudents(user.id);

  const setProgress = async (id, v) => { await supervisionService.setProgress(id, Number(v)); reload(); };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Mes étudiants</h1>
      <PageState loading={loading} error={error} empty={data && !data.length} emptyText="Aucun étudiant ne vous est affecté pour le moment.">
        <ul className="space-y-2">
          {(data || []).map((a) => (
            <li key={a.id} className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-white p-4 shadow-sm">
              <span className="font-medium">{a.etudiant}</span>
              <ProgressBar value={a.progression} />
              <span className="flex items-center gap-2">
                <select aria-label="Avancement" value={a.progression} onChange={(e) => setProgress(a.id, e.target.value)} className="rounded border p-1">
                  {[0, 25, 50, 75, 100].map((v) => <option key={v} value={v}>{v} %</option>)}
                </select>
                <Link to={`/evaluations/${a.etudiantId}`} className="rounded border px-3 py-1.5 text-sm hover:bg-slate-50">Évaluer</Link>
              </span>
            </li>
          ))}
        </ul>
      </PageState>
    </div>
  );
}
