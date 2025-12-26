import React from 'react';

const Footer = () => (
  <footer className="mt-24 py-12 bg-darkBg/60 backdrop-blur-md border-t border-glass-border">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <div className="mb-6">
        <span className="font-display font-bold text-2xl text-textPrimary">
          Hana SELLAMI
        </span>{' '}
        <span className="text-textSecondary text-lg">— Étudiante en Génie Logiciel</span>
      </div>
      <div className="text-sm text-textSecondary/80">
        © {new Date().getFullYear()} Hana Sellami. Tous droits réservés.
      </div>
      
    </div>
  </footer>
);

export default Footer;