// src/components/Auth/Logout.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // 🔹 Supprime tout ce qui concerne l'authentification
    localStorage.clear();
    sessionStorage.clear();

    // 🔹 Redirection vers la page login
    navigate('/login', { replace: true });
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <p className="text-xl text-gray-700">
        Déconnexion en cours... Vous allez être redirigé.
      </p>
    </div>
  );
}

export default Logout;
