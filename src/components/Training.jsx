import Reveal from './Reveal.jsx'
import patternSnacks from '../assets/images/pattern-snacks.png'

export default function Training() {
  return (
    <section
      id="training"
      className="section-tight"
      style={{ '--pattern-bg': `url(${patternSnacks})` }}
    >
      <div className="bg-blob bg-blob-1"></div>
      <div className="training-pattern" />
      <div className="wrap">
        <Reveal className="training-inner">
          <p className="kicker">Learn with us</p>
          <h2>Turn your passion into something more.</h2>
          <p style={{ marginTop: 18, fontSize: 16.5, color: 'rgba(43,27,18,0.75)', maxWidth: 520 }}>
            Learn the craft, understand the business, and build with
            confidence: hands-on training and mentorship for anyone ready to
            start their own snack business.
          </p>
          <a href="#contact" className="btn btn-ghost">Discover Training</a>
        </Reveal>
      </div>
    </section>
  )
}
