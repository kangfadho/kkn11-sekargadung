import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Anggota() {
  const timKKN = [
    { nama: "Kiki", peran: "Ketua Kelompok", prodi: "Teknik Informatika", foto: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kiki" },
    { nama: "Nisa", peran: "Sekretaris", prodi: "Administrasi Publik", foto: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nisa" },
    { nama: "Budi", peran: "Bendahara", prodi: "Akuntansi", foto: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi" },
    { nama: "Siti", peran: "Divisi Humas", prodi: "Ilmu Komunikasi", foto: "https://api.dicebear.com/7.x/avataaars/svg?seed=Siti" },
    { nama: "Rian", peran: "Divisi PDD", prodi: "Desain Komunikasi Visual", foto: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rian" },
  ]

  return (
    <section id="anggota" className="py-20 bg-[#FAF8F5] border-t border-stone-200/60 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold px-3 py-1 bg-[#4A6B3C]/10 text-[#4A6B3C] rounded-full border border-[#4A6B3C]/20">
            Tim Mahasiswa
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 mt-3 mb-4 tracking-tight">
            Anggota Kelompok 11
          </h2>
          <p className="text-stone-600 leading-relaxed">
            Kolaborasi lintas jurusan yang siap mendedikasikan waktu dan tenaga untuk pengabdian di Desa Sekargadung.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-14 !px-2"
        >
          {timKKN.map((anggota, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs text-center flex flex-col items-center hover:border-[#8B5E3C]/40 transition-all">
                <div className="w-24 h-24 rounded-full bg-[#FAF8F5] mb-4 overflow-hidden border-2 border-[#8B5E3C]/20">
                  <img src={anggota.foto} alt={anggota.nama} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs font-semibold text-[#8B5E3C] uppercase tracking-wider mb-1">
                  {anggota.peran}
                </span>
                <h3 className="text-lg font-bold text-stone-900 mb-1">{anggota.nama}</h3>
                <p className="text-xs text-stone-500 font-medium">{anggota.prodi}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}