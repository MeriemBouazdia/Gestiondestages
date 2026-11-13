import axios from "axios";

// true = données de démonstration en mémoire (sans back-end). Mettre false pour utiliser l'API.
export const USE_MOCK = true;

export const http = axios.create({ baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api" });
http.interceptors.request.use((cfg) => {
  const token = localStorage.getItem("token");
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

// Base de démonstration
export const db = {
  users: [
    { id: 1, nom: "Amine Benali", email: "amine@univ.dz", role: "etudiant", specialite: "Informatique", actif: true },
    { id: 2, nom: "Sonatrach", email: "rh@sonatrach.dz", role: "entreprise", actif: true },
    { id: 3, nom: "Dr. Kaci", email: "kaci@univ.dz", role: "encadrant", actif: true },
    { id: 4, nom: "Administrateur", email: "admin@univ.dz", role: "admin", actif: true },
    { id: 5, nom: "Sara Khelifi", email: "sara@univ.dz", role: "etudiant", specialite: "Réseaux", actif: true },
  ],
  stages: [
    { id: 1, titre: "Développeur web junior", entrepriseId: 2, entreprise: "Sonatrach", domaine: "Informatique", type: "PFE", duree: "3 mois", places: 2, etat: "ouverte", description: "Développement d'une application web interne." },
    { id: 2, titre: "Assistant réseaux", entrepriseId: 2, entreprise: "Sonatrach", domaine: "Réseaux", type: "Stage d'été", duree: "1 mois", places: 3, etat: "ouverte", description: "Supervision et maintenance du réseau local." },
  ],
  applications: [
    { id: 1, stageId: 1, titre: "Développeur web junior", etudiantId: 1, etudiant: "Amine Benali", cv: "cv_amine.pdf", statut: "acceptee" },
    { id: 2, stageId: 2, titre: "Assistant réseaux", etudiantId: 5, etudiant: "Sara Khelifi", cv: "cv_sara.pdf", statut: "en_attente" },
  ],
  assignments: [{ id: 1, etudiantId: 1, encadrantId: 3, progression: 40 }],
  reports: [{ id: 1, etudiantId: 1, nom: "rapport_v1.pdf", date: "2026-11-01", remarque: "" }],
  evaluations: [],
  notifications: [{ id: 1, userId: 1, texte: "Votre candidature a été acceptée.", lu: false }],
};

const wait = (ms = 250) => new Promise((r) => setTimeout(r, ms));
const clone = (v) => (v === undefined ? null : JSON.parse(JSON.stringify(v)));

// respond(mock, real) : exécute la version mock ou l'appel API réel
export const respond = async (mock, real) => {
  if (USE_MOCK) {
    await wait();
    return clone(mock());
  }
  return (await real()).data;
};
