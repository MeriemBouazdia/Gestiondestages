import StatusBadge from "../../../components/common/StatusBadge";

// renderActions(app) : boutons optionnels (ex. Accepter / Refuser)
export default function ApplicationList({ apps, showStudent, renderActions }) {
  return (
    <ul className="space-y-2">
      {apps.map((a) => (
        <li key={a.id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-white p-4 shadow-sm">
          <span>{showStudent ? `${a.etudiant} · ` : ""}{a.titre} <span className="text-sm text-slate-500">({a.cv})</span></span>
          <span className="flex items-center gap-2">
            <StatusBadge statut={a.statut} />
            {renderActions && renderActions(a)}
          </span>
        </li>
      ))}
    </ul>
  );
}
