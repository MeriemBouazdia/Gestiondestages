import apiClient from './axios';
import { MOCK_USERS, MOCK_OFFERS, MOCK_APPLICATIONS } from '../data/mockDatabase';

// ============================================================================
// [BACKEND TEAM]: استبدل الأكواد داخل كل دالة بطلبات apiClient الحقيقية
// ============================================================================

export const authLogin = async (email, password, role) => {
  // TODO BACKEND: return (await apiClient.post('/auth/login', { email, password, role })).data;
  const user = MOCK_USERS.find(u => u.email === email && u.password === password && u.role === role);
  if (!user) throw new Error('Email, mot de passe ou rôle incorrect.');
  return user;
};

export const authRegisterStudent = async (studentData) => {
  // TODO BACKEND: return (await apiClient.post('/auth/register', studentData)).data;
  const newStudent = { id: Date.now(), role: 'student', active: true, supervisorId: null, ...studentData };
  MOCK_USERS.push(newStudent);
  return newStudent;
};

export const fetchOffers = async () => {
  // TODO BACKEND: return (await apiClient.get('/offers')).data;
  return [...MOCK_OFFERS];
};

export const fetchApplications = async () => {
  // TODO BACKEND: return (await apiClient.get('/applications')).data;
  return [...MOCK_APPLICATIONS];
};