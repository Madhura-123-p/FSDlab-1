import { Link } from 'react-router-dom'
import Coursecard from '../component/Coursecard.jsx'

function Home() {
  return (
    <>
      <section className="hero">
        <h1>Welcome to <span>Ludo Kingdom</span></h1>
        <p>The classic race-to-home board game loved by families for generations. Roll the dice, move your tokens and be the first to reach home!</p>
        <Link className="btn" to="/board">View the Board</Link>
        <Link className="btn alt" to="/about">Learn the Rules</Link>
      </section>

      <section className="cards">
        <Coursecard color="red" title="2–4 Players" text="Play with friends and family around one board." />
        <Coursecard color="green" title="Easy to Learn" text="Simple rules that anyone can pick up in minutes." />
        <Coursecard color="yellow" title="Fun & Strategy" text="Luck decides the dice, skill decides the winner." />
        <Coursecard color="blue" title="Timeless Classic" text="Descended from the ancient Indian game Pachisi." />
      </section>

      <section className="box">
        <h2>About the Game</h2>
        <p>Ludo is played on a cross-shaped board. Each player owns four tokens that start in a home base. Players take turns rolling a die and moving tokens around the track. The first player to bring all four tokens to the center wins.</p>
      </section>
    </>
  )
}

export default Home
