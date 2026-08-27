import Navbar from './components/navbar'
import Hero from './components/hero'
import Profildesa from './components/ProfilDesa'
import ProgramKerja from './components/programkerja'
import Anggota from './components/anggota'
import Footer from './components/footer'

export default function App() {
  return (
    <div className="min-h-screen bg-kkn-cream text-kkn-dark font-sans antialiased">
      <Navbar />
      <Hero />
      <Profildesa />
      <ProgramKerja />
      <Anggota />
      <Footer />
    </div>
  )
}
