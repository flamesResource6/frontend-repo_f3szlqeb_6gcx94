const projects = [
  { title: 'EPR Estimator', desc: 'Interactive estimator used by policy and recycling pros.', tag: 'App', thumb: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1200&auto=format&fit=crop' },
  { title: 'A Little Too Real', desc: 'AI short film blending narrative and generative visuals.', tag: 'AI Film', thumb: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Fortunate Armadillo', desc: 'Surreal generative vignette with character work.', tag: 'AI Film', thumb: 'https://images.unsplash.com/photo-1542377285-7261a32d3d19?q=80&w=1200&auto=format&fit=crop' },
  { title: 'AI Shorts Collection', desc: 'Series of AI-driven micro films and cinematic experiments.', tag: 'AI Films', thumb: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop' },
  { title: 'NTT DATA: Static → Agentic', desc: 'Transformation initiative to agentic AI systems.', tag: 'Strategy', thumb: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Mt. Hood Brewing Video Engine', desc: '1250% growth via content system + automation.', tag: 'Growth', thumb: 'https://images.unsplash.com/photo-1526404951892-5d8d5d992d14?q=80&w=1200&auto=format&fit=crop' },
  { title: 'WakeKite + ShadowBox', desc: 'Patented watersports products and launch storytelling.', tag: 'Product', thumb: 'https://images.unsplash.com/photo-1520975682031-c3c6cfd6bdf4?q=80&w=1200&auto=format&fit=crop' },
]

export default function Projects() {
  return (
    <section className="py-16 sm:py-24 bg-slate-900" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Signature Projects</h2>
          <a href="/work" className="text-blue-300 hover:text-white text-sm">See all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className="aspect-video overflow-hidden">
                <img src={p.thumb} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="text-xs text-blue-300">{p.tag}</div>
                <h3 className="mt-1 font-semibold text-white">{p.title}</h3>
                <p className="text-sm text-blue-100/90 mt-1">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
