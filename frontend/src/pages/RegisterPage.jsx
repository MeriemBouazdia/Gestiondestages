import React, { useState } from 'react';
import { authRegisterStudent } from '../api/stageApi';
import '../styles/auth.css';

export default function RegisterPage({ onNavigate }) {
  const [form, setForm] = useState({
    fullName: '',
    matricule: '',
    email: '',
    major: 'Informatique - ISI',
    level: 'Master 1',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await authRegisterStudent(form);
    alert('Compte étudiant créé avec succès ! Vous pouvez maintenant vous connecter.');
    onNavigate('login');
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>Inscription Étudiant</h2>
        <p className="auth-subtitle">Réservé uniquement aux étudiants universitaires</p>

        <form onSubmit={handleSubmit}>
          <div className="auth-field">
            <label>Nom et Prénom</label>
            <input type="text" required value={form.fullName} onChange={e => setForm({...form, fullName: e.target.value})} placeholder="Amina Belkacem" />
          </div>

          <div className="auth-field">
            <label>Matricule scolaire</label>
            <input type="text" required value={form.matricule} onChange={e => setForm({...form, matricule: e.target.value})} placeholder="20263104892" />
          </div>

          <div className="auth-field">
            <label>Email universitaire</label>
            <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="amina@univ-chlef.dz" />
          </div>

          <div className="auth-field">
            <label>Filière / Spécialité</label>
            <input type="text" required value={form.major} onChange={e => setForm({...form, major: e.target.value})} />
          </div>

          <div className="auth-field">
            <label>Mot de passe</label>
            <input type="password" required value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
          </div>

          <button type="submit" className="auth-submit-btn">S'inscrire</button>
        </form>

        <div className="auth-footer-links">
          <span>Déjà inscrit ? </span>
          <button className="auth-link-btn" onClick={() => onNavigate('login')}>Se connecter</button>
        </div>

        <button className="auth-back-btn" onClick={() => onNavigate('home')}>← Retour à l'accueil</button>
      </div>
    </div>
  );
}