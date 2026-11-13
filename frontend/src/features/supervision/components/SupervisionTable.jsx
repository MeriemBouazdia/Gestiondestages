import ProgressBar from "./ProgressBar";

export default function SupervisionTable({ rows }) {
  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="border-b bg-slate-50"><tr><th className="p-3">Étudiant</th><th className="p-3">Encadrant</th><th className="p-3">Avancement</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} className="border-b last:border-0">
              <td className="p-3">{r.etudiant}</td>
              <td className="p-3">{r.encadrant?.nom}</td>
              <td className="p-3"><ProgressBar value={r.progression} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
