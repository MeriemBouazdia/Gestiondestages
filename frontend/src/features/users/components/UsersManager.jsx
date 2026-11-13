import { useState } from "react";
import useUsers from "../hooks/useUsers";
import { userService } from "../services/userService";
import UserTable from "./UserTable";
import UserForm from "./UserForm";
import Modal from "../../../components/common/Modal";
import Button from "../../../components/common/Button";
import PageState from "../../../components/common/PageState";

// Liste + création + activation/désactivation pour un rôle donné
export default function UsersManager({ role, title }) {
  const { data, loading, error, reload } = useUsers(role);
  const [open, setOpen] = useState(false);

  const create = async (u) => { await userService.create(u); setOpen(false); reload(); };
  const toggle = async (u) => { await userService.toggle(u.id); reload(); };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <Button onClick={() => setOpen(true)}>Ajouter</Button>
      </div>
      <PageState loading={loading} error={error} empty={data && !data.length} emptyText="Aucun compte pour le moment.">
        <UserTable users={data || []} onToggle={toggle} />
      </PageState>
      <Modal open={open} title="Nouveau compte" onClose={() => setOpen(false)}>
        <UserForm role={role} onSubmit={create} />
      </Modal>
    </div>
  );
}
