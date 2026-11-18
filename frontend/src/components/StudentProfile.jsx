import React from 'react';

export default function StudentProfile({ profile, setProfile }) {
  const handleSave = (e) => {
    e.preventDefault();
    alert('Profil mis à jour avec succès !');
  };

  return (
    <div className="dash-panel">
      <h3>Consulter et modifier son profil</h3>
      <form onSubmit={handleSave}>
        <div className="dash-form-grid">
          <div>
            <label>Nom complet</label>
            <input 
              className="dash-input" 
              value={profile.fullName} 
              onChange={e => setProfile({ ...profile, fullName: e.target.value })} 
            />
          </div>
          <div>
            <label>Téléphone</label>
            <input 
              className="dash-input" 
              value={profile.phone || ''} 
              onChange={e => setProfile({ ...profile, phone: e.target.value })} 
            />
          </div>
          <div>
            <label>Spécialité / Formation</label>
            <input 
              className="dash-input" 
              value={profile.major} 
              onChange={e => setProfile({ ...profile, major: e.target.value })} 
            />
          </div>
        </div>
        <button type="submit" className="btn-action btn-green">
          Enregistrer les modifications
        </button>
      </form>
    </div>
  );
}