import { useState } from 'react'

function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault() // stop the page reloading
    setSent(true)
    e.target.reset()
  }

  return (
    <>
      <section className="box">
        <h1>Contact Us</h1>
        <p>Have a question or want to organize a Ludo tournament? Send us a message.</p>
        <form onSubmit={handleSubmit}>
          <label>Name<input type="text" placeholder="Your name" required /></label>
          <label>Email<input type="email" placeholder="you@example.com" required /></label>
          <label>Favorite Color
            <select>
              <option>Red</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Blue</option>
            </select>
          </label>
          <label>Message<textarea rows="5" placeholder="Write your message..." required /></label>
          <button className="btn" type="submit">Send Message</button>
        </form>
        {sent && <p className="success">Thank you! Your message has been sent.</p>}
      </section>

      <section className="box">
        <h2>Find Us</h2>
        <p>📍 Pimpri, Maharashtra, India<br />📧 hello@ludokingdom.example<br />📞 +91 00000 00000</p>
      </section>
    </>
  )
}

export default Contact
