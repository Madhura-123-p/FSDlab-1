// Reusable card. Props: color (red | green | yellow | blue), title, text, letter (optional), tag (optional)
function Coursecard({ color, title, text, letter, tag }) {
  return (
    <div className={`card ${color}`}>
      {letter && <div className="avatar">{letter}</div>}
      <h3>{title}</h3>
      <p>{text}</p>
      {tag && <span className="tag">{tag}</span>}
    </div>
  )
}

export default Coursecard
