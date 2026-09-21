import Reveal from './Reveal.jsx'
import chinchinCleanRed from '../assets/images/chinchin-clean-red.webp'
import patternSnacks from '../assets/images/pattern-snacks.webp'

export default function Intro() {
  return (
    <section
      id="intro"
      className="section"
      style={{ '--pattern-bg': `url(${patternSnacks})` }}
    >
      <div className="bg-blob bg-blob-1"></div>
      <div className="intro-pattern" />
      <div className="wrap">
        <div className="intro-grid">
          <Reveal className="intro-text">
            <p className="kicker">Since day one</p>
            <h2>Made with flavour.<br />Shared with love.</h2>
            <p>
              Every batch of Estelle's Delight starts the same unglamorous way
              it always has: measured by hand, watched closely in the fryer,
              and packed with care before it ever leaves our kitchen. No
              shortcuts. Just snacks worth going back for.
            </p>
          </Reveal>
          <Reveal className="intro-img">
            <img src={chinchinCleanRed} alt="Crunchy Chin-Chin, Relish Spices flavour, packet" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
