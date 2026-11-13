import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="py-12 text-center">
      <h1 className="text-4xl font-semibold">404</h1>
      <p className="my-2">Cette page n'existe pas.</p>
      <Link to="/" className="text-brand underline">Retour à l'accueil</Link>
    </div>
  );
}
