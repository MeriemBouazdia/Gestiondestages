import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl space-y-4 py-12">
      <h1 className="text-3xl font-semibold">Tous vos stages au même endroit</h1>
      <p className="text-slate-600">Publiez des offres, postulez, suivez votre stage et déposez votre rapport, que vous soyez étudiant, entreprise, encadrant ou administrateur.</p>
      <div className="flex gap-3">
        <Link to="/login" className="rounded bg-brand px-4 py-2 text-white">Se connecter</Link>
        <Link to="/register" className="rounded border px-4 py-2">Créer un compte</Link>
      </div>
    </div>
  );
}
