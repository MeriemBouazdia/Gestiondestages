import React, { useState, useEffect } from 'react';
import { translations } from '../translations'; // أو './translations' حسب مسار ملفك
import AppRoutes from '../routes/AppRoutes';
import '../styles/global.css';

export default function App() {
  const [lang, setLang] = useState('fr');
  const [darkMode, setDarkMode] = useState(false);

  // استرجاع المستخدم من الذاكرة المحلية لتجنب تسجيل الخروج عند الـ Refresh
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // استرجاع الصفحة الحالية أو البدء بـ 'home'
  const [view, setView] = useState(() => {
    return localStorage.getItem('currentView') || 'home';
  });

  // حفظ المستخدم والصفحة في localStorage كلما تغيرت
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      localStorage.setItem('currentView', 'dashboard');
    } else {
      localStorage.removeItem('currentUser');
      localStorage.setItem('currentView', view);
    }
  }, [currentUser, view]);

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    setView('dashboard');
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('currentView', 'dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setView('home');
    localStorage.removeItem('currentUser');
    localStorage.setItem('currentView', 'home');
  };

  return (
    <div className={`app-root ${darkMode ? 'dark' : 'light'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* شريط أدوات عائم عام يظهر في كل الصفحات (اللغة + الثيم) ومُصحح ليكون واضحاً تماماً في الوضع الليلي والنهاري */}
      <div className="global-floating-controls" style={{
        position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999,
        display: 'flex', alignItems: 'center', gap: '8px', 
        background: darkMode ? 'var(--card-dark)' : 'var(--card-light)', 
        color: darkMode ? 'var(--text-dark)' : 'var(--text-light)',
        padding: '8px 14px', borderRadius: '30px', 
        boxShadow: darkMode ? '0 4px 20px rgba(0,0,0,0.5)' : '0 4px 15px rgba(0,0,0,0.15)',
        border: '1px solid var(--border-light)'
      }}>
        <div className="lang-group" style={{ display: 'flex', gap: '4px' }}>
          <button 
            onClick={() => setLang('fr')} 
            style={{
              background: lang === 'fr' ? 'var(--cyan-primary)' : 'transparent', 
              color: lang === 'fr' ? '#fff' : (darkMode ? '#f1f5f9' : '#1e293b'), 
              border: 'none', padding: '5px 10px', borderRadius: '15px', 
              cursor: 'pointer', fontSize: '0.82rem', fontWeight: '700',
              transition: 'all 0.2s'
            }}>
            FR
          </button>
          <button 
            onClick={() => setLang('ar')} 
            style={{
              background: lang === 'ar' ? 'var(--cyan-primary)' : 'transparent', 
              color: lang === 'ar' ? '#fff' : (darkMode ? '#f1f5f9' : '#1e293b'), 
              border: 'none', padding: '5px 10px', borderRadius: '15px', 
              cursor: 'pointer', fontSize: '0.82rem', fontWeight: '700',
              transition: 'all 0.2s'
            }}>
            AR
          </button>
          <button 
            onClick={() => setLang('en')} 
            style={{
              background: lang === 'en' ? 'var(--cyan-primary)' : 'transparent', 
              color: lang === 'en' ? '#fff' : (darkMode ? '#f1f5f9' : '#1e293b'), 
              border: 'none', padding: '5px 10px', borderRadius: '15px', 
              cursor: 'pointer', fontSize: '0.82rem', fontWeight: '700',
              transition: 'all 0.2s'
            }}>
            EN
          </button>
        </div>

        <div style={{ width: '1px', height: '20px', background: 'var(--border-light)', margin: '0 4px' }}></div>

        <button 
          onClick={() => setDarkMode(!darkMode)} 
          style={{
            background: 'transparent', border: 'none', cursor: 'pointer', 
            fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '4px', borderRadius: '50%'
          }}
          title="Changer le mode d'affichage">
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <AppRoutes
        view={currentUser ? 'dashboard' : view}
        currentUser={currentUser}
        t={translations[lang]}
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onNavigate={setView}
        onLoginSuccess={handleLoginSuccess}
        onLogout={handleLogout}
      />
    </div>
  );
}