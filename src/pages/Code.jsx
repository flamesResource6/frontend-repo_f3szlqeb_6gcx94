import Navbar from '../components/Navbar'
import CodeLibrary from '../components/CodeLibrary'

export default function Code(){
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <Navbar />
      <main className="pt-24">
        <CodeLibrary />
      </main>
    </div>
  )
}
