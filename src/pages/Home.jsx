import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ValueProps from '../components/ValueProps'
import Projects from '../components/Projects'
import CodeLibrary from '../components/CodeLibrary'
import Services from '../components/Services'
import CTA from '../components/CTA'

export default function Home(){
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <Projects />
        <CodeLibrary />
        <Services />
        <CTA />
      </main>
    </div>
  )
}
