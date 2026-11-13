import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { MENUS } from "../utils/menus";

export default function Dashboard() {
  const { user } = useAuth();
  const links = MENUS[user.role].filter(([to]) => to !== "/dashboard");
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Bonjour {user.nom}</h1>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(([to, label]) => (
          <li key={to}>
            <Link to={to} className="block rounded-lg bg-white p-4 shadow-sm hover:bg-slate-50">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
