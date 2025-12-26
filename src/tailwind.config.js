// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        darkBg: {
          DEFAULT: '#11121C',     // Nouveau fond principal : sombre élégant avec teinte violet-bleuté très douce (plus moderne que noir pur)
          lighter: '#1A1B2A',     // Pour variations légères (ex: hover ou sections alternées)
        },
        glass: {
          DEFAULT: 'rgba(30, 30, 50, 0.35)', // Glass frosté inchangé
          border: 'rgba(255, 255, 255, 0.08)',
        },
        accentPink: {
          DEFAULT: '#FFB6D9',     // Rose pastel lumineux
          light: '#FFD6E8',
          glow: 'rgba(255, 182, 217, 0.3)',
          hover: 'rgba(255, 182, 217, 0.6)',
        },
        accentPurple: {
          DEFAULT: '#D8B4FF',     // Violet dreamy
          dark: '#B594E0',
        },
        textPrimary: '#FFFFFF',
        textSecondary: '#D0D8F0',
        highlight: '#FFB6D9',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        md: '16px',
        lg: '20px',
      },
      boxShadow: {
        'glass': '0 16px 48px rgba(0, 0, 0, 0.5)',
        'card': '0 16px 48px rgba(0, 0, 0, 0.45), inset 0 0 30px rgba(255, 182, 217, 0.1)',
        'hover': '0 24px 64px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(255, 182, 217, 0.2)',
        'avatar': '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 182, 217, 0.3)',
      },
      borderRadius: {
        '2xl': '32px',
        '3xl': '40px',
        'full-rounded': '9999px',
      },
    },
  },
  plugins: [],
}