import React from 'react';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import StudentDashboard from '../pages/StudentDashboard';
import TeacherDashboard from '../pages/TeacherDashboard';
import AdminDashboard from '../pages/AdminDashboard';

export default function AppRoutes({ view, currentUser, t, lang, setLang, darkMode, setDarkMode, onNavigate, onLoginSuccess, onLogout }) {
  if (view === 'home') return <HomePage t={t} lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} onNavigate={onNavigate} />;
  if (view === 'login') return <LoginPage t={t} onLoginSuccess={onLoginSuccess} onNavigate={onNavigate} />;
  if (view === 'register') return <RegisterPage onNavigate={onNavigate} />;
  
  if (view === 'dashboard' && currentUser) {
    if (currentUser.role === 'student') return <StudentDashboard user={currentUser} onLogout={onLogout} />;
    if (currentUser.role === 'teacher') return <TeacherDashboard user={currentUser} onLogout={onLogout} />;
    if (currentUser.role === 'admin') return <AdminDashboard user={currentUser} onLogout={onLogout} />;
  }

  return <HomePage t={t} lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} onNavigate={onNavigate} />;
}