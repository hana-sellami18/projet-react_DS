// src/components/Auth/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithJson } from "../../api/authApi";

function Login() {
  const [email, setEmail] = useState("admin@21c-digital.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const from = "/admin";

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { token, user } = await loginWithJson(email, password);

      localStorage.setItem("authToken", token);
      localStorage.setItem("authUser", JSON.stringify(user));

      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || "Identifiants incorrects");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-darkBg relative overflow-hidden px-4">
      {/* Fond dégradé subtil violet-rose très doux (comme dans ton image) */}
      <div className="absolute inset-0 bg-gradient-to-br from-accentPurple/20 via-accentPink/15 to-darkBg pointer-events-none" />

      {/* Effet de particules ou glow ambiant (optionnel mais beau) */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accentPink/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accentPurple/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Carte principale glassmorphism */}
        <div className="glass-card">
          <h1 className="text-4xl font-bold text-textPrimary text-center mb-4 font-display tracking-tight">
            Connexion Admin
          </h1>
          <p className="text-textSecondary text-center mb-10 text-lg">
            Accédez à votre espace d’administration
          </p>

          {/* Message d'erreur */}
          {error && (
            <div className="bg-red-900/30 backdrop-blur-md border border-red-800/50 text-accentPink px-6 py-4 rounded-2xl text-center mb-8 shadow-glass">
              {error}
            </div>
          )}

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label className="block text-textSecondary text-sm mb-2.5 font-medium">
                Adresse e-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@21c-digital.com"
                className="glass-input"
                required
              />
            </div>

            <div>
              <label className="block text-textSecondary text-sm mb-2.5 font-medium">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="glass-input"
                required
              />
            </div>

            {/* Bouton principal */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary"
            >
              {loading ? "Connexion en cours..." : "Se connecter"}
            </button>
          </form>

          {/* Infos de connexion test (en bas) */}
          <div className="mt-10 pt-8 border-t border-glass-border/50 text-center">
            <p className="text-textSecondary text-sm mb-2">
              Compte de test :
            </p>
            <p className="text-textPrimary font-medium">
              admin@21c-digital.com
            </p>
            <p className="text-textPrimary font-medium mt-1">
              Mot de passe : admin123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;