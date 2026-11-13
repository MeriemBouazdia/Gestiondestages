const STYLES = {
  en_attente: ["En attente", "bg-amber-100 text-amber-800"],
  acceptee: ["Acceptée", "bg-emerald-100 text-emerald-800"],
  refusee: ["Refusée", "bg-rose-100 text-rose-800"],
};

export default function StatusBadge({ statut }) {
  const [label, cls] = STYLES[statut] || [statut, "bg-slate-100 text-slate-700"];
  return <span className={`rounded-full px-3 py-1 text-sm font-medium ${cls}`}>{label}</span>;
}
