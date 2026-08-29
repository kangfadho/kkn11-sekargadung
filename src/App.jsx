import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProfilDesa from './components/ProfilDesa'
import ProgramKerja from './components/ProgramKerja'
import Galeri from './components/Galeri'
import Anggota from './components/Anggota'
import Lokasi from './components/Lokasi'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-kkn-cream text-kkn-dark font-sans antialiased">
      <Navbar />
      <Hero />
      <ProfilDesa />
      <ProgramKerja />
      <Galeri />
      <Lokasi />
      <Anggota />
      <Footer />
    </div>
  )
}