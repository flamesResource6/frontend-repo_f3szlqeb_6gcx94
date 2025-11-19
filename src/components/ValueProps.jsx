import { Zap, Clapperboard, AppWindow } from 'lucide-react'

const items = [
  {
    icon: Zap,
    title: 'AI-Powered Content Systems',
    desc: 'Automation pipelines, multi-agent workflows, and structured outputs that scale content while reducing workload.'
  },
  {
    icon: Clapperboard,
    title: 'Cinematic Video + AI Filmmaking',
    desc: 'Hybrid live-action and AI films. Story-first, visually bold, built for growth and resonance.'
  },
  {
    icon: AppWindow,
    title: 'Vibe-Coded Interactive Apps',
    desc: 'Micro-apps and prototypes that turn concepts into clickable momentum within hours, not weeks.'
  }
]

export default function ValueProps() {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-950 to-slate-900" id="what-i-do">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <item.icon className="w-6 h-6 text-blue-300" />
              <h3 className="mt-4 text-white font-semibold">{item.title}</h3>
              <p className="mt-2 text-blue-100/90 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
