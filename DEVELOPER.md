# 📦 Technical Build Log — Web Development Journey

Dokumen ini berisi catatan alur pembuatan dan pengembangan struktur web aplikasi dari awal inisialisasi *project* sampai berhasil di-deploy ke GitHub Pages.

---

## 🛠️ Langkah 1: Inisialisasi Proyek & Setup Environment

Pengembangan diawali dengan penyiapan *environment* berbasis React dan Tailwind CSS:

1. **Membuat Proyek React (Vite):**
   ```bash
   npm create vite@latest kkn11-sekargadung -- --template react
   cd kkn11-sekargadung

   npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install lucide-react


2. **Instalasi Dependensi Utama**
    Tailwind CSS & Autoprefixer: Untuk styling komponen secara utility-first.
    Lucide React: Untuk penyediaan ikon UI.
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p
        npm install lucide-react
 
3. **Konfigurasi Stylesheet**
    Mengonfigurasi tailwind.config.js dan mengimpor directive Tailwind ke dalam file src/index.css.


# 📁 Langkah 2: Penyusunan Struktur Berkas & Komponen
Website dirancang menggunakan konsep Modular Component (Single Page Application) agar kodingan rapi dan mudah dirawat.

## kkn11-sekargadung/
├── public/
│   └── anggota/           # Folder khusus penyimpan aset foto anggota
├── src/
│   ├── components/        # Berkas komponen UI independen:
│   │   ├── Navbar.jsx     # Navigasi utama + logika mobile menu
│   │   ├── Hero.jsx       # Header & banner landing page
│   │   ├── ProfilDesa.jsx # Seksi informasi profil
│   │   ├── ProgramKerja.jsx # Seksi daftar program kerja
│   │   ├── Galeri.jsx     # Seksi foto kegiatan & modal pop-up
│   │   ├── Lokasi.jsx     # Seksi embed Google Maps & penunjuk arah
│   │   ├── Anggota.jsx    # Seksi profil tim & fallback UI avatar
│   │   └── Footer.jsx     # Seksi footer & hak cipta
│   ├── App.jsx            # Berkas utama penggabung seluruh komponen
│   ├── index.css          # Entry styling & Tailwind imports
│   └── main.jsx           # Entry point utama aplikasi React
├── index.html             # Berkas HTML utama
├── vite.config.js         # Konfigurasi base path build
└── README.md              # Dokumentasi proyek



