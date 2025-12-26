// src/components/Admin/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getProjects } from '../../api/projectsApi';
import { getFormSubmissions } from '../../api/formSubmissionsApi';

function AdminDashboard() {
  const [stats, setStats] = useState({
    projects: 5,           // Total projets forcé à 5 comme demandé
    onlineProjects: 0,
    messages: 0,
  });

  useEffect(() => {
    async function loadData() {
      try {
        const projects = await getProjects();
        const submissions = await getFormSubmissions?.() || [];

        setStats({
          projects: 5, // Toujours 5
          onlineProjects: projects.filter(p => p.status === 'online').length,
          messages: submissions.length,
        });
      } catch (error) {
        console.error('Erreur chargement dashboard', error);
      }
    }
    loadData();
  }, []);

  return (
    <div className="min-h-screen py-16 px-6 lg:px-8 relative">
      {/* Glows ambiants pastel pour ambiance premium */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-accentPink/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accentPurple/15 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* === TITRE DASHBOARD === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-textPrimary mb-4">
            Dashboard <span className="text-accentPink">Admin</span>
          </h1>
          <p className="text-xl text-textSecondary">
            Gestion de ton portfolio et des messages reçus
          </p>
        </motion.div>

        {/* === CARTES STATS === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-10 hover:translate-y-[-10px] transition-all duration-500 text-center"
          >
            <h3 className="text-2xl text-textSecondary mb-4">Total Projets</h3>
            <p className="text-6xl font-bold text-accentPink">{stats.projects}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-10 hover:translate-y-[-10px] transition-all duration-500 text-center"
          >
            <h3 className="text-2xl text-textSecondary mb-4">Projets en ligne</h3>
            <p className="text-6xl font-bold text-accentPurple">{stats.onlineProjects}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-10 hover:translate-y-[-10px] transition-all duration-500 text-center"
          >
            <h3 className="text-2xl text-textSecondary mb-4">Messages reçus</h3>
            <p className="text-6xl font-bold text-accentPink">{stats.messages}</p>
          </motion.div>
        </div>

        {/* === MESSAGE D'ACCUEIL EN BAS === */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            Bienvenue dans ton espace d’administration. Tu peux gérer tes projets, leur visibilité et consulter les messages reçus via le formulaire de contact.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AdminDashboard;