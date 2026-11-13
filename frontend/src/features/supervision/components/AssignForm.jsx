import { useState } from "react";
import Button from "../../../components/common/Button";

export default function AssignForm({ students, supervisors, onAssign }) {
  const [etu, setEtu] = useState("");
  const [enc, setEnc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (etu && enc) onAssign(Number(etu), Number(enc));
  };
  const sel = "rounded border p-2";
  return (
    <form onSubmit={submit} className="flex flex-wrap items-end gap-3 rounded-lg bg-white p-4 shadow-sm">
      <label className="text-sm">Étudiant
        <select className={`${sel} mt-1 block`} value={etu} onChange={(e) => setEtu(e.target.value)}>
          <option value="">Choisir…</option>
          {students.map((u) => <option key={u.id} value={u.id}>{u.nom}</option>)}
        </select>
      </label>
      <label className="text-sm">Encadrant
        <select className={`${sel} mt-1 block`} value={enc} onChange={(e) => setEnc(e.target.value)}>
          <option value="">Choisir…</option>
          {supervisors.map((u) => <option key={u.id} value={u.id}>{u.nom}</option>)}
        </select>
      </label>
      <Button disabled={!etu || !enc}>Affecter</Button>
    </form>
  );
}
