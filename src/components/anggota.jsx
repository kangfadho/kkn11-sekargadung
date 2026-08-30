import { useState } from 'react'
import fotoFadho from '../assets/anggota/fadho.jpg'
import fotoUsman from '../assets/anggota/usman.jpeg'
import fotoAfiq1 from '../assets/anggota/afiq1.jpeg'
import fotoDimas from '../assets/anggota/dimas.jpeg'
import fotoAgung from '../assets/anggota/agung.jpeg'
import fotoFathur from '../assets/anggota/fathur.jpeg'
import fotoAlfian from '../assets/anggota/alfian.jpeg'
import fotoLabib from '../assets/anggota/labib.jpeg'


export default function Anggota() {
  const [filter, setFilter] = useState('Semua')

  const timKKN = [
    // BPH
    {
      nama: "Reiki Muhammad Utsman",
      nim: "2441110032",
      prodi: "Hukum Keluarga Islam (HKI)",
      peran: "Koordinator Desa (Kordes)",
      divisi: "-",
      kategori: "BPH",
      avatarSeed: "Usman",
      foto: fotoUsman
    },
    {
      nama: "Muhammad Afiq Saputro",
      nim: "2451110096",
      prodi: "Ekonomi Syariah (ESY)",
      peran: "Wakil Kordes",
      divisi: "-",
      kategori: "BPH",
      avatarSeed: "Afiq",
      foto: fotoAfiq1
    },
    {
      nama: "Reina Safinah An Najah",
      nim: "2441110033",
      prodi: "Hukum Keluarga Islam (HKI)",
      peran: "Sekretaris",
      divisi: "-",
      kategori: "BPH",
      avatarSeed: "Reina"
    },
    {
      nama: "Putri Nihayatus Saadah",
      nim: "2431110212",
      prodi: "Pendidikan Agama Islam (PAI)",
      peran: "Bendahara",
      divisi: "Koor. Konsumsi",
      kategori: "BPH",
      avatarSeed: "PutriN"
    },

    // Bidang Teknologi Tepat Guna
    {
      nama: "Muhammad Muhafadhoh",
      nim: "2412110086",
      prodi: "Teknik Informatika (IF)",
      peran: "Bidang Teknologi Tepat Guna",
      divisi: "-",
      kategori: "Bidang",
      avatarSeed: "Fadho",
      foto: fotoFadho
    },
    {
      nama: "Tsabita Nur Azmi Atiantoro",
      nim: "2412110087",
      prodi: "Teknik Informatika (IF)",
      peran: "Bidang Teknologi Tepat Guna",
      divisi: "-",
      kategori: "Bidang",
      avatarSeed: "Bita"
    },

    // Bidang Pendidikan dan Pelatihan
    {
      nama: "Nadhfaru Sa'adataddaroin",
      nim: "2431110227",
      prodi: "Pendidikan Agama Islam (PAI)",
      peran: "Bidang Pendidikan & Pelatihan",
      divisi: "-",
      kategori: "Bidang",
      avatarSeed: "Nadia"
    },
    {
      nama: "Putri Nagisah Dwi Apriliyah",
      nim: "2431110211",
      prodi: "Pendidikan Agama Islam (PAI)",
      peran: "Bidang Pendidikan & Pelatihan",
      divisi: "-",
      kategori: "Bidang",
      avatarSeed: "Aghis"
    },

    // Bidang Lingkungan dan Kesehatan
    {
      nama: "Fatkhur Rohma",
      nim: "2411110138",
      prodi: "Teknik Industri (TI)",
      peran: "Bidang Lingkungan & Kesehatan",
      divisi: "Koor. Humas",
      kategori: "Bidang",
      avatarSeed: "Fathur",
      foto: fotoFathur
    },
    {
      nama: "Alfian Abdullah Maulana",
      nim: "2311110050",
      prodi: "Teknik Industri (TI)",
      peran: "Bidang Lingkungan & Kesehatan",
      divisi: "Koor. Keamanan",
      kategori: "Bidang",
      avatarSeed: "Alfian",
      foto: fotoAlfian
    },

    // Bidang Sosial dan Kewirausahaan
    {
      nama: "Zidna Ilmiatun Najwa",
      nim: "2451110093",
      prodi: "Ekonomi Syariah (ESY)",
      peran: "Bidang Sosial & Kewirausahaan",
      divisi: "Koor. PDD",
      kategori: "Bidang",
      avatarSeed: "Zidna"
    },
    {
      nama: "Amanda Uswatun Khasanah",
      nim: "2431110229",
      prodi: "Pendidikan Agama Islam (PAI)",
      peran: "Bidang Sosial & Kewirausahaan",
      divisi: "-",
      kategori: "Bidang",
      avatarSeed: "Manda"
    },

    // Bidang Keagamaan
    {
      nama: "Noviatus Syifa Maharani",
      nim: "2441110031",
      prodi: "Hukum Keluarga Islam (HKI)",
      peran: "Bidang Keagamaan",
      divisi: "-",
      kategori: "Bidang",
      avatarSeed: "Syifa"
    },
    {
      nama: "A Labib Patriyatin Najib",
      nim: "2412110088",
      prodi: "Teknik Informatika (IF)",
      peran: "Bidang Keagamaan",
      divisi: "-",
      kategori: "Bidang",
      avatarSeed: "Labib",
      foto: fotoLabib
    },

    // Bidang Organisasi dan Kepemudaan
    {
      nama: "Ahmad Hamdi Maslah",
      nim: "2411110136",
      prodi: "Teknik Industri (TI)",
      peran: "Bidang Organisasi & Kepemudaan",
      divisi: "Koor. Perkab",
      kategori: "Bidang",
      avatarSeed: "Dimas",
      foto: fotoDimas
    },
    {
      nama: "Muhammad Agung Khoirul Yani",
      nim: "2411110133",
      prodi: "Teknik Industri (TI)",
      peran: "Bidang Organisasi & Kepemudaan",
      divisi: "-",
      kategori: "Bidang",
      avatarSeed: "Agung",
      foto: fotoAgung
    }
  ]

  const filteredTim = filter === 'Semua' 
    ? timKKN 
    : timKKN.filter(item => item.kategori === filter)

  return (
    <section id="anggota" className="py-20 bg-white border-t border-stone-200/70 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold px-3 py-1 bg-[#8B5E3C]/10 text-[#8B5E3C] rounded-full border border-[#8B5E3C]/20">
            Tim Pengabdi
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 mt-3 mb-4 tracking-tight">
            Anggota KKN 11 Sekargadung
          </h2>
          <p className="text-stone-600 leading-relaxed text-sm">
            Kolaborasi mahasiswa lintas program studi Universitas Qomaruddin dalam mengabdi untuk kemajuan Desa Sekargadung.
          </p>

          {/* Filter Tab */}
          <div className="flex justify-center gap-2 mt-8">
            {['Semua', 'BPH', 'Bidang'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-[#4A6B3C] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat === 'Semua' ? 'Semua Anggota (16)' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTim.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-[#FAF8F5] border border-stone-200/80 rounded-2xl hover:border-[#8B5E3C]/40 hover:shadow-md transition-all flex flex-col items-center text-center"
            >
              <img
  src={item.foto ? item.foto : `https://api.dicebear.com/7.x/avataaars/svg?seed=${item.avatarSeed}`}
  alt={item.nama}
  className="w-20 h-20 rounded-full bg-stone-200 border-2 border-[#8B5E3C]/30 mb-4 p-1 object-cover"
/>
              
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#4A6B3C]/10 text-[#4A6B3C] border border-[#4A6B3C]/20 mb-2">
                {item.peran}
              </span>

              <h3 className="text-base font-bold text-stone-900 mb-1 leading-snug">
                {item.nama}
              </h3>
              
              <p className="text-xs font-medium text-stone-500 mb-1">
                NIM: {item.nim}
              </p>
              
              <p className="text-xs text-[#8B5E3C] font-semibold mb-3">
                {item.prodi}
              </p>

              {item.divisi !== "-" && (
                <span className="mt-auto text-[11px] font-medium text-stone-600 bg-white px-2.5 py-1 rounded-lg border border-stone-200">
                  📌 {item.divisi}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}