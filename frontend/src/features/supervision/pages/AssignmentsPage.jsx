import { useAllAssignments } from "../hooks/useSupervision";
import { supervisionService } from "../services/supervisionService";
import useUsers from "../../users/hooks/useUsers";
import AssignForm from "../components/AssignForm";
import SupervisionTable from "../components/SupervisionTable";
import PageState from "../../../components/common/PageState";

// Admin : affecter un encadrant à un étudiant et suivre les affectations
export default function AssignmentsPage() {
  const { data, loading, error, reload } = useAllAssignments();
  const students = useUsers("etudiant").data || [];
  const supervisors = useUsers("encadrant").data || [];

  const assign = async (etu, enc) => { await supervisionService.assign(etu, enc); reload(); };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Affectations</h1>
      <AssignForm students={students} supervisors={supervisors} onAssign={assign} />
      <PageState loading={loading} error={error} empty={data && !data.length} emptyText="Aucune affectation pour le moment.">
        <SupervisionTable rows={data || []} />
      </PageState>
    </div>
  );
}
