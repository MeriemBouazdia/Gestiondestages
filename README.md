# Gestion des stages

- `frontend/` : application React (Vite + Tailwind + React Router + Axios)
- `backend/` : API (à développer)
- `database/` : `schema.sql` et `seed.sql` (à ajouter)
- `docs/` : documentation

## Lancer le front-end

    cd frontend
    npm install
    npm run dev

Le front fonctionne sans back-end (données de démonstration dans `src/services/api.js`).
Pour brancher l'API : `USE_MOCK = false` et `VITE_API_URL=http://localhost:5000/api`.
