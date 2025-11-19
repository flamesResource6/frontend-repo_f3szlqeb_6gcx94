import Navbar from '../components/Navbar'

export default function Contact(){
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <Navbar />
      <main className="pt-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h1 className="text-3xl font-bold text-white">Let’s Talk</h1>
        <p className="mt-2 text-blue-100/90">Tell me about your project—goals, timeline, and what success looks like. I’ll reply with next steps within 24 hours.</p>
        <form className="mt-8 grid grid-cols-1 gap-4">
          <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60" placeholder="Name" />
          <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60" placeholder="Email" />
          <input className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60" placeholder="Company / Site" />
          <textarea rows="6" className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-blue-200/60" placeholder="What are you trying to build?" />
          <button className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold shadow-lg shadow-blue-500/30 transition-colors">Send</button>
        </form>
        <div className="mt-6 text-blue-200/80 text-sm">Email: dan@sacredmachines.live • LinkedIn: /in/danmeyers • Phone: (555) 555-5555</div>
      </main>
    </div>
  )
}
