import { CRITERIA } from "./EvaluationForm";

export default function EvaluationView({ evaluation }) {
  const total = CRITERIA.reduce((s, [k]) => s + evaluation[k], 0) / CRITERIA.length;
  return (
    <div className="max-w-md space-y-2 rounded-lg bg-white p-5 shadow-sm">
      {CRITERIA.map(([k, label]) => (
        <p key={k} className="flex justify-between"><span>{label}</span><span>{evaluation[k]} / 20</span></p>
      ))}
      <p className="flex justify-between border-t pt-2 font-semibold"><span>Moyenne</span><span>{total.toFixed(1)} / 20</span></p>
      {evaluation.remarque && <p className="text-sm text-slate-600">{evaluation.remarque}</p>}
    </div>
  );
}
