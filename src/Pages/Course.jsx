import Coursecard from '../component/Coursecard.jsx'

const players = [
  { color: 'red', title: 'Red', text: 'Bold and aggressive. Loves capturing tokens.' },
  { color: 'green', title: 'Green', text: 'Calm and steady. Plays the long game.' },
  { color: 'yellow', title: 'Yellow', text: 'Fast and lucky. Always chasing sixes.' },
  { color: 'blue', title: 'Blue', text: 'Smart and careful. Protects every token.' },
]

const scores = [
  ['Red', 2, 3, 'Playing'],
  ['Green', 1, 1, 'Playing'],
  ['Yellow', 4, 5, 'Winner 🏆'],
  ['Blue', 0, 2, 'Playing'],
]

// This page is the "Course" page from your structure, used here as the Players page.
function Course() {
  return (
    <>
      <section className="box center-text">
        <h1>Choose Your Color</h1>
        <p>Each color has its own base, start square and home column.</p>
      </section>

      <section className="cards">
        {players.map((p) => (
          <Coursecard
            key={p.color}
            color={p.color}
            title={p.title}
            text={p.text}
            letter={p.title[0]}
            tag={`Starts at the ${p.color} square`}
          />
        ))}
      </section>

      <section className="box">
        <h2>Scoreboard</h2>
        <table>
          <thead>
            <tr><th>Player</th><th>Tokens Home</th><th>Captures</th><th>Status</th></tr>
          </thead>
          <tbody>
            {scores.map(([name, home, caps, status]) => (
              <tr key={name}><td>{name}</td><td>{home}</td><td>{caps}</td><td>{status}</td></tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}

export default Course
