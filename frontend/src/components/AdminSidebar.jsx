import React from 'react';
import { FaUserShield, FaChartBar, FaBullhorn, FaClipboardCheck, FaLink, FaUsers, FaSignOutAlt } from 'react-icons/fa';

export default function AdminSidebar({ activeTab, setActiveTab, onLogout }) {
  return (
    <aside className="dash-sidebar">
      <div>
        <div className="dash-brand">
          <FaUserShield style={{ marginRight: '8px' }} /> Administration
        </div>
        <nav className="dash-menu">
          <button className={`dash-menu-btn ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
            <FaChartBar /> Vue d'ensemble
          </button>
          <button className={`dash-menu-btn ${activeTab === 'offers' ? 'active' : ''}`} onClick={() => setActiveTab('offers')}>
            <FaBullhorn /> Gérer les Offres
          </button>
          <button className={`dash-menu-btn ${activeTab === 'applications' ? 'active' : ''}`} onClick={() => setActiveTab('applications')}>
            <FaClipboardCheck /> Valider les Candidatures
          </button>
          <button className={`dash-menu-btn ${activeTab === 'assignments' ? 'active' : ''}`} onClick={() => setActiveTab('assignments')}>
            <FaLink /> Affecter Encadrants
          </button>
          <button className={`dash-menu-btn ${activeTab === 'users' ? 'active' : ''}`} onClick={() => setActiveTab('users')}>
            <FaUsers /> Gestion des Comptes
          </button>
        </nav>
      </div>
      <button className="dash-logout-btn" onClick={onLogout}>
        <FaSignOutAlt style={{ marginRight: '6px' }} /> Déconnexion
      </button>
    </aside>
  );
}