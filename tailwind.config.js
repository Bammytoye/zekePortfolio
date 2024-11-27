/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm:'480px',
      md: '768px',
      lg: '960px',
      xl: '1400px',
    },
    extend: {
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about-bg1.png')",
        services: "url('./assets/services-bg.jpg')",
      },
    },
  },
  plugins: [],
}