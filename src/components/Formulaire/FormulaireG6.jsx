import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axiosClient from '../../api/axiosClient';
import { sendEmail } from '../../Services/emailservice';

const FormulaireG6 = () => {
  const [form, setForm] = useState({ nom: '', email: '', message: '' });
  const [status, setStatus] = useState({ sending: false, success: false, error: false });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, success: false, error: false });

    try {
      await axiosClient.post('/formSubmissions', {
        name: form.nom.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        status: 'nouveau',
        date: new Date().toISOString(),
      });

      const emailResult = await sendEmail({ nom: form.nom, email: form.email, message: form.message });

      if (emailResult.success) {
        setStatus({ sending: false, success: true, error: false });
        setForm({ nom: '', email: '', message: '' });
        setTimeout(() => setStatus({ sending: false, success: false, error: false }), 8000);
      } else throw new Error('Email non envoyé');
    } catch (err) {
      console.error(err);
      setStatus({ sending: false, success: false, error: true });
      setTimeout(() => setStatus({ sending: false, success: false, error: false }), 8000);
    }
  };

  return (
    <section id="contact" className="pt-52 pb-32 bg-darkBg relative overflow-hidden">
      {/* Glows pastel doux */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-300/25 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        {/* TITRE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20 lg:mb-28"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-textPrimary mb-6">
            Prenez <span className="text-pink-300">contact</span>
          </h2>
          <p className="text-xl md:text-2xl text-textSecondary max-w-3xl mx-auto">
            Pour un stage PFE, une collaboration ou simplement échanger sur un projet passionnant
          </p>
        </motion.div>

        {/* FORMULAIRE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card max-w-4xl mx-auto p-12 lg:p-20 bg-gray-800/50 backdrop-blur-xl rounded-3xl shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-10">
            <input
              type="text"
              name="nom"
              value={form.nom}
              onChange={handleChange}
              placeholder="Votre nom"
              required
              className="glass-input text-lg bg-gray-700/40 placeholder-gray-200 text-white border border-pink-300/40 focus:border-pink-300 focus:ring-1 focus:ring-pink-300/40 rounded-xl px-4 py-3 w-full transition"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Votre adresse email"
              required
              className="glass-input text-lg bg-gray-700/40 placeholder-gray-200 text-white border border-purple-300/40 focus:border-purple-300 focus:ring-1 focus:ring-purple-300/40 rounded-xl px-4 py-3 w-full transition"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="8"
              placeholder="Votre message..."
              required
              className="glass-input text-lg resize-none bg-gray-700/40 placeholder-gray-200 text-white border border-pink-300/40 focus:border-pink-300 focus:ring-1 focus:ring-pink-300/40 rounded-xl px-4 py-3 w-full transition"
            />

            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={status.sending}
                className="px-20 py-7 text-xl md:text-2xl rounded-full bg-pink-300/50 text-gray-900 font-semibold border border-pink-300/60 shadow-lg hover:bg-pink-300/70 hover:shadow-xl hover:scale-105 transition-all"
              >
                {status.sending ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </div>

            <div className="text-center pt-8">
              {status.success && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl md:text-3xl text-pink-300 font-semibold"
                >
                  Merci ! Votre message a bien été envoyé.
                </motion.p>
              )}
              {status.error && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl md:text-3xl text-purple-300 font-semibold"
                >
                  Une erreur est survenue. Veuillez réessayer.
                </motion.p>
              )}
            </div>
          </form>

          {/* Infos contact */}
          <div className="text-center mt-16 pt-12 border-t border-gray-600/50">
            <p className="text-lg text-textSecondary mb-4">
              Ou contactez-moi directement :
            </p>
            <p className="text-xl text-white font-semibold">
              hanasellami18@gmail.com • +216 28 333 457
            </p>
            <p className="text-textSecondary mt-2">
              Sfax, Tunisie
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FormulaireG6;
