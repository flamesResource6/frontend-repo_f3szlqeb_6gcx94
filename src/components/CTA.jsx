import { Link } from 'react-router-dom'

export default function CTA(){
  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">Let’s Build Something That Moves People</h2>
        <p className="mt-4 text-blue-100/90 max-w-2xl mx-auto">Strategy, systems, and cinematic craft—aligned to accelerate your brand.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="mailto:dan@sacredmachines.live" className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold shadow-lg shadow-blue-500/30 transition-colors">Strategy Call</a>
          <Link to="/contact" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/10 transition-colors">Build a Workflow</Link>
          <a href="/contact" className="px-5 py-3 rounded-lg bg-amber-500/90 hover:bg-amber-400 text-slate-900 font-semibold transition-colors">Get a Video Quote</a>
        </div>
        <div className="mt-6 text-blue-200/80 text-sm">Email: dan@sacredmachines.live • LinkedIn: /in/danmeyers • Phone: (555) 555-5555</div>
      </div>
    </section>
  )
}
