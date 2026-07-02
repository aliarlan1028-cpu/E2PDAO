/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#07100d',
        charcoal: '#101816',
        paper: '#f5f6f1',
        mist: '#e8eee7',
        mint: '#64d99f',
        mintSoft: '#8af0bf',
        forest: '#1f6a4b',
        signal: '#ff6b57',
        cobalt: '#315efb',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        lift: '0 28px 80px rgba(7, 16, 13, 0.16)',
      },
    },
  },
  plugins: [],
}
