const services = [
  { title: 'AI workflows & automations', points: ['n8n orchestration', 'Agentic systems', 'Content pipelines', 'Data extraction & structuring'] },
  { title: 'Video & AI filmmaking', points: ['Narrative + brand films', 'AI augmentation', 'Edit systems at scale', 'VFX + style transfers'] },
  { title: 'Interactive apps', points: ['Estimators & calculators', 'Prototypes & micro-apps', 'Integrations', 'Embeddable tools'] },
  { title: 'Marketing & brand strategy', points: ['Positioning', 'Narrative systems', 'Content engines', 'Go-to-market enablement'] },
]

export default function Services(){
  return (
    <section className="py-16 sm:py-24 bg-slate-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s)=> (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-white font-semibold">{s.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-blue-100/90 list-disc list-inside">
                {s.points.map(p=> (<li key={p}>{p}</li>))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
