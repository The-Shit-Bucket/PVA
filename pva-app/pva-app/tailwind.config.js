// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Points to the main HTML file in your project root
    "./src/renderer/src/**/*.{js,ts,jsx,tsx}", // Points to your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [
     //tailwindcss,
  ],
}