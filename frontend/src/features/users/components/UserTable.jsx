import Button from "../../../components/common/Button";

export default function UserTable({ users, onToggle }) {
  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="border-b bg-slate-50">
          <tr><th className="p-3">Nom</th><th className="p-3">E-mail</th><th className="p-3">Statut</th><th className="p-3">Action</th></tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-b last:border-0">
              <td className="p-3">{u.nom}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3">{u.actif ? "Actif" : "Désactivé"}</td>
              <td className="p-3">
                <Button variant="outline" onClick={() => onToggle(u)}>{u.actif ? "Désactiver" : "Réactiver"}</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
