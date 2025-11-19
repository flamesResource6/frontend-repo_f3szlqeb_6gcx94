import { Link, useLocation } from 'react-router-dom'

const NavLink = ({ to, children }) => {
  const location = useLocation()
  const active = location.pathname === to
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        active ? 'text-white bg-white/10' : 'text-blue-200 hover:text-white hover:bg-white/10'
      }`}
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30" />
          <span className="text-white font-semibold tracking-tight group-hover:text-blue-200 transition-colors">SacredMachines.live</span>
        </Link>
        <nav className="flex items-center gap-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/code">Code Library</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
