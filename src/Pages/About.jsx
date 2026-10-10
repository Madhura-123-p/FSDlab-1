const rules = [
  ['Setup', 'Each player picks a color and places four tokens in their home base.'],
  ['Starting', 'Roll a 6 to move a token out of the base onto your start square.'],
  ['Moving', 'Move one token forward clockwise by the number shown on the die.'],
  ['Extra turn', 'Rolling a 6 gives you another roll. Three 6s in a row cancels the turn.'],
  ['Capturing', "Landing on a single opponent's token sends it back to its base."],
  ['Safe squares', 'Starred and colored start squares are safe from capture.'],
  ['Home column', 'After a full lap, tokens enter your colored home column.'],
  ['Winning', 'You need the exact roll to reach the center. First to bring all four tokens home wins!'],
]

function About() {
  return (
    <>
      <section className="box">
        <h1>About Ludo &amp; Game Rules</h1>
        <ol className="rules">
          {rules.map(([title, text]) => (
            <li key={title}><b>{title}:</b> {text}</li>
          ))}
        </ol>
      </section>

      <section className="box">
        <h2>Quick Tips</h2>
        <ul>
          <li>Get several tokens out early so you have more choices.</li>
          <li>Keep tokens together on safe squares.</li>
          <li>Block opponents by stacking two of your tokens on one square.</li>
        </ul>
      </section>
    </>
  )
}

export default About

