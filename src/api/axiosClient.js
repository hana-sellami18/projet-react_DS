// src/api/axiosClient.js
import axios from 'axios';

// Crée un client Axios avec une base URL vide (mock)
// Pour que le frontend ne plante pas sur Vercel
const axiosClient = axios.create({
  baseURL: '', // Pas de backend réel
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour simuler toujours une réponse réussie
axiosClient.interceptors.request.use(async (config) => {
  // Si on envoie vers "/formSubmissions" par exemple
  if (config.url.includes('/formSubmissions')) {
    // Simuler un délai pour ressembler à un vrai call
    await new Promise((res) => setTimeout(res, 500));

    // Simuler une réponse réussie
    return Promise.reject({ isMock: true, data: { success: true } });
  }
  return config;
});

// Intercepteur de réponse
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.isMock) {
      return Promise.resolve(error.data);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
