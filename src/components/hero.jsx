import { ArrowRight, Leaf } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="pt-12 pb-20 px-6 max-w-6xl mx-auto text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#4A6B3C]/10 text-[#4A6B3C] rounded-full text-xs font-semibold border border-[#4A6B3C]/20 mb-6">
          <Leaf size={14} /> KKN Kelompok 11 • Universitas Qomaruddin
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight mb-6">
          Mengabdi & Berdaya Bersama <span className="text-[#8B5E3C]">Desa Sekargadung</span>
        </h1>
        <p className="text-stone-600 text-base sm:text-lg mb-8 leading-relaxed">
          Wadah dokumentasi resmi kegiatan pemberdayaan masyarakat, pengabdian, dan edukasi mahasiswa KKN Kelompok 11 Dukun - Gresik.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <a 
            href="#profil" 
            className="px-6 py-3 bg-[#8B5E3C] hover:bg-[#754d30] text-white font-medium rounded-xl shadow-xs flex items-center justify-center gap-2 transition-all"
          >
            Lihat Profil Desa <ArrowRight size={18} />
          </a>
          <a 
            href="#anggota" 
            className="px-6 py-3 bg-white hover:bg-stone-100 border border-stone-200 text-stone-700 font-medium rounded-xl flex items-center justify-center gap-2 transition-all"
          >
            Tim Mahasiswa
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="w-full h-80 sm:h-96 bg-stone-200/60 rounded-2xl overflow-hidden border border-stone-200 flex items-center justify-center text-stone-400">
          <span className="text-sm font-medium">Slot Foto Banner Kelompok</span>
        </div>
      </div>
    </section>
  )
}