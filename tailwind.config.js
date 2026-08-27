/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet Warna Logo KKn Sekargadung
        kkn:{
          cream:'#faf85f', // Background Utama KKn Sekargadung
          brown:'#8b5e3c', // Aksen Coklat Tanah
          green:'#4a6b3c', // Aksen Hijau Daun / lumut
          dark:'#2a2421', // Teks Gelap
        }
      }
    },
  },
  plugins: [],
}