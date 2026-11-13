import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { MENUS } from "../../utils/menus";

export default function Sidebar() {
  const { user } = useAuth();
  return (
    <aside className="bg-white p-4 md:w-60 md:border-r">
      <nav className="flex flex-wrap gap-1 md:flex-col">
        {MENUS[user.role].map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            end
            className={({ isActive }) => `rounded px-3 py-2 ${isActive ? "bg-brand text-white" : "hover:bg-slate-100"}`}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
