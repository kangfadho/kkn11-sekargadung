import { useState } from 'react'

export default function Galeri() {
  const [filter, setFilter] = useState('Semua')
  const [selectedImg, setSelectedImg] = useState(null)

  // Contoh data dokumentasi (bisa diganti dengan foto lokal dari src/assets)
  const dokumentasi = [
    {
      id: 1,
      judul: "Pembukaan & Penerimaan KKN 11",
      kategori: "Acara Utama",
      tanggal: "01 Agustus 2026",
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      judul: "Sosialisasi Digitalisasi UMKM Desa",
      kategori: "Proker",
      tanggal: "05 Agustus 2026",
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      judul: "Kerja Bakti Lingkungan Bersama Warga",
      kategori: "Sosial",
      tanggal: "10 Agustus 2026",
      src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      judul: "Edukasi & Mengajar di Sekolah Dasar",
      kategori: "Proker",
      tanggal: "12 Agustus 2026",
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      judul: "Kunjungan ke Sentra Kerajinan Desa",
      kategori: "Kunjungan",
      tanggal: "15 Agustus 2026",
      src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      judul: "Pembersihan Area Fasilitas Umum",
      kategori: "Sosial",
      tanggal: "18 Agustus 2026",
      src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
    }
  ]

  const kategoriList = ['Semua', 'Acara Utama', 'Proker', 'Sosial', 'Kunjungan']

  const filteredData = filter === 'Semua' 
    ? dokumentasi 
    : dokumentasi.filter(item => item.kategori === filter)

  return (
    <section id="galeri" className="py-20 bg-[#FAF8F5] border-t border-stone-200/70 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold px-3 py-1 bg-[#4A6B3C]/10 text-[#4A6B3C] rounded-full border border-[#4A6B3C]/20">
            Dokumentasi Kegiatan
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 mt-3 mb-3 tracking-tight">
            Galeri Pengabdian
          </h2>
          <p className="text-stone-600 text-sm">
            Momen-momen berharga dalam setiap rekam jejak kegiatan KKN 11 Universitas Qomaruddin di Desa Sekargadung.
          </p>

          {/* Filter Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {kategoriList.map((kat) => (
              <button
                key={kat}
                onClick={() => setFilter(kat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === kat
                    ? 'bg-[#8B5E3C] text-white shadow-xs'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {kat}
              </button>
            ))}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImg(item)}
              className="group relative h-64 bg-stone-200 rounded-2xl overflow-hidden cursor-pointer shadow-xs hover:shadow-lg transition-all"
            >
              <img
                src={item.src}
                alt={item.judul}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-5">
                <span className="text-[10px] font-bold text-[#D4B08C] uppercase tracking-widest mb-1">
                  {item.kategori} • {item.tanggal}
                </span>
                <h3 className="text-white font-bold text-base leading-snug">
                  {item.judul}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal (Gambar Diperbesar saat Diklik) */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div 
            className="relative bg-white max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white font-bold hover:bg-black/80 flex items-center justify-center z-10 transition-all"
            >
              ✕
            </button>
            <div className="max-h-[70vh] bg-stone-900 flex items-center justify-center">
              <img
                src={selectedImg.src}
                alt={selectedImg.judul}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 bg-white">
              <span className="text-xs font-bold text-[#8B5E3C] uppercase tracking-wider">
                {selectedImg.kategori} — {selectedImg.tanggal}
              </span>
              <h3 className="text-xl font-extrabold text-stone-900 mt-1">
                {selectedImg.judul}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}