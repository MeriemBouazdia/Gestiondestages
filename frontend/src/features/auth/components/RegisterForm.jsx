import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import Button from "../../../components/common/Button";

export default function RegisterForm() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [f, setF] = useState({ nom: "", email: "", password: "", role: "etudiant", specialite: "" });
  const [error, setError] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!f.nom.trim()) return setError("Le nom est obligatoire.");
    if (!f.email.includes("@")) return setError("Saisissez un e-mail valide.");
    if (f.password.length < 6) return setError("Le mot de passe doit contenir au moins 6 caractères.");
    try {
      await register(f);
      navigate("/dashboard");
    } catch {
      setError("Inscription impossible. Cet e-mail est peut-être déjà utilisé.");
    }
  };

  return (
    <form onSubmit={submit} className="mx-auto w-full max-w-sm space-y-4 rounded-lg bg-white p-6 shadow">
      <h1 className="text-2xl font-semibold">Créer un compte</h1>
      {error && <p role="alert" className="rounded bg-rose-50 p-2 text-sm text-rose-700">{error}</p>}
      <label className="block text-sm">Nom (ou nom de l'entreprise)<input value={f.nom} onChange={set("nom")} className="mt-1 w-full rounded border p-2" /></label>
      <label className="block text-sm">E-mail<input type="email" value={f.email} onChange={set("email")} className="mt-1 w-full rounded border p-2" /></label>
      <label className="block text-sm">Mot de passe<input type="password" value={f.password} onChange={set("password")} className="mt-1 w-full rounded border p-2" /></label>
      <label className="block text-sm">Je suis
        <select value={f.role} onChange={set("role")} className="mt-1 w-full rounded border p-2">
          <option value="etudiant">Étudiant</option>
          <option value="entreprise">Entreprise</option>
        </select>
      </label>
      {f.role === "etudiant" && (
        <label className="block text-sm">Spécialité<input value={f.specialite} onChange={set("specialite")} className="mt-1 w-full rounded border p-2" /></label>
      )}
      <Button className="w-full">Créer mon compte</Button>
    </form>
  );
}
