import { useState } from "react";
import Button from "../../../components/common/Button";

export default function ReportUpload({ onUpload }) {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!file) return setErr("Choisissez un fichier PDF.");
    if (file.type !== "application/pdf") return setErr("Le rapport doit être un fichier PDF.");
    if (file.size > 10 * 1024 * 1024) return setErr("Le rapport ne doit pas dépasser 10 Mo.");
    setErr("");
    await onUpload(file);
    setFile(null);
    e.target.reset();
  };

  return (
    <form onSubmit={submit} className="max-w-md space-y-3 rounded-lg bg-white p-4 shadow-sm">
      <h2 className="font-semibold">Déposer un rapport</h2>
      {err && <p role="alert" className="text-sm text-rose-700">{err}</p>}
      <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} />
      <Button>Déposer</Button>
    </form>
  );
}
