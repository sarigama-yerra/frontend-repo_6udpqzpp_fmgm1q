import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BlueprintOverlay from './components/BlueprintOverlay'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#06122a] text-white">
      <div className="relative">
        <div className="absolute inset-0 -z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 via-transparent to-blue-600/10 pointer-events-none" />
        </div>
        <Navbar />
        <Hero />
      </div>
      <BlueprintOverlay />
      <Footer />
    </div>
  )
}

export default App
