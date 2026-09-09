import { Monitor, Trees, GraduationCap, QrCode, Bug, Sparkles } from 'lucide-react'

export default function ProgramKerja() {
  const prokerList = [
    {
      icon: QrCode,
      kategori: "Teknologi & Ekonomi UMKM",
      judul: "Digitalisasi & Branding UMKM Sekargadung",
      deskripsi: "Pendataan geotagging Google Maps, pembuatan QRIS, pendampingan NIB, serta pembuatan desain banner untuk produk lokal warga.",
      status: "Terlaksana",
      statusColor: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      icon: Bug,
      kategori: "Lingkungan & Pertanian",
      judul: "GEMPITA & Spray Nyamuk Serai",
      deskripsi: "Gerakan Emposan Pengendalian Tikus Sawah bersama kelompok tani serta pelatihan pembuatan spray anti nyamuk bahan alami.",
      status: "Terlaksana",
      statusColor: "bg-[#4A6B3C]/10 text-[#4A6B3C] border-[#4A6B3C]/30"
    },
    {
      icon: GraduationCap,
      kategori: "Pendidikan & Keagamaan",
      judul: "Bimbel Fonik & Pekan Ceria Al-Qur'an",
      deskripsi: "Pendampingan belajar membaca metode fonik di posko, mengajar di sekolah lokal, serta kegiatan Pekan Ceria Al-Qur'an.",
      status: "Terlaksana",
      statusColor: "bg-stone-100 text-stone-600 border-stone-300"
    }
  ]

  const getStatusPrefix = (status) => {
    switch (status) {
      case 'Terlaksana': return '✓ '
      case 'Berjalan': return '● '
      default: return '○ '
    }
  }

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
                className="bg-white p-8 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col justify-between hover:border-[#8B5E3C]/40 hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#8B5E3C]/10 text-[#8B5E3C] flex items-center justify-center">
                      <IconComponent size={24} />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${item.statusColor}`}>
                      {getStatusPrefix(item.status)}{item.status}
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