import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import useStages from "../hooks/useStages";
import { stageService } from "../services/stageService";
import StageList from "../components/StageList";
import Modal from "../../../components/common/Modal";
import PageState from "../../../components/common/PageState";

export default function StagesPage() {
  const { user } = useAuth();
  const { data, loading, error, reload } = useStages();
  const [q, setQ] = useState("");
  const [domaine, setDomaine] = useState("");
  const [toDelete, setToDelete] = useState(null);

  const all = data || [];
  const stages = all.filter(
    (s) =>
      (user.role !== "entreprise" || s.entrepriseId === user.id) &&
      (user.role !== "etudiant" || s.etat === "ouverte") &&
      (!domaine || s.domaine === domaine) &&
      `${s.titre} ${s.entreprise}`.toLowerCase().includes(q.toLowerCase())
  );

  const confirmDelete = async () => {
    await stageService.remove(toDelete.id);
    setToDelete(null);
    reload();
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">{user.role === "entreprise" ? "Mes offres" : "Offres de stage"}</h1>
      <div className="flex flex-wrap gap-2">
        <input placeholder="Rechercher un titre ou une entreprise" value={q} onChange={(e) => setQ(e.target.value)} className="w-72 rounded border p-2" />
        <select value={domaine} onChange={(e) => setDomaine(e.target.value)} className="rounded border p-2">
          <option value="">Tous les domaines</option>
          {[...new Set(all.map((s) => s.domaine))].map((d) => <option key={d}>{d}</option>)}
        </select>
      </div>
      <PageState loading={loading} error={error} empty={!stages.length} emptyText="Aucune offre ne correspond à votre recherche.">
        <StageList stages={stages} role={user.role} onDelete={setToDelete} />
      </PageState>
      <Modal open={!!toDelete} title="Supprimer l'offre" onClose={() => setToDelete(null)} onConfirm={confirmDelete} confirmLabel="Supprimer">
        Voulez-vous supprimer « {toDelete?.titre} » ? Cette action est définitive.
      </Modal>
    </div>
  );
}
