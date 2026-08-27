import { Users, MapPin, Waves, Store } from 'lucide-react'

export default function ProfilDesa() {
  const stats = [
    { icon: Users, label: "Total Penduduk", value: "± 2.364 Jiwa", desc: "1.182 Laki-laki • 1.182 Perempuan" },
    { icon: MapPin, label: "Wilayah Adm.", value: "4 RW / 15 RT", desc: "Kecamatan Dukun" },
    { icon: Waves, label: "Geografis", value: "Tepi Bengawan Solo", desc: "Kawasan Bebas Banjir Tanggul" },
    { icon: Store, label: "Potensi Desa", value: "Tani & Tambak", desc: "Pertanian, Tambak & UMKM Warkop" },
  ]

  const potensiList = [
    "Pertanian Sawah", "Budidaya Tambak", "Jalan Usaha Tani (JUT)",
    "Usaha Kedai Kopi / Warkop", "Pintu Air Irigasi", "Seni & Adat Budaya"
  ]

  return (
    <section id="profil" className="py-20 bg-white border-y border-stone-200/60 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold px-3 py-1 bg-[#4A6B3C]/10 text-[#4A6B3C] rounded-full border border-[#4A6B3C]/20">
            Data Resmi Kab. Gresik
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 mt-3 mb-4 tracking-tight">
            Profil Desa Sekargadung
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Desa Sekargadung berada di Kecamatan Dukun, Kabupaten Gresik. Terletak di sepanjang tepi Bengawan Solo dengan potensi besar di bidang pertanian sawah, perikanan tambak, serta aktivitas ekonomi warga.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div 
                key={index} 
                className="p-6 bg-[#FAF8F5] border border-stone-200/80 rounded-2xl hover:border-[#8B5E3C]/40 transition-all text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-[#8B5E3C]/10 text-[#8B5E3C] flex items-center justify-center mb-4">
                  <IconComponent size={20} />
                </div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-1">{item.label}</h3>
                <p className="text-xl font-bold text-stone-900 mb-1">{item.value}</p>
                <p className="text-xs text-stone-500">{item.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-stone-200/80 text-center">
          <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4">
            Potensi & Fokus Wilayah Sekargadung (Dukun)
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {potensiList.map((potensi, i) => (
              <span key={i} className="px-3 py-1 bg-white text-stone-700 text-xs font-medium rounded-lg border border-stone-200 shadow-2xs">
                🌾 {potensi}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}