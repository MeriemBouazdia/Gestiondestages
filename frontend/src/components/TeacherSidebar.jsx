import React from 'react';
import { FaChalkboardTeacher, FaUsers, FaSignOutAlt } from 'react-icons/fa';

export default function TeacherSidebar({ onLogout }) {
  return (
    <aside className="dash-sidebar">
      <div>
        <div className="dash-brand">
          <FaChalkboardTeacher style={{ marginRight: '8px' }} /> Espace Encadrant
        </div>
        <nav className="dash-menu">
          <button className="dash-menu-btn active">
            <FaUsers /> Suivi des stagiaires
          </button>
        </nav>
      </div>
      <button className="dash-logout-btn" onClick={onLogout}>
        <FaSignOutAlt style={{ marginRight: '6px' }} /> Déconnexion
      </button>
    </aside>
  );
}