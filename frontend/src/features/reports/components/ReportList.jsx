import { useState } from "react";
import Button from "../../../components/common/Button";

// onComment fourni => l'encadrant peut écrire une remarque
function Row({ r, onComment }) {
  const [text, setText] = useState(r.remarque || "");
  return (
    <li className="space-y-2 rounded-lg bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span>{r.etudiant ? `${r.etudiant} · ` : ""}{r.nom} <span className="text-sm text-slate-500">({r.date})</span></span>
        <Button variant="outline" onClick={() => alert("Le téléchargement sera branché sur l'API.")}>Télécharger</Button>
      </div>
      {onComment ? (
        <div className="flex gap-2">
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Ajouter une remarque" aria-label="Remarque" className="flex-1 rounded border p-2" />
          <Button onClick={() => onComment(r.id, text)}>Enregistrer</Button>
        </div>
      ) : (
        r.remarque && <p className="text-sm"><span className="text-slate-500">Remarque :</span> {r.remarque}</p>
      )}
    </li>
  );
}

export default function ReportList({ reports, onComment }) {
  return <ul className="space-y-2">{reports.map((r) => <Row key={r.id} r={r} onComment={onComment} />)}</ul>;
}
