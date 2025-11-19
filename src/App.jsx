import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import Code from './pages/Code'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/code" element={<Code />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
