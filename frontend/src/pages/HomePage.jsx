import React from 'react';
import { FaGraduationCap, FaBuilding, FaUserTie, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import '../styles/home.css';

export default function HomePage({ t, lang, setLang, darkMode, setDarkMode, onNavigate }) {
  return (
    <div className="home-container" id="accueil">
      {/* Navbar العلوي */}
      <header className="home-header">
        <div className="home-logo">
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
          <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button className="btn-connexion" onClick={() => onNavigate('login')}>
            {t.loginBtn}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-left">
          <span className="hero-tag">{t.welcomeTag}</span>
          <h1>
            {t.heroTitle1} <span>{t.heroTitleHighlight}</span> {t.heroTitle2}
          </h1>
          <p>{t.heroDesc}</p>
          <div className="hero-cta-group">
            <button className="btn-commencer" onClick={() => onNavigate('register')}>
              {t.startBtn} <FaArrowRight style={{ marginLeft: '6px' }} />
            </button>
          </div>
        </div>

        <div className="hero-right-card">
          <div className="hero-cap-icon"><FaGraduationCap /></div>
          <h2>StageManager UHBC</h2>
          <p>Plateforme officielle de gestion des stages universitaires</p>
        </div>
      </section>

      {/* À propos de StageManager */}
      <section className="about-section" id="apropos">
        <h2>À propos de StageManager</h2>
        <p>
          StageManager est une application web dédiée à la gestion centralisée des stages universitaires 
          de l'Université Hassiba Benbouali de Chlef (UHBC). Elle simplifie les interactions entre l'administration, 
          les étudiants et les encadrants académiques.
        </p>
      </section>

      {/* Nos Services */}
      <section className="services-section" id="services">
        <h2>Nos Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon" style={{ color: 'var(--cyan-primary)' }}><FaGraduationCap /></div>
            <h3>Gestion des étudiants</h3>
            <p>Consulter les profils, postuler aux offres publiées par l'administration et suivre l'état des dossiers en temps réel.</p>
          </div>

          <div className="service-card">
            <div className="service-icon" style={{ color: 'var(--cyan-primary)' }}><FaBuilding /></div>
            <h3>Gestion des offres</h3>
            <p>Saisie, publication et modération centralisée des offres de stage par l'administration universitaire.</p>
          </div>

          <div className="service-card">
            <div className="service-icon" style={{ color: 'var(--cyan-primary)' }}><FaUserTie /></div>
            <h3>Suivi des encadreurs</h3>
            <p>Affectation des encadrants universitaires, téléchargement des rapports de stage et validation des notes finales.</p>
          </div>
        </div>
      </section>

      {/* Prêt à commencer ? */}
      <section className="cta-section" id="contact">
        <h2>Prêt à commencer ?</h2>
        <p>Rejoignez StageManager et simplifiez la gestion de votre parcours de stage dès aujourd'hui.</p>
        <button className="btn-commencer" onClick={() => onNavigate('login')}>
          {t.loginBtn}
        </button>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>© 2026 <span>StageManager UHBC</span> - Tous droits réservés.</p>
      </footer>
    </div>
  );
}