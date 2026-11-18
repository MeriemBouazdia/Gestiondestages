import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api', // [BACKEND]: غيّر الرابط عند الرفع
  headers: { 'Content-Type': 'application/json' }
});

export default apiClient;