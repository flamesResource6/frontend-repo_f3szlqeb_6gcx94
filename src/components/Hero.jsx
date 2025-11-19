import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/70 to-slate-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-3xl">
          <p className="text-blue-300/80 uppercase tracking-[0.25em] text-xs mb-4">Dan Meyers • Sacred Machines</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-[0_8px_32px_rgba(59,130,246,0.45)]">
            Build. Automate. Transform.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-blue-100/90 max-w-2xl">
            Cinematic storytelling meets AI workflows. I design content systems, automation pipes, and vibe-coded micro‑apps that turn ideas into momentum.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="#work" className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold shadow-lg shadow-blue-500/30 transition-colors">See the Work</Link>
            <Link to="#services" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/10 transition-colors">Build an AI Workflow</Link>
            <Link to="/contact" className="px-5 py-3 rounded-lg bg-amber-500/90 hover:bg-amber-400 text-slate-900 font-semibold transition-colors">Let’s Talk</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
