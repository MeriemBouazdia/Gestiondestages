import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Sidebar from "../common/Sidebar";

// Espace connecté : barre du haut + menu latéral selon le rôle
export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar />
        <main className="flex-1 p-6"><Outlet /></main>
      </div>
    </div>
  );
}
