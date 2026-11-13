import { useState } from "react";
import Button from "../../../components/common/Button";

export default function UserForm({ role, onSubmit }) {
  const [f, setF] = useState({ nom: "", email: "" });
  const [err, setErr] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!f.nom.trim() || !f.email.includes("@")) return setErr("Saisissez un nom et un e-mail valide.");
    onSubmit({ ...f, role });
  };
  return (
    <form onSubmit={submit} className="space-y-3">
      {err && <p role="alert" className="text-rose-700">{err}</p>}
      <label className="block">Nom<input value={f.nom} onChange={set("nom")} className="mt-1 w-full rounded border p-2" /></label>
      <label className="block">E-mail<input type="email" value={f.email} onChange={set("email")} className="mt-1 w-full rounded border p-2" /></label>
      <Button>Créer le compte</Button>
    </form>
  );
}
