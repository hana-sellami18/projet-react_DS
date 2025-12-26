// src/components/Admin/Settings.jsx (ou Parametres.jsx)
import { useState } from 'react';

function AdminSettings() {
  const [form, setForm] = useState({
    name: 'Hana Sellami',
    email: 'hanasellami18@gmail.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [message, setMessage] = useState({ text: '', type: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage({ text: '', type: '' });

    if (form.newPassword && form.newPassword !== form.confirmPassword) {
      setMessage({ text: 'Les nouveaux mots de passe ne correspondent pas.', type: 'error' });
      return;
    }

    if (form.newPassword && !form.currentPassword) {
      setMessage({ text: 'Mot de passe actuel requis pour changer le mot de passe.', type: 'error' });
      return;
    }

    // Simulation de sauvegarde
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setMessage({ text: 'Paramètres mis à jour avec succès !', type: 'success' });
      setForm({ ...form, currentPassword: '', newPassword: '', confirmPassword: '' });
    }, 1000);
  };

  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-textPrimary font-display text-center">
        Paramètres Administrateur
      </h1>

      {/* Message success / error */}
      {message.text && (
        <div className={`p-6 rounded-2xl text-center font-medium text-lg shadow-glass ${
          message.type === 'success'
            ? 'bg-green-900/30 border border-green-700/50 text-green-300'
            : 'bg-red-900/30 border border-red-800/50 text-accentPink'
        }`}>
          {message.text}
        </div>
      )}

      {/* Profil administrateur */}
      <div className="bg-glass/60 backdrop-blur-lg border border-glass-border rounded-3xl p-10 shadow-glass">
        <h2 className="text-2xl font-bold text-textPrimary mb-8">
          Mon profil administrateur
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-textSecondary font-medium mb-3">
                Nom
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-glass/40 backdrop-blur-md border border-glass-border rounded-2xl text-textPrimary placeholder-textSecondary/60 focus:outline-none focus:border-accentPink/70 focus:shadow-glass transition-all"
              />
            </div>

            <div>
              <label className="block text-textSecondary font-medium mb-3">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-glass/40 backdrop-blur-md border border-glass-border rounded-2xl text-textPrimary placeholder-textSecondary/60 focus:outline-none focus:border-accentPink/70 focus:shadow-glass transition-all"
              />
            </div>
          </div>

          <div className="border-t border-glass-border pt-10">
            <h3 className="text-xl font-bold text-textPrimary mb-8">
              Changer le mot de passe
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <label className="block text-textSecondary font-medium mb-3">
                  Mot de passe actuel
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={form.currentPassword}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-glass/40 backdrop-blur-md border border-glass-border rounded-2xl text-textPrimary placeholder-textSecondary/60 focus:outline-none focus:border-accentPink/70 transition-all"
                />
              </div>

              <div>
                <label className="block text-textSecondary font-medium mb-3">
                  Nouveau mot de passe
                </label>
                <input
                  type="password"
                  name="newPassword"
                  value={form.newPassword}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-glass/40 backdrop-blur-md border border-glass-border rounded-2xl text-textPrimary placeholder-textSecondary/60 focus:outline-none focus:border-accentPink/70 transition-all"
                />
              </div>

              <div>
                <label className="block text-textSecondary font-medium mb-3">
                  Confirmer nouveau mot de passe
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-glass/40 backdrop-blur-md border border-glass-border rounded-2xl text-textPrimary placeholder-textSecondary/60 focus:outline-none focus:border-accentPink/70 transition-all"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-10">
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-4 bg-accentPink/50 backdrop-blur-md text-textPrimary font-bold rounded-full border border-accentPink/70 shadow-glass hover:bg-accentPink/70 hover:shadow-card hover:scale-105 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Sauvegarde en cours...' : 'Sauvegarder les modifications'}
            </button>
          </div>
        </form>
      </div>

      {/* Paramètres du site */}
      <div className="bg-glass/50 backdrop-blur-lg border border-glass-border rounded-3xl p-10 shadow-glass">
        <h2 className="text-2xl font-bold text-textPrimary mb-8">
          Paramètres du site
        </h2>

        <div className="space-y-8">
          <div>
            <label className="block text-textSecondary font-medium mb-3">
              Titre du portfolio
            </label>
            <input
              type="text"
              value="Hana Sellami - Portfolio"
              disabled
              className="w-full px-6 py-4 bg-glass/30 border border-glass-border rounded-2xl text-textSecondary/70"
            />
          </div>

          <div>
            <label className="block text-textSecondary font-medium mb-3">
              Email de réception des contacts
            </label>
            <input
              type="email"
              value="hanasellami18@gmail.com"
              disabled
              className="w-full px-6 py-4 bg-glass/30 border border-glass-border rounded-2xl text-textSecondary/70"
            />
            <p className="text-textSecondary/70 text-sm mt-3">
              Les messages sont envoyés via EmailJS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;