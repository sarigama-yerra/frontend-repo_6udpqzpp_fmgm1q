import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#06122a] via-[#0b204a] to-[#0a1a36]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/tu1yYfmgsnYCLUIx/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,255,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(0,102,255,0.2),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_6px_30px_rgba(0,180,255,0.35)]"
          >
            Precision + Imagination
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
            className="mt-4 text-lg sm:text-xl text-white/80"
          >
            A cinematic engineering portfolio blending robotics, gears and blueprint overlays. Explore assemblies, drones and kinematics rendered with elegant lighting.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
            className="pointer-events-auto mt-8 flex flex-wrap gap-3"
          >
            <a href="#work" className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-white shadow-lg shadow-cyan-500/20">
              View Projects
            </a>
            <a href="#reel" className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-white/90 backdrop-blur-md">
              Watch Animation Reel
            </a>
          </motion.div>

          <div className="mt-12 grid grid-cols-3 gap-6 opacity-90">
            {[
              { label: 'Robotic Arms', value: 'FK/IK, Pathing' },
              { label: 'Gears & Drives', value: 'Parametric' },
              { label: 'Drones', value: 'Quad/X8' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white/80 backdrop-blur-xl">
                <div className="text-sm uppercase tracking-wide text-cyan-300">{item.label}</div>
                <div className="mt-1 text-sm">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#06122a]" />
    </section>
  )
}
