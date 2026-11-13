import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <div className="py-12 text-center">
      <h1 className="text-4xl font-semibold">403</h1>
      <p className="my-2">Vous n'avez pas accès à cette page.</p>
      <Link to="/dashboard" className="text-brand underline">Retour au tableau de bord</Link>
    </div>
  );
}
