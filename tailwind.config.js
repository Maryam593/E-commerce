/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fascinate': ['Fascinate Inline', 'system-ui'],
      },
    },
  },
  plugins: [],
}