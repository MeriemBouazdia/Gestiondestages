import { useState } from "react";
import Button from "../../../components/common/Button";

export const CRITERIA = [
  ["assiduite", "Assiduité"],
  ["technique", "Compétences techniques"],
  ["autonomie", "Autonomie"],
  ["rapport", "Qualité du rapport"],
];

export default function EvaluationForm({ initial, onSubmit }) {
  const [f, setF] = useState(initial || { assiduite: 10, technique: 10, autonomie: 10, rapport: 10, remarque: "", validee: false });
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (CRITERIA.some(([k]) => f[k] < 0 || f[k] > 20)) return setMsg("Chaque note doit être comprise entre 0 et 20.");
    await onSubmit(f);
    setMsg("Évaluation enregistrée.");
  };

  return (
    <form onSubmit={submit} className="max-w-md space-y-3 rounded-lg bg-white p-5 shadow-sm">
      {msg && <p role="status" className="rounded bg-slate-100 p-2 text-sm">{msg}</p>}
      {CRITERIA.map(([k, label]) => (
        <label key={k} className="flex items-center justify-between text-sm">
          {label} (/20)
          <input type="number" min="0" max="20" value={f[k]} onChange={(e) => setF({ ...f, [k]: Number(e.target.value) })} className="w-20 rounded border p-1" />
        </label>
      ))}
      <label className="block text-sm">Remarques
        <textarea rows="3" value={f.remarque} onChange={(e) => setF({ ...f, remarque: e.target.value })} className="mt-1 w-full rounded border p-2" />
      </label>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" checked={f.validee} onChange={(e) => setF({ ...f, validee: e.target.checked })} />
        Valider l'évaluation finale (visible par l'étudiant)
      </label>
      <Button>Enregistrer l'évaluation</Button>
    </form>
  );
}
