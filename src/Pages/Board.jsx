// Decides the CSS class of a track cell at (row, col), both counted 0 to 14.
// Returns null for squares that belong to a base or the center.
function cellClass(r, c) {
  const inBase = (r < 6 || r > 8) && (c < 6 || c > 8)
  const inCenter = r >= 6 && r <= 8 && c >= 6 && c <= 8
  if (inBase || inCenter) return null

  let k = 'cell'
  if (r === 7 && c >= 1 && c <= 5) k += ' red'        // red home column
  if (c === 7 && r >= 1 && r <= 5) k += ' green'      // green home column
  if (r === 7 && c >= 9 && c <= 13) k += ' yellow'    // yellow home column
  if (c === 7 && r >= 9 && r <= 13) k += ' blue'      // blue home column
  if (r === 6 && c === 1) k += ' red'                 // start squares
  if (r === 1 && c === 8) k += ' green'
  if (r === 8 && c === 13) k += ' yellow'
  if (r === 13 && c === 6) k += ' blue'
  const stars = [[8, 2], [2, 6], [6, 12], [12, 8]]    // safe squares
  if (stars.some(([sr, sc]) => sr === r && sc === c)) k += ' star'
  return k
}

const bases = [
  { color: 'red', row: 1, col: 1 },
  { color: 'green', row: 1, col: 10 },
  { color: 'yellow', row: 10, col: 10 },
  { color: 'blue', row: 10, col: 1 },
]

function Board() {
  const cells = []
  for (let r = 0; r < 15; r++) {
    for (let c = 0; c < 15; c++) {
      const cls = cellClass(r, c)
      if (cls) cells.push(<div key={`${r}-${c}`} className={cls} style={{ gridArea: `${r + 1}/${c + 1}` }} />)
    }
  }

  return (
    <section className="box center-text">
      <h1>The Ludo Board</h1>
      <p>A 15 × 15 grid built with React and CSS.</p>

      <div className="board">
        {bases.map(({ color, row, col }) => (
          <div key={color} className={`base ${color}`} style={{ gridArea: `${row}/${col}/span 6/span 6` }}>
            <div className="yard"><i /><i /><i /><i /></div>
          </div>
        ))}
        <div className="center" style={{ gridArea: '7/7/span 3/span 3' }} />
        {cells}
      </div>

      <div className="legend">
        <span className="dot red" />Red
        <span className="dot green" />Green
        <span className="dot yellow" />Yellow
        <span className="dot blue" />Blue
      </div>
    </section>
  )
}

export default Board
