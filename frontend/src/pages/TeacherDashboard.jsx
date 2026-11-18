import React, { useState } from 'react';
import { FaFileDownload, FaStar, FaClipboardCheck } from 'react-icons/fa';
import { MOCK_APPLICATIONS } from '../data/mockDatabase';
import TeacherSidebar from '../components/TeacherSidebar';
import '../styles/dashboard.css';

export default function TeacherDashboard({ user, onLogout }) {
  const [applications, setApplications] = useState(MOCK_APPLICATIONS);
  const [selectedApp, setSelectedApp] = useState(MOCK_APPLICATIONS[0]);
  const [grade, setGrade] = useState(selectedApp?.evaluationNote || '17');
  const [remark, setRemark] = useState(selectedApp?.supervisorRemark || '');

  const handleEvaluate = (e) => {
    e.preventDefault();
    setApplications(applications.map(a => a.id === selectedApp.id ? { ...a, evaluationNote: grade, supervisorRemark: remark } : a));
    alert('Évaluation et validation enregistrées avec succès !');
  };

  return (
    <div className="dash-wrapper">
      <TeacherSidebar onLogout={onLogout} />

      <main className="dash-main">
        <header className="dash-topbar">
          <div>
            <h2>Dr. {user.fullName}</h2>
            <p>Suivi pédagogique, téléchargement des rapports et évaluation finale</p>
          </div>
        </header>

        <div className="dash-panel">
          <h3>Liste des étudiants affectés et avancement du stage</h3>
          <table className="dash-table">
            <thead>
              <tr><th>Étudiant</th><th>Entreprise</th><th>Rapport de stage (PDF)</th><th>Note / 20</th><th>Action</th></tr>
            </thead>
            <tbody>
              {applications.map(a => (
                <tr key={a.id}>
                  <td><strong>{a.studentName}</strong></td>
                  <td>{a.companyName}</td>
                  <td>
                    {a.reportFileName ? (
                      <button className="btn-action btn-blue" onClick={() => alert(`Téléchargement de : ${a.reportFileName}`)}>
                        <FaFileDownload style={{ marginRight: '4px' }} /> Télécharger
                      </button>
                    ) : 'Non déposé'}
                  </td>
                  <td>{a.evaluationNote} / 20</td>
                  <td>
                    <button className="btn-action btn-green" onClick={() => { setSelectedApp(a); setGrade(a.evaluationNote); setRemark(a.supervisorRemark); }}>
                      <FaClipboardCheck style={{ marginRight: '4px' }} /> Évaluer / Valider
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {selectedApp && (
          <div className="dash-panel">
            <h3>Évaluation du stagiaire : {selectedApp.studentName}</h3>
            <form onSubmit={handleEvaluate}>
              <div className="dash-form-grid">
                <div>
                  <label>Note finale (/20)</label>
                  <input className="dash-input" type="number" min="0" max="20" step="0.5" value={grade} onChange={e => setGrade(e.target.value)} required />
                </div>
                <div>
                  <label>Remarques / Observations de l'encadrant</label>
                  <input className="dash-input" value={remark} onChange={e => setRemark(e.target.value)} required />
                </div>
              </div>
              <button type="submit" className="btn-action btn-green">
                <FaStar style={{ marginRight: '4px' }} /> Valider l'évaluation et le rapport final
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}