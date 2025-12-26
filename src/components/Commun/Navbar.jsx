import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Vérifier l'authentification à chaque changement de route ou token
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(Boolean(token));
  }, [location.pathname]);

  const navigation = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Expérience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLogout = () => {
    // Supprimer tous les tokens et infos d’auth
    localStorage.clear();
    setIsAuthenticated(false);
    navigate('/login', { replace: true });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-glass/40 backdrop-blur-lg border-b border-glass-border shadow-glass" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-accentPink/70 to-accentPurple/70 rounded-lg flex items-center justify-center text-textPrimary font-bold text-lg shadow-glass border border-accentPink/40">
              HS
            </div>
            <span className="hidden sm:inline text-textPrimary font-semibold text-lg">
              Hana Sellami
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition ${
                  location.pathname === item.path
                    ? 'text-accentPink border-b-2 border-accentPink pb-1'
                    : 'text-textSecondary hover:text-textPrimary'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {!isAuthenticated ? (
              <Link
                to="/login"
                className="rounded-full bg-accentPink/50 backdrop-blur-md px-4 py-2 text-sm font-medium text-textPrimary border border-accentPink/60 hover:bg-accentPink/70 transition shadow-glass"
              >
                Se connecter
              </Link>
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  to="/admin"
                  className="text-sm font-medium text-textSecondary hover:text-textPrimary transition"
                >
                  Tableau de bord
                </Link>
                <button
                  onClick={handleLogout}
                  className="rounded-full border border-glass-border px-4 py-2 text-sm font-medium text-textSecondary hover:bg-glass/30 transition"
                >
                  Se déconnecter
                </button>
              </div>
            )}
          </div>

          {/* Mobile */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-textSecondary hover:bg-glass/30 hover:text-textPrimary transition"
          >
            {isMobileOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-glass/60 backdrop-blur-xl border-t border-glass-border shadow-2xl">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium transition ${
                  location.pathname === item.path
                    ? 'bg-accentPink/30 text-textPrimary'
                    : 'text-textSecondary hover:bg-glass/30 hover:text-textPrimary'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="border-t border-glass-border px-4 py-3 space-y-2">
            {!isAuthenticated ? (
              <Link
                to="/login"
                onClick={() => setIsMobileOpen(false)}
                className="block w-full text-center rounded-full bg-accentPink/50 backdrop-blur-md px-4 py-2 text-sm font-medium text-textPrimary border border-accentPink/60 hover:bg-accentPink/70 transition shadow-glass"
              >
                Se connecter
              </Link>
            ) : (
              <>
                <Link
                  to="/admin"
                  onClick={() => setIsMobileOpen(false)}
                  className="block w-full text-center rounded-full bg-glass/40 px-4 py-2 text-sm font-medium text-textPrimary hover:bg-glass/60 transition"
                >
                  Tableau de bord
                </Link>
                <button
                  onClick={() => {
                    setIsMobileOpen(false);
                    handleLogout();
                  }}
                  className="block w-full rounded-full border border-glass-border px-4 py-2 text-sm font-medium text-textSecondary hover:bg-glass/30 transition"
                >
                  Se déconnecter
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
