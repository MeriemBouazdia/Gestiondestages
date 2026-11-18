import axios from './axios';

// خدمة تسجيل الدخول
export const loginUser = async (credentials) => {
  // POST /api/auth/login
  const response = await axios.post('/auth/login', credentials);
  return response.data;
};

// خدمة تسجيل طالب جديد
export const registerStudent = async (userData) => {
  // POST /api/auth/register
  const response = await axios.post('/auth/register', userData);
  return response.data;
};