import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { useReceivedApplications } from "../hooks/useApplications";
import { applicationService } from "../services/applicationService";
import ApplicationList from "../components/ApplicationList";
import Modal from "../../../components/common/Modal";
import Button from "../../../components/common/Button";
import PageState from "../../../components/common/PageState";

export default function ReceivedApplicationsPage() {
  const { user } = useAuth();
  const { data, loading, error, reload } = useReceivedApplications(user.id);
  const [pending, setPending] = useState(null); // { app, statut }

  const confirm = async () => {
    await applicationService.decide(pending.app, pending.statut);
    setPending(null);
    reload();
  };
  const accepted = (data || []).filter((a) => a.statut === "acceptee");

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Candidatures reçues</h1>
      <PageState loading={loading} error={error} empty={data && !data.length} emptyText="Aucune candidature reçue pour le moment.">
        <ApplicationList
          apps={data || []}
          showStudent
          renderActions={(a) =>
            a.statut === "en_attente" && (
              <>
                <Button onClick={() => setPending({ app: a, statut: "acceptee" })}>Accepter</Button>
                <Button variant="outline" onClick={() => setPending({ app: a, statut: "refusee" })}>Refuser</Button>
              </>
            )
          }
        />
        {accepted.length > 0 && (
          <section className="pt-4">
            <h2 className="mb-2 font-semibold">Étudiants retenus</h2>
            <ul className="list-inside list-disc">{accepted.map((a) => <li key={a.id}>{a.etudiant} · {a.titre}</li>)}</ul>
          </section>
        )}
      </PageState>
      <Modal open={!!pending} title="Confirmer la décision" onClose={() => setPending(null)} onConfirm={confirm} confirmLabel={pending?.statut === "acceptee" ? "Accepter" : "Refuser"}>
        {pending?.statut === "acceptee" ? "Accepter" : "Refuser"} la candidature de {pending?.app.etudiant} ?
      </Modal>
    </div>
  );
}
