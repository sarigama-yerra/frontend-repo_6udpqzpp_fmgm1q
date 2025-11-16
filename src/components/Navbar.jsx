import { useState } from 'react'
import { Menu, X, Settings, Layers } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg ring-1 ring-white/30" />
              <span className="text-sm font-medium tracking-widest text-white/90 uppercase">
                EngiVision
              </span>
            </div>
            <nav className="hidden gap-8 md:flex">
              <a className="text-white/80 hover:text-white transition" href="#work">Work</a>
              <a className="text-white/80 hover:text-white transition" href="#about">About</a>
              <a className="text-white/80 hover:text-white transition" href="#contact">Contact</a>
            </nav>
            <div className="hidden items-center gap-3 md:flex">
              <button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-white/90 hover:bg-white/15 transition">
                <Layers size={16} /> Showcase
              </button>
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-white shadow-lg">
                <Settings size={16} /> Hire Me
              </button>
            </div>
            <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-6 pb-6 flex flex-col gap-3">
              <a className="text-white/90" href="#work">Work</a>
              <a className="text-white/90" href="#about">About</a>
              <a className="text-white/90" href="#contact">Contact</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
