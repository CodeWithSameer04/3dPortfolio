/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#121212',
          surface: '#181818',
          card: '#1E1E1E',
          cardHover: '#242424',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-highlight': 'rgba(255, 255, 255, 0.16)',
        },
        accent: {
          blue: '#00E5FF',       // Neon Sky Blue
          cyan: '#00E5FF',       // Neon Sky Blue alias
          mint: '#00F5A0',       // Fresh Mint Green
          green: '#00F5A0',      // Mint Green alias
          yellow: '#FACC15',     // Cyber Yellow accent
          violet: '#38BDF8',     // Electric Sky Blue
          glow: 'rgba(0, 229, 255, 0.18)',
          glowMint: 'rgba(0, 245, 160, 0.2)',
        },
        muted: '#94A3B8',
        slate: {
          light: '#E2E8F0',
          base: '#94A3B8',
          dark: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #00E5FF 0%, #00F5A0 100%)',
        'neon-blue-gradient': 'linear-gradient(135deg, #00E5FF 0%, #38BDF8 100%)',
        'neon-mint-gradient': 'linear-gradient(135deg, #00F5A0 0%, #10B981 100%)',
        'subtle-radial': 'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.08) 0%, rgba(18, 18, 18, 0) 70%)',
      }
    },
  },
  plugins: [],
}
