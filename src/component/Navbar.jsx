import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header>
      <div className="logo">🎲 Ludo Kingdom</div>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About &amp; Rules</NavLink>
        <NavLink to="/board">Board</NavLink>
        <NavLink to="/players">Players</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
