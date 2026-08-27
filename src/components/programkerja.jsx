import { Monitor, Trees, HeartHandshake } from 'lucide-react'

export default function ProgramKerja() {
  const prokerList = [
    {
      icon: Monitor,
      kategori: "DIGITALISASI & TEKNOLOGI",
      judul: "Website Official & Branding UMKM",
      deskripsi: "Pengembangan sistem digitalisasi desa serta pendataan produk unggulan warga (hasil tambak & UMKM lokal Sekargadung).",
      status: "Berjalan",
      statusColor: "bg-[#4A6B3C]/10 text-[#4A6B3C] border-[#4A6B3C]/30"
    },
    {
      icon: Trees,
      kategori: "LINGKUNGAN & SANITASI",
      judul: "Edukasi Pengolahan Sampah & Penghijauan",
      deskripsi: "Program sosialisasi pemilahan sampah rumah tangga serta aksi penanaman bibit di wilayah pemukiman desa.",
      status: "Terlaksana",
      statusColor: "bg-[#8B5E3C]/10 text-[#8B5E3C] border-[#8B5E3C]/30"
    },
    {
      icon: HeartHandshake,
      kategori: "PEMBERDAYAAN MASYARAKAT",
      judul: "Bimbingan Belajar & Edukasi Kesehatan",
      deskripsi: "Pendampingan belajar untuk anak-anak sekolah dasar dan penyuluhan pola hidup sehat bersama posyandu lokal.",
      status: "Rencana",
      statusColor: "bg-stone-100 text-stone-600 border-stone-300"
    }
  ]

  return (
    <section id="proker" className="py-20 bg-[#FAF8F5] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold px-3 py-1 bg-[#4A6B3C]/10 text-[#4A6B3C] rounded-full border border-[#4A6B3C]/20">
            Pengabdian Masyarakat
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 mt-3 mb-4 tracking-tight">
            Program Kerja KKN Universitas Qomaruddin • Kelompok 11
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Inisiatif dan kegiatan unggulan KKN Kelompok 11 yang dirancang untuk mendukung pemberdayaan masyarakat Desa Sekargadung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prokerList.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col justify-between hover:border-[#8B5E3C]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#8B5E3C]/10 text-[#8B5E3C] flex items-center justify-center">
                      <IconComponent size={24} />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${item.statusColor}`}>
                      ✓ {item.status}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#4A6B3C] uppercase tracking-wider block mb-2">
                    {item.kategori}
                  </span>
                  <h3 className="text-xl font-bold text-stone-900 mb-3">{item.judul}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">{item.deskripsi}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}