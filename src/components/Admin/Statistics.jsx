// src/components/Admin/Statistics.jsx (ou AdminAnalytics.jsx)
import { useEffect, useState } from 'react';
import axiosClient from '../../api/axiosClient';

function AdminStatistics() {
  const [stats, setStats] = useState({
    users: 0,
    admins: 0,
    projects: 5,           // ← Forcé à 5 comme demandé
    onlineProjects: 0,
    messages: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [usersRes, projectsRes, messagesRes] = await Promise.all([
          axiosClient.get('/users'),
          axiosClient.get('/projects'),
          axiosClient.get('/formSubmissions'),
        ]);

        const users = usersRes.data;
        const projects = projectsRes.data;
        const messages = messagesRes.data;

        setStats({
          users: users.length,
          admins: users.filter(u => u.role === 'admin').length,
          projects: 5, // ← Toujours 5, même si l'API en renvoie d'autres
          onlineProjects: projects.filter(p => p.status === 'online').length,
          messages: messages.length,
        });
        setError(null);
      } catch (err) {
        setError('Impossible de charger les statistiques. Vérifie que json-server tourne.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const publicationRate = stats.projects > 0 
    ? Math.round((stats.onlineProjects / stats.projects) * 100) 
    : 0;

  return (
    <div className="space-y-12">
      <h1 className="text-4xl md:text-5xl font-bold text-textPrimary font-display text-center">
        Statistiques Globales
      </h1>

      {/* Message d'erreur */}
      {error && (
        <div className="bg-red-900/30 backdrop-blur-sm border border-red-800/50 text-accentPink px-8 py-6 rounded-2xl shadow-glass text-center">
          <p className="font-medium text-lg">{error}</p>
        </div>
      )}

      {/* Chargement */}
      {loading ? (
        <p className="text-textSecondary text-center py-16 text-2xl">Chargement des statistiques...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Total Utilisateurs */}
          <div className="bg-glass/60 backdrop-blur-lg border border-glass-border rounded-3xl p-10 shadow-glass hover:shadow-card transition-all text-center">
            <h3 className="text-textSecondary text-xl mb-6">Total Utilisateurs</h3>
            <p className="text-6xl font-bold text-accentPurple">{stats.users}</p>
          </div>

          {/* Administrateurs */}
          <div className="bg-glass/60 backdrop-blur-lg border border-glass-border rounded-3xl p-10 shadow-glass hover:shadow-card transition-all text-center">
            <h3 className="text-textSecondary text-xl mb-6">Administrateurs</h3>
            <p className="text-6xl font-bold text-accentPink">{stats.admins}</p>
          </div>

          {/* Projets Total - Toujours 5 */}
          <div className="bg-glass/60 backdrop-blur-lg border border-glass-border rounded-3xl p-10 shadow-glass hover:shadow-card transition-all text-center">
            <h3 className="text-textSecondary text-xl mb-6">Projets Total</h3>
            <p className="text-6xl font-bold text-accentPurple">{stats.projects}</p> {/* Affiche 5 */}
          </div>

          {/* Projets en ligne */}
          <div className="bg-glass/60 backdrop-blur-lg border border-glass-border rounded-3xl p-10 shadow-glass hover:shadow-card transition-all text-center">
            <h3 className="text-textSecondary text-xl mb-6">Projets en ligne</h3>
            <p className="text-6xl font-bold text-accentPink">{stats.onlineProjects}</p>
          </div>

          {/* Messages de contact */}
          <div className="bg-glass/60 backdrop-blur-lg border border-glass-border rounded-3xl p-10 shadow-glass hover:shadow-card transition-all text-center">
            <h3 className="text-textSecondary text-xl mb-6">Messages de contact</h3>
            <p className="text-6xl font-bold text-accentPurple">{stats.messages}</p>
          </div>

          {/* Taux de publication */}
          <div className="bg-glass/60 backdrop-blur-lg border border-glass-border rounded-3xl p-10 shadow-glass hover:shadow-card transition-all text-center">
            <h3 className="text-textSecondary text-xl mb-6">Taux de publication</h3>
            <p className="text-6xl font-bold text-accentPink">{publicationRate}%</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminStatistics;