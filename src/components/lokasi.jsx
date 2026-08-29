export default function Lokasi() {
  return (
    <section id="lokasi" className="py-16 bg-[#FAF8F5] border-t border-stone-200/70 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold px-3 py-1 bg-[#4A6B3C]/10 text-[#4A6B3C] rounded-full border border-[#4A6B3C]/20">
            Peta Lokasi
          </span>
          <h2 className="text-3xl font-extrabold text-stone-900 mt-3 mb-2 tracking-tight">
            Lokasi Desa Sekargadung
          </h2>
          <p className="text-stone-600 text-sm">
            Kecamatan Dukun, Kabupaten Gresik, Jawa Timur (61155)
          </p>
        </div>

        {/* Container Maps */}
        <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-stone-300 shadow-sm">
          <iframe
            title="Peta Desa Sekargadung Dukun Gresik"
            src="https://maps.google.com/maps?q=XFXC%2BFR6%2C%20Sekargadung%2C%20Kec.%20Dukun%2C%20Kabupaten%20Gresik%2C%20Jawa%20Timur%2061155&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}