import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import NotificationBell from "../../features/notifications/components/NotificationBell";
import Button from "./Button";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <header className="flex items-center justify-between bg-ink px-6 py-3 text-white">
      <Link to="/" className="text-lg font-semibold">Gestion des stages</Link>
      <nav className="flex items-center gap-4">
        {user ? (
          <>
            <NotificationBell />
            <Link to="/profile" className="hover:underline">{user.nom}</Link>
            <Button variant="outline" onClick={() => { logout(); navigate("/login"); }}>Se déconnecter</Button>
          </>
        ) : (
          <>
            <Link to="/login">Connexion</Link>
            <Link to="/register">Inscription</Link>
          </>
        )}
      </nav>
    </header>
  );
}
