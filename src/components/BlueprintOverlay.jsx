import { motion } from 'framer-motion'

export default function BlueprintOverlay() {
  const lines = Array.from({ length: 12 }, (_, i) => i)
  return (
    <section id="work" className="relative z-10 -mt-16 bg-[#06122a] py-20">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59,130,246,0.25)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">Featured Engineering Shots</h2>
            <p className="mt-2 text-white/60">Blueprint-style overlays, exploded assemblies, and motion studies</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            {lines.map((l) => (
              <motion.span
                key={l}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: l * 0.03 }}
                className="h-8 w-0.5 rounded bg-gradient-to-b from-cyan-400/70 to-blue-600/70"
              />
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Exploded Gearbox',
              desc: 'Layered assembly timing, constraints + cinematic lighting',
            },
            {
              title: '6-DOF Robotic Arm',
              desc: 'FK/IK solvers, spline paths, end-effector precision',
            },
            {
              title: 'Aerial Drone Dynamics',
              desc: 'PID tuning, prop wash sims, material reflections',
            },
          ].map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 text-white shadow-xl backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{card.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{card.desc}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">CAD</div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-white/70">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">Gears</div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">Arms</div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">Drones</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
