// src/components/Admin/UsersAdminPage.jsx
import { useEffect, useState } from 'react';
import axiosClient from '../../api/axiosClient';

function UsersAdminPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosClient.get('/users');
        setUsers(response.data);
        setError(null);
      } catch (err) {
        setError('Impossible de charger les utilisateurs. Vérifie que "npm run api" tourne et que db.json contient "users".');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(search.toLowerCase()) ||
    user.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold text-textPrimary font-display">
        Gestion des Utilisateurs
      </h1>

      {/* Barre de recherche */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher par nom ou email..."
        className="w-full max-w-md px-6 py-4 bg-glass/40 backdrop-blur-md border border-glass-border rounded-2xl text-textPrimary placeholder-textSecondary/60 focus:outline-none focus:border-accentPink/70 focus:shadow-glass transition-all"
      />

      {/* Message d'erreur */}
      {error && (
        <div className="bg-red-900/30 backdrop-blur-sm border border-red-800/50 text-accentPink px-8 py-5 rounded-2xl shadow-glass">
          <p className="font-medium">{error}</p>
        </div>
      )}

      {/* Chargement */}
      {loading ? (
        <p className="text-textSecondary text-center py-12 text-xl">Chargement des utilisateurs...</p>
      ) : filteredUsers.length === 0 ? (
        <div className="bg-glass/40 backdrop-blur-md border border-glass-border rounded-3xl p-16 text-center shadow-glass">
          <p className="text-textSecondary text-xl">Aucun utilisateur trouvé.</p>
          <p className="text-textSecondary/70 text-sm mt-4">
            Ajoute des utilisateurs dans db.json ou vérifie la connexion API.
          </p>
        </div>
      ) : (
        /* Tableau */
        <div className="bg-glass/50 backdrop-blur-lg border border-glass-border rounded-3xl shadow-glass overflow-hidden">
          <table className="min-w-full divide-y divide-glass-border">
            <thead className="bg-glass/30">
              <tr>
                <th className="px-8 py-5 text-left text-sm font-medium text-textSecondary uppercase tracking-wider">
                  Nom
                </th>
                <th className="px-8 py-5 text-left text-sm font-medium text-textSecondary uppercase tracking-wider">
                  Email
                </th>
                <th className="px-8 py-5 text-left text-sm font-medium text-textSecondary uppercase tracking-wider">
                  Rôle
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-glass-border">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-glass/20 transition-colors">
                  <td className="px-8 py-5 text-textPrimary font-medium">
                    {user.name || 'Non défini'}
                  </td>
                  <td className="px-8 py-5 text-textSecondary">
                    {user.email}
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-4 py-2 inline-flex text-xs font-semibold rounded-full ${
                      user.role === 'admin'
                        ? 'bg-accentPurple/40 text-accentPurple border border-accentPurple/60'
                        : 'bg-accentPink/40 text-accentPink border border-accentPink/60'
                    }`}>
                      {user.role === 'admin' ? 'Administrateur' : 'Utilisateur'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UsersAdminPage;