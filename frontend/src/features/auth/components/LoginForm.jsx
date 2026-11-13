import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import Button from "../../../components/common/Button";

export default function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [f, setF] = useState({ email: "", password: "", role: "etudiant" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!f.email.includes("@") || f.password.length < 6) {
      return setError("Saisissez un e-mail valide et un mot de passe de 6 caractères minimum.");
    }
    setLoading(true);
    try {
      await login(f.email, f.password, f.role);
      navigate("/dashboard");
    } catch {
      setError("Connexion impossible. Vérifiez vos identifiants.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="mx-auto w-full max-w-sm space-y-4 rounded-lg bg-white p-6 shadow">
      <h1 className="text-2xl font-semibold">Connexion</h1>
      {error && <p role="alert" className="rounded bg-rose-50 p-2 text-sm text-rose-700">{error}</p>}
      <label className="block text-sm">E-mail<input type="email" value={f.email} onChange={set("email")} className="mt-1 w-full rounded border p-2" /></label>
      <label className="block text-sm">Mot de passe<input type="password" value={f.password} onChange={set("password")} className="mt-1 w-full rounded border p-2" /></label>
      {/* Démo uniquement : le vrai rôle viendra de l'API */}
      <label className="block text-sm">Rôle (démo)
        <select value={f.role} onChange={set("role")} className="mt-1 w-full rounded border p-2">
          <option value="etudiant">Étudiant</option>
          <option value="entreprise">Entreprise</option>
          <option value="encadrant">Encadrant</option>
          <option value="admin">Administrateur</option>
        </select>
      </label>
      <Button disabled={loading} className="w-full">{loading ? "Connexion…" : "Se connecter"}</Button>
    </form>
  );
}
