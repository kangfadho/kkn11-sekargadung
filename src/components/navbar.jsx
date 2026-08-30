import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logoKampus from '../assets/logo-kampus.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  

  return (
    <nav className="bg-[#FAF8F5]/90 backdrop-blur-md sticky top-0 z-50 border-b border-stone-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo Kampus & Judul */}
        <div className="flex items-center gap-3">
          <img src={logoKampus} alt="Logo Kampus" className="h-8 sm:h-9 w-auto object-contain" />
          <span className="font-bold text-base sm:text-lg tracking-tight border-l border-stone-300 pl-3 text-stone-900">
            KKN 11 <span className="text-[#8B5E3C]">Sekargadung</span>
          </span>
        </div>

        {/* Menu Navigasi Desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
          <a href="#hero" className="hover:text-[#4A6B3C] transition-colors">Beranda</a>
          <a href="#proker" className="hover:text-[#4A6B3C] transition-colors">Program Kerja</a>
          <a href="#galeri" className="hover:text-[#4A6B3C] transition-colors">Galeri</a>
          <a href="#lokasi" className="hover:text-[#4A6B3C] transition-colors">Lokasi</a>
          <a href="#anggota" className="hover:text-[#4A6B3C] transition-colors">Anggota</a>
        </div>

        {/* Akses Medsos & Tombol Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 text-stone-600 hover:text-[#8B5E3C] hover:bg-stone-100 rounded-lg transition-all"
            title="Instagram"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="https://tiktok.com" 
            target="_blank" 
            rel="noreferrer" 
            className="p-2 text-stone-600 hover:text-[#8B5E3C] hover:bg-stone-100 rounded-lg transition-all"
            title="TikTok"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.84V7.63a6.34 6.34 0 0 0-5.75 6.34 6.34 6.34 0 1 0 11.59-3.56 8.3 8.3 0 0 0 4.27 1.18V8.1a4.84 4.84 0 0 1-3.53-1.41z"/>
            </svg>
          </a>
          <a 
            href="#profil" 
            className="px-4 py-2 bg-[#4A6B3C] hover:bg-[#3d5931] text-white text-xs font-semibold rounded-lg transition-all shadow-xs"
          >
            Profil Desa
          </a>
        </div>

        {/* Tombol Hamburger Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-stone-700 hover:text-[#8B5E3C] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown Menu Mobile */}
      {isOpen && (
        <div className="md:hidden px-6 pt-2 pb-6 bg-[#FAF8F5] border-t border-stone-200/70 space-y-3">
          <a 
            href="#hero" 
            onClick={() => setIsOpen(false)} 
            className="block text-sm font-medium text-stone-700 hover:text-[#4A6B3C] py-1"
          >
            Beranda
          </a>
          
          <a 
            href="#proker" 
            onClick={() => setIsOpen(false)} 
            className="block text-sm font-medium text-stone-700 hover:text-[#4A6B3C] py-1"
          >
            Program Kerja
          </a>
          <a 
            href="#galeri" 
            onClick={() => setIsOpen(false)} 
            className="block text-sm font-medium text-stone-700 hover:text-[#4A6B3C] py-1"
          >
            Galeri
          </a>
          <a 
            href="#anggota" 
            onClick={() => setIsOpen(false)} 
            className="block text-sm font-medium text-stone-700 hover:text-[#4A6B3C] py-1"
          >
            Anggota
          </a>
          <div className="pt-3 flex items-center justify-between border-t border-stone-200">
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-stone-600 hover:text-[#8B5E3C]">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-stone-600 hover:text-[#8B5E3C]">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-2.84V7.63a6.34 6.34 0 0 0-5.75 6.34 6.34 6.34 0 1 0 11.59-3.56 8.3 8.3 0 0 0 4.27 1.18V8.1a4.84 4.84 0 0 1-3.53-1.41z"/>
                </svg>
              </a>
            </div>
            <a 
              href="#profil" 
              onClick={() => setIsOpen(false)}
              className="px-4 py-1.5 bg-[#4A6B3C] text-white text-xs font-semibold rounded-lg"
            >
              Profil Desa
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}