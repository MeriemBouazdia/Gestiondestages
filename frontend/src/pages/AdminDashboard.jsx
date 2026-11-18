import React, { useState } from 'react';
import { FaUserShield, FaBullhorn, FaClipboardCheck, FaUsers, FaPlus, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import { MOCK_USERS, MOCK_OFFERS, MOCK_APPLICATIONS } from '../data/mockDatabase';
import AdminSidebar from '../components/AdminSidebar';
import '../styles/dashboard.css';

export default function AdminDashboard({ user, onLogout }) {
  const [tab, setTab] = useState('overview');
  const [users, setUsers] = useState(MOCK_USERS);
  const [offers, setOffers] = useState(MOCK_OFFERS);
  const [applications, setApplications] = useState(MOCK_APPLICATIONS);
  const [newOffer, setNewOffer] = useState({ title: '', companyName: '', domain: '', duration: '3 mois', places: 2 });

  const students = users.filter(u => u.role === 'student');
  const teachers = users.filter(u => u.role === 'teacher');

  const handleCreateOffer = (e) => {
    e.preventDefault();
    const created = { id: Date.now(), createdBy: user.id, status: 'OPEN', ...newOffer };
    setOffers(prev => [...prev, created]);
    setNewOffer({ title: '', companyName: '', domain: '', duration: '3 mois', places: 2 });
    alert('Offre de stage publiée avec succès !');
  };

  const handleAssignSupervisor = (studentId, teacherId) => {
    setUsers(prev => prev.map(u => u.id === Number(studentId) ? { ...u, supervisorId: Number(teacherId) } : u));
    alert('Encadrant universitaire affecté avec succès !');
  };

  const handleToggleUser = (userId) => {
    setUsers(prev => prev.map(u => u.id === userId ? { ...u, active: !u.active } : u));
  };

  const handleReviewApp = (appId, newStatus) => {
    setApplications(prev => prev.map(app => app.id === appId ? { ...app, status: newStatus } : app));
    alert(`Le statut de la candidature a été mis à jour avec succès : ${newStatus}`);
  };

  return (
    <div className="dash-wrapper">
      <AdminSidebar activeTab={tab} setActiveTab={setTab} onLogout={onLogout} />

      <main className="dash-main">
        <header className="dash-topbar">
          <div>
            <h2>Espace Administrateur UHBC</h2>
            <p>Supervision globale, validation des candidatures et gestion des stages</p>
          </div>
        </header>

        {tab === 'overview' && (
          <div className="dash-stats-row">
            <div className="dash-stat-box"><div className="stat-circle"><FaUsers /></div><div><h3>{students.length}</h3><span>Étudiants</span></div></div>
            <div className="dash-stat-box"><div className="stat-circle"><FaUserShield /></div><div><h3>{teachers.length}</h3><span>Encadrants</span></div></div>
            <div className="dash-stat-box"><div className="stat-circle"><FaBullhorn /></div><div><h3>{offers.length}</h3><span>Offres</span></div></div>
            <div className="dash-stat-box"><div className="stat-circle"><FaClipboardCheck /></div><div><h3>{applications.length}</h3><span>Candidatures</span></div></div>
          </div>
        )}

        {tab === 'offers' && (
          <>
            <div className="dash-panel">
              <h3>Publier une offre de stage</h3>
              <form onSubmit={handleCreateOffer}>
                <div className="dash-form-grid">
                  <input className="dash-input" required placeholder="Titre" value={newOffer.title} onChange={e => setNewOffer({...newOffer, title: e.target.value})} />
                  <input className="dash-input" required placeholder="Entreprise" value={newOffer.companyName} onChange={e => setNewOffer({...newOffer, companyName: e.target.value})} />
                  <input className="dash-input" required placeholder="Domaine" value={newOffer.domain} onChange={e => setNewOffer({...newOffer, domain: e.target.value})} />
                  <input className="dash-input" required placeholder="Durée" value={newOffer.duration} onChange={e => setNewOffer({...newOffer, duration: e.target.value})} />
                  <input className="dash-input" type="number" min="1" required placeholder="Places" value={newOffer.places} onChange={e => setNewOffer({...newOffer, places: e.target.value})} />
                </div>
                <button type="submit" className="btn-action btn-blue">
                  <FaPlus style={{ marginRight: '4px' }} /> Publier l'offre
                </button>
              </form>
            </div>

            <div className="dash-panel">
              <h3>Offres enregistrées</h3>
              <table className="dash-table">
                <thead>
                  <tr><th>Titre</th><th>Entreprise</th><th>Domaine</th><th>Action</th></tr>
                </thead>
                <tbody>
                  {offers.map(o => (
                    <tr key={o.id}>
                      <td>{o.title}</td><td>{o.companyName}</td><td>{o.domain}</td>
                      <td>
                        <button className="btn-action btn-red" onClick={() => setOffers(offers.filter(item => item.id !== o.id))}>
                          <FaTrash style={{ marginRight: '4px' }} /> Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {tab === 'applications' && (
          <div className="dash-panel">
            <h3>Validation des candidatures étudiantes</h3>
            <table className="dash-table">
              <thead>
                <tr><th>Étudiant</th><th>Offre / Entreprise</th><th>CV</th><th>Statut Actuel</th><th>Action de Validation</th></tr>
              </thead>
              <tbody>
                {applications.map(app => (
                  <tr key={app.id}>
                    <td><strong>{app.studentName}</strong></td>
                    <td>{app.offerTitle} <br/><small>{app.companyName}</small></td>
                    <td>{app.cvFileName || 'CV.pdf'}</td>
                    <td>
                      <span className={`status-tag ${app.status === 'ACCEPTED' ? 'accepted' : app.status === 'REJECTED' ? 'rejected' : 'pending'}`}>
                        {app.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn-action btn-green" onClick={() => handleReviewApp(app.id, 'ACCEPTED')} style={{ marginRight: '6px' }}>
                        <FaCheck style={{ marginRight: '4px' }} /> Accepter
                      </button>
                      <button className="btn-action btn-red" onClick={() => handleReviewApp(app.id, 'REJECTED')}>
                        <FaTimes style={{ marginRight: '4px' }} /> Refuser
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === 'assignments' && (
          <div className="dash-panel">
            <h3>Affecter un encadrant universitaire</h3>
            <table className="dash-table">
              <thead>
                <tr><th>Étudiant</th><th>Matricule</th><th>Encadrant assigné</th></tr>
              </thead>
              <tbody>
                {students.map(st => (
                  <tr key={st.id}>
                    <td><strong>{st.fullName}</strong></td>
                    <td>{st.matricule}</td>
                    <td>
                      <select className="dash-input" value={st.supervisorId || ''} onChange={e => handleAssignSupervisor(st.id, e.target.value)}>
                        <option value="">-- Choisir --</option>
                        {teachers.map(tc => <option key={tc.id} value={tc.id}>{tc.fullName}</option>)}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === 'users' && (
          <div className="dash-panel">
            <h3>Gestion des utilisateurs</h3>
            <table className="dash-table">
              <thead>
                <tr><th>Nom</th><th>Email</th><th>Rôle</th><th>Action</th></tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u.id}>
                    <td>{u.fullName}</td><td>{u.email}</td><td>{u.role.toUpperCase()}</td>
                    <td>
                      <button className={`btn-action ${u.active ? 'btn-red' : 'btn-green'}`} onClick={() => handleToggleUser(u.id)}>
                        {u.active ? 'Désactiver' : 'Activer'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}