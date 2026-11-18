import React from 'react';
import { FaGraduationCap, FaBriefcase, FaClipboardList, FaUser, FaSignOutAlt } from 'react-icons/fa';

export default function StudentSidebar({ activeTab, setActiveTab, onLogout }) {
  return (
    <aside className="dash-sidebar">
      <div>
        <div className="dash-brand">
          <FaGraduationCap style={{ marginRight: '8px' }} /> Espace Étudiant
        </div>
        <nav className="dash-menu">
          <button 
            className={`dash-menu-btn ${activeTab === 'offers' ? 'active' : ''}`} 
            onClick={() => setActiveTab('offers')}
          >
            <FaBriefcase /> Offres de stage
          </button>
          <button 
            className={`dash-menu-btn ${activeTab === 'tracking' ? 'active' : ''}`} 
            onClick={() => setActiveTab('tracking')}
          >
            <FaClipboardList /> Mes candidatures & Suivi
          </button>
          <button 
            className={`dash-menu-btn ${activeTab === 'profile' ? 'active' : ''}`} 
            onClick={() => setActiveTab('profile')}
          >
            <FaUser /> Mon Profil
          </button>
        </nav>
      </div>
      <button className="dash-logout-btn" onClick={onLogout}>
        <FaSignOutAlt style={{ marginRight: '6px' }} /> Déconnexion
      </button>
    </aside>
  );
}