import { Link } from "react-router-dom";
import Button from "../../../components/common/Button";

const LINK = "rounded border px-3 py-1.5 text-sm hover:bg-slate-50";

export default function StageCard({ stage, role, onDelete }) {
  return (
    <li className="rounded-lg bg-white p-4 shadow-sm">
      <h2 className="font-semibold">{stage.titre}</h2>
      <p className="text-sm text-slate-600">{stage.entreprise} · {stage.domaine} · {stage.type} · {stage.duree} · {stage.places} place(s)</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Link to={`/stages/${stage.id}`} className={LINK}>Voir le détail</Link>
        {role === "entreprise" && <Link to={`/stages/${stage.id}/edit`} className={LINK}>Modifier</Link>}
        {(role === "entreprise" || role === "admin") && (
          <Button variant="danger" onClick={() => onDelete(stage)}>Supprimer</Button>
        )}
      </div>
    </li>
  );
}
