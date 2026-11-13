import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import Button from "../../../components/common/Button";

export default function ProfileForm() {
  const { user, updateProfile } = useAuth();
  const [f, setF] = useState({ nom: user.nom, email: user.email, specialite: user.specialite || "" });
  const [msg, setMsg] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!f.nom.trim()) return setMsg("Le nom est obligatoire.");
    await updateProfile(f);
    setMsg("Profil enregistré.");
  };

  return (
    <form onSubmit={submit} className="max-w-md space-y-4 rounded-lg bg-white p-6 shadow-sm">
      {msg && <p role="status" className="rounded bg-emerald-50 p-2 text-sm">{msg}</p>}
      <label className="block text-sm">Nom<input value={f.nom} onChange={set("nom")} className="mt-1 w-full rounded border p-2" /></label>
      <label className="block text-sm">E-mail<input type="email" value={f.email} onChange={set("email")} className="mt-1 w-full rounded border p-2" /></label>
      {user.role === "etudiant" && (
        <label className="block text-sm">Spécialité<input value={f.specialite} onChange={set("specialite")} className="mt-1 w-full rounded border p-2" /></label>
      )}
      <Button>Enregistrer les modifications</Button>
    </form>
  );
}
