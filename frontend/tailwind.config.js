/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/antd/dist/reset.css"
  ],
  theme: {
    extend: {
      colors: {
        'spluxy-primary': '#FF9900',
        'spluxy-secondary': '#000000',
        'spluxy-dark-orange': '#E65C00',
      },
      fontFamily: {
        'heading': ['Helvetica Neue', 'Arial', 'sans-serif'],
        'body': ['Poppins', 'system-ui', 'sans-serif'],
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'spluxy-gradient': 'linear-gradient(to right, #FF9900, #E65C00)',
        'spluxy-gradient-vertical': 'linear-gradient(to bottom, #FF9900, #E65C00)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind's preflight to avoid conflicts with Ant Design
  },
}
