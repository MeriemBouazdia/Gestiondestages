import React, { useState } from 'react';
import { FaSearch, FaFilePdf, FaCheckCircle, FaClock, FaTimesCircle } from 'react-icons/fa';
import { MOCK_OFFERS, MOCK_APPLICATIONS, MOCK_USERS } from '../data/mockDatabase';
import StudentSidebar from '../components/StudentSidebar';
import StudentProfile from '../components/StudentProfile';
import '../styles/dashboard.css';

export default function StudentDashboard({ user, onLogout }) {
  const [tab, setTab] = useState('offers');
  const [profile, setProfile] = useState(user);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDomain, setFilterDomain] = useState('');
  const [applications, setApplications] = useState(MOCK_APPLICATIONS.filter(a => a.studentId === user.id));
  const [cvFile, setCvFile] = useState('');
  const [reportFile, setReportFile] = useState('');

  const supervisor = MOCK_USERS.find(u => u.id === profile.supervisorId);

  const filteredOffers = MOCK_OFFERS.filter(o => {
    const matchesSearch = o.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          o.companyName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = filterDomain ? o.domain === filterDomain : true;
    return matchesSearch && matchesDomain;
  });

  const handleApply = (offer) => {
    if (!cvFile) return alert('Veuillez joindre votre CV (PDF) avant de postuler.');
    const newApp = {
      id: Date.now(),
      offerId: offer.id,
      offerTitle: offer.title,
      companyName: offer.companyName,
      studentId: profile.id,
      studentName: profile.fullName,
      cvFileName: cvFile,
      status: 'PENDING',
      reportFileName: '',
      evaluationNote: '-',
      supervisorRemark: 'En attente d’évaluation'
    };
    setApplications([...applications, newApp]);
    alert('Candidature déposée avec succès !');
  };

  const handleUploadReport = (appId) => {
    if (!reportFile) return alert('Veuillez sélectionner le rapport de stage (PDF).');
    setApplications(applications.map(a => a.id === appId ? { ...a, reportFileName: reportFile } : a));
    alert('Rapport de stage déposé avec succès !');
  };

  return (
    <div className="dash-wrapper">
      {/* استدعاء مكون القائمة الجانبية */}
      <StudentSidebar activeTab={tab} setActiveTab={setTab} onLogout={onLogout} />

      <main className="dash-main">
        <header className="dash-topbar">
          <div>
            <h2>Bienvenue, {profile.fullName}</h2>
            <p>Matricule : {profile.matricule} • {profile.major}</p>
          </div>
          <div className="dash-topbar-right">
            <span className="dash-badge-pill">
              Encadrant : <strong>{supervisor ? `${supervisor.fullName} (${supervisor.email})` : 'Non encore affecté'}</strong>
            </span>
          </div>
        </header>

        {tab === 'offers' && (
          <div className="dash-panel">
            <h3>Consulter et filtrer les offres de stage publiées</h3>
            <div className="dash-form-grid">
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <FaSearch style={{ position: 'absolute', left: '12px', color: 'var(--muted-light)' }} />
                <input 
                  className="dash-input" 
                  style={{ paddingLeft: '36px' }} 
                  type="text" 
                  placeholder="Rechercher par titre ou entreprise..." 
                  value={searchTerm} 
                  onChange={e => setSearchTerm(e.target.value)} 
                />
              </div>
              <select className="dash-input" value={filterDomain} onChange={e => setFilterDomain(e.target.value)}>
                <option value="">Tous les domaines</option>
                <option value="Développement Web">Développement Web</option>
                <option value="Réseaux & BDD">Réseaux & BDD</option>
              </select>
              <input className="dash-input" type="file" accept=".pdf" onChange={e => setCvFile(e.target.files[0]?.name || '')} title="Joindre le CV" />
            </div>

            <table className="dash-table">
              <thead>
                <tr><th>Titre</th><th>Entreprise</th><th>Domaine</th><th>Durée</th><th>Places</th><th>Action</th></tr>
              </thead>
              <tbody>
                {filteredOffers.map(offer => (
                  <tr key={offer.id}>
                    <td><strong>{offer.title}</strong></td>
                    <td>{offer.companyName}</td>
                    <td>{offer.domain}</td>
                    <td>{offer.duration}</td>
                    <td>{offer.places}</td>
                    <td>
                      <button className="btn-action btn-blue" onClick={() => handleApply(offer)}>Postuler</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {tab === 'tracking' && (
          <div className="dash-panel">
            <h3>Suivi des candidatures, Dépôt du Rapport & Évaluation finale</h3>
            <table className="dash-table">
              <thead>
                <tr><th>Offre / Entreprise</th><th>État Candidature</th><th>Dépôt du Rapport (PDF)</th><th>Évaluation & Remarques</th></tr>
              </thead>
              <tbody>
                {applications.map(app => (
                  <tr key={app.id}>
                    <td><strong>{app.offerTitle}</strong><br/><small>{app.companyName}</small></td>
                    <td>
                      <span className={`status-tag ${app.status === 'ACCEPTED' ? 'accepted' : app.status === 'REJECTED' ? 'rejected' : 'pending'}`}>
                        {app.status === 'ACCEPTED' && <FaCheckCircle style={{ marginRight: '4px' }} />}
                        {app.status === 'PENDING' && <FaClock style={{ marginRight: '4px' }} />}
                        {app.status === 'REJECTED' && <FaTimesCircle style={{ marginRight: '4px' }} />}
                        {app.status}
                      </span>
                    </td>
                    <td>
                      {app.status === 'ACCEPTED' ? (
                        <div>
                          <input type="file" accept=".pdf" onChange={e => setReportFile(e.target.files[0]?.name || '')} />
                          <button className="btn-action btn-green" onClick={() => handleUploadReport(app.id)}>
                            <FaFilePdf style={{ marginRight: '4px' }} /> Déposer Rapport
                          </button>
                          {app.reportFileName && <div><small style={{ color: 'var(--cyan-primary)' }}>{app.reportFileName}</small></div>}
                        </div>
                      ) : <small style={{ color: 'var(--muted-light)' }}>Disponible après acceptation</small>}
                    </td>
                    <td>
                      <strong>Note :</strong> {app.evaluationNote}/20<br/>
                      <small>Remarque : {app.supervisorRemark}</small>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* استدعاء مكون الملف الشخصي */}
        {tab === 'profile' && (
          <StudentProfile profile={profile} setProfile={setProfile} />
        )}
      </main>
    </div>
  );
}