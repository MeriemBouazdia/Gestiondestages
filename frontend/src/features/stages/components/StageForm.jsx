import { useState } from "react";
import Button from "../../../components/common/Button";

const EMPTY = { titre: "", domaine: "", type: "PFE", description: "", duree: "", places: 1 };
const TEXT_FIELDS = [["titre", "Titre"], ["domaine", "Domaine"], ["duree", "Durée (ex. 3 mois)"]];

export default function StageForm({ initial = EMPTY, onSubmit, submitLabel = "Publier l'offre" }) {
  const [f, setF] = useState(initial);
  const [err, setErr] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!f.titre.trim() || !f.description.trim()) return setErr("Le titre et la description sont obligatoires.");
    if (Number(f.places) < 1) return setErr("Le nombre de places doit être d'au moins 1.");
    await onSubmit({ ...f, places: Number(f.places) });
  };

  const input = "mt-1 w-full rounded border p-2";
  return (
    <form onSubmit={submit} className="max-w-xl space-y-3 rounded-lg bg-white p-5 shadow-sm">
      {err && <p role="alert" className="text-sm text-rose-700">{err}</p>}
      {TEXT_FIELDS.map(([k, label]) => (
        <label key={k} className="block text-sm">{label}<input className={input} value={f[k]} onChange={set(k)} /></label>
      ))}
      <label className="block text-sm">Type de stage
        <select className={input} value={f.type} onChange={set("type")}>
          <option>PFE</option><option>Stage d'été</option><option>Stage d'observation</option>
        </select>
      </label>
      <label className="block text-sm">Nombre de places<input type="number" min="1" className={input} value={f.places} onChange={set("places")} /></label>
      <label className="block text-sm">Description<textarea rows="4" className={input} value={f.description} onChange={set("description")} /></label>
      <Button>{submitLabel}</Button>
    </form>
  );
}
