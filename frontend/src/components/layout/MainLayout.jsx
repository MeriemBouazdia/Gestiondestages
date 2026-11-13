import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

// Pages publiques : accueil, connexion, inscription, erreurs
export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 p-6"><Outlet /></main>
      <Footer />
    </div>
  );
}
