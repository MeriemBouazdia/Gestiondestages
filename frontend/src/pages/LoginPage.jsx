import React, { useState } from 'react';
import { authLogin } from '../api/stageApi';
import '../styles/auth.css';

export default function LoginPage({ t, onLoginSuccess, onNavigate }) {
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const user = await authLogin(email, password, role);
      onLoginSuccess(user);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>{t.loginBtn}</h2>
        <p className="auth-subtitle">Accédez à votre espace StageManager</p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="auth-field">
            <label>Type de compte</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student">{t.student}</option>
              <option value="teacher">{t.teacher}</option>
              <option value="admin">{t.admin}</option>
            </select>
          </div>

          <div className="auth-field">
            <label>Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="ex: amina@univ-chlef.dz" 
              required 
            />
          </div>

          <div className="auth-field">
            <label>Mot de passe</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••• (Test: 123)" 
              required 
            />
          </div>

          <button type="submit" className="auth-submit-btn">Se connecter</button>
        </form>

        {role === 'student' && (
          <div className="auth-footer-links">
            <span>Nouveau étudiant ? </span>
            <button className="auth-link-btn" onClick={() => onNavigate('register')}>
              Créer un compte
            </button>
          </div>
        )}

        <button className="auth-back-btn" onClick={() => onNavigate('home')}>
          ← Retour à l'accueil
        </button>
      </div>
    </div>
  );
}