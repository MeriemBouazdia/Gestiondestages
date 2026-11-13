// Affiche chargement, erreur ou liste vide ; sinon le contenu.
export default function PageState({ loading, error, empty, emptyText = "Aucun élément à afficher.", children }) {
  if (loading) return <p role="status" className="text-slate-500">Chargement…</p>;
  if (error) return <p role="alert" className="rounded bg-rose-50 p-2 text-rose-700">{error}</p>;
  if (empty) return <p className="text-slate-600">{emptyText}</p>;
  return children;
}
