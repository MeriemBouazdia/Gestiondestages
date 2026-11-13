import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Non connecté -> /login ; rôle non autorisé -> /403
export default function ProtectedRoute({ roles }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/403" replace />;
  return <Outlet />;
}
