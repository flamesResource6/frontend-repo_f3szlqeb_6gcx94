import Navbar from '../components/Navbar'

const filters = ['AI Films','Brand Videos','Social Content','Product Demos','App Walkthroughs']

const vids = Array.from({length:9}).map((_,i)=> ({
  title: `Sample Video ${i+1}`,
  tag: filters[i%filters.length],
  thumb: `https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1200&auto=format&fit=crop`,
  url: 'https://vimeo.com/'
}))

export default function Work(){
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <Navbar />
      <main className="pt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-white">Video Showcase</h1>
          <div className="flex flex-wrap gap-2">
            {filters.map(f=> (<button key={f} className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm">{f}</button>))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vids.map(v=> (
            <a key={v.title} href={v.url} target="_blank" className="group rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-video overflow-hidden">
                <img src={v.thumb} alt="thumb" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              </div>
              <div className="p-4">
                <div className="text-xs text-blue-300">{v.tag}</div>
                <div className="text-white font-semibold">{v.title}</div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  )
}
