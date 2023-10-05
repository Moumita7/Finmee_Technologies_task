/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      'hero-pattern': "url('https://ntwist.com/wp-content/uploads/2023/01/home-image-bg-v6.png')",
    },
  },
  plugins: [],
}

