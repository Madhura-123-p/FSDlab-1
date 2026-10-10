import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Board from './Pages/Board.jsx'
import Course from './Pages/Course.jsx'
import Contact from './Pages/Contact.jsx'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/board" element={<Board />} />
          <Route path="/players" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
