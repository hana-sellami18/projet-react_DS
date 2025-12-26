import React from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import { FaHome, FaUsers, FaCog, FaChartBar, FaSignOutAlt } from 'react-icons/fa';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // supprime toutes les infos d'auth
    navigate('/login', { replace: true });
  };

  return (
    <div className="flex min-h-screen bg-darkBg text-textPrimary">
      {/* Sidebar */}
      <aside className="w-64 lg:w-72 bg-glass/60 backdrop-blur-xl border-r border-glass-border p-8 flex flex-col">
        <h2 className="text-3xl font-display font-bold text-textPrimary mb-10">
          Admin Panel
        </h2>

        <nav className="space-y-3 flex-1">
          <Link
            to="/admin"
            className="flex items-center gap-4 px-4 py-3 rounded-2xl text-textSecondary hover:bg-glass/40 hover:text-textPrimary transition-all"
          >
            <FaHome size={20} />
            Dashboard
          </Link>

          <Link
            to="/admin/users"
            className="flex items-center gap-4 px-4 py-3 rounded-2xl text-textSecondary hover:bg-glass/40 hover:text-textPrimary transition-all"
          >
            <FaUsers size={20} />
            Utilisateurs
          </Link>

          <Link
            to="/admin/analytics"
            className="flex items-center gap-4 px-4 py-3 rounded-2xl text-textSecondary hover:bg-glass/40 hover:text-textPrimary transition-all"
          >
            <FaChartBar size={20} />
            Statistiques
          </Link>

          <Link
            to="/admin/settings"
            className="flex items-center gap-4 px-4 py-3 rounded-2xl text-textSecondary hover:bg-glass/40 hover:text-textPrimary transition-all"
          >
            <FaCog size={20} />
            Paramètres
          </Link>

          <Link
            to="/admin/forms"
            className="flex items-center gap-4 px-4 py-3 rounded-2xl text-textSecondary hover:bg-glass/40 hover:text-textPrimary transition-all"
          >
            <FaChartBar size={20} />
            Soumissions Formulaires
          </Link>

          <div className="mt-auto pt-8 space-y-4">
            <Link
              to="/"
              className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-accentPink/40 border border-accentPink/60 text-textPrimary hover:bg-accentPink/60 transition-all"
            >
              <FaSignOutAlt size={20} />
              Retour au site
            </Link>

            {/* Bouton logout fonctionnel */}
            <button
              onClick={handleLogout}
              className="flex items-center justify-center w-full px-4 py-3 rounded-2xl bg-accentPurple/40 border border-accentPurple/60 text-textPrimary hover:bg-accentPurple/60 transition-all"
            >
              <FaSignOutAlt size={20} />
              Se déconnecter
            </button>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
