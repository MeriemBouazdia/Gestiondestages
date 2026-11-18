import React from 'react';
import { FaGraduationCap, FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar({ t, lang, setLang, darkMode, setDarkMode, onNavigate }) {
  return (
    <header className="home-header">
      <div className="home-logo" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
        <FaGraduationCap style={{ marginRight: '8px', color: 'var(--cyan-primary)' }} />
        Stage<span>Manager</span>
      </div>

      <nav className="home-nav">
        <a href="#accueil">Accueil</a>
        <a href="#apropos">À propos</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="home-controls">
        <div className="lang-group">
          <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>FR</button>
          <button className={lang === 'ar' ? 'active' : ''} onClick={() => setLang('ar')}>AR</button>
          <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
        </div>
        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)} title="Changer le thème">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button className="btn-connexion" onClick={() => onNavigate('login')}>
          {t.loginBtn}
        </button>
      </div>
    </header>
  );
}