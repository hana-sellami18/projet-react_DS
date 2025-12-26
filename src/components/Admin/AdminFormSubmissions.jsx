// src/components/Admin/AdminFormSubmissions.jsx
import { useEffect, useState } from 'react';
import {
  getFormSubmissions,
  updateFormSubmission,
  deleteFormSubmission,
} from '../../api/formSubmissionsApi';

function AdminFormSubmissions() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await getFormSubmissions();
        // Trier par date descendante
        setSubmissions(
          data.sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function handleChangeStatus(id, newStatus) {
    const current = submissions.find((s) => s.id === id);
    if (!current) return;

    try {
      const updated = await updateFormSubmission(id, {
        ...current,
        status: newStatus,
      });
      setSubmissions((prev) =>
        prev.map((s) => (s.id === id ? updated : s))
      );
    } catch (err) {
      console.error(err);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Supprimer cette demande ?')) return;

    try {
      await deleteFormSubmission(id);
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
    } catch (err) {
      console.error(err);
    }
  }

  if (loading) return (
    <p className="text-textSecondary text-center py-16 text-2xl">
      Chargement des demandes...
    </p>
  );

  if (error) return (
    <div className="bg-red-900/30 backdrop-blur-md border border-red-800/50 text-accentPink px-8 py-6 rounded-3xl shadow-glass text-center text-lg font-medium">
      {error}
    </div>
  );

  return (
    <div className="space-y-10 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-textPrimary font-display text-center">
        Demandes de Contact
      </h1>

      <div className="bg-glass/60 backdrop-blur-lg border border-glass-border rounded-3xl shadow-glass overflow-x-auto">
        <table className="min-w-full divide-y divide-glass-border">
          <thead className="bg-glass/40">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-medium text-textSecondary uppercase tracking-wider">
                Nom
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-textSecondary uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-textSecondary uppercase tracking-wider">
                Message
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium text-textSecondary uppercase tracking-wider">
                Statut
              </th>
              <th className="px-6 py-4 text-right text-sm font-medium text-textSecondary uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-glass-border">
            {submissions.map((s) => (
              <tr key={s.id} className="hover:bg-glass/30 transition-colors">
                <td className="px-6 py-4 text-textPrimary font-medium">{s.fullName}</td>
                <td className="px-6 py-4 text-textSecondary">{s.email}</td>
                <td className="px-6 py-4 text-textSecondary max-w-md truncate">{s.message}</td>
                <td className="px-6 py-4">
                  <select
                    value={s.status}
                    onChange={(e) => handleChangeStatus(s.id, e.target.value)}
                    className="w-full min-w-[120px] max-w-[180px] bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl px-4 py-2 text-textPrimary focus:outline-none focus:border-accentPink/70 transition-all"
                  >
                    <option value="new">Nouveau</option>
                    <option value="in-progress">En cours</option>
                    <option value="done">Traité</option>
                  </select>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => handleDelete(s.id)}
                    className="text-accentPink hover:text-accentPurple font-medium transition-colors text-base"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}

            {submissions.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-16 text-center text-textSecondary text-xl"
                >
                  Aucune demande pour le moment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminFormSubmissions;
