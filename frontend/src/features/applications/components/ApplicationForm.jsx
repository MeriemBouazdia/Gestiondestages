import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { applicationService } from "../services/applicationService";
import Button from "../../../components/common/Button";

// Candidature avec CV (PDF, 5 Mo max)
export default function ApplicationForm({ stage }) {
  const { user } = useAuth();
  const [cv, setCv] = useState(null);
  const [msg, setMsg] = useState({ type: "", text: "" });

  const submit = async (e) => {
    e.preventDefault();
    if (!cv) return setMsg({ type: "error", text: "Joignez votre CV au format PDF." });
    if (cv.type !== "application/pdf") return setMsg({ type: "error", text: "Le CV doit être un fichier PDF." });
    if (cv.size > 5 * 1024 * 1024) return setMsg({ type: "error", text: "Le CV ne doit pas dépasser 5 Mo." });
    try {
      await applicationService.apply(stage, user, cv);
      setMsg({ type: "ok", text: "Candidature envoyée." });
    } catch (err) {
      setMsg({ type: "error", text: err.message || "Envoi impossible. Réessayez." });
    }
  };

  return (
    <form onSubmit={submit} className="space-y-3 rounded-lg border bg-white p-4">
      <h2 className="font-semibold">Postuler à cette offre</h2>
      {msg.text && <p role="status" className={`rounded p-2 text-sm ${msg.type === "ok" ? "bg-emerald-50" : "bg-rose-50 text-rose-700"}`}>{msg.text}</p>}
      <input type="file" accept="application/pdf" onChange={(e) => setCv(e.target.files[0])} />
      <Button>Envoyer la candidature</Button>
    </form>
  );
}
