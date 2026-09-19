import Reveal from './Reveal.jsx'
import piesTasteSomethingGood from '../assets/images/pies-taste-something-good.webp'
import chinchinStripsLifestyle from '../assets/images/chinchin-strips-lifestyle.webp'
import marketTableCloseup from '../assets/images/market-table-closeup.webp'
import drinksZoboChapman from '../assets/images/drinks-zobo-chapman.webp'
import cateringBoxesRows from '../assets/images/catering-boxes-rows.webp'

const images = [
  { src: piesTasteSomethingGood, alt: "Estelle's Delight pies" },
  { src: chinchinStripsLifestyle, alt: 'Chin-Chin strips styled with flowers' },
  { src: marketTableCloseup, alt: 'Market stall table close-up' },
  { src: drinksZoboChapman, alt: 'Fruity Zobo and Chapman drinks' },
  { src: cateringBoxesRows, alt: 'Rows of catering boxes' },
]

export default function Social({ onImageClick }) {
  return (
    <section id="social" className="section">
      <div className="bg-blob bg-blob-1"></div>
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">@estelles_delight</p>
          <h2>Find us out and about.</h2>
        </Reveal>

        <Reveal className="social-strip">
          {images.map((im) => (
            <a key={im.src} onClick={() => onImageClick(im.src)}>
              <img src={im.src} alt={im.alt} />
            </a>
          ))}
        </Reveal>

        <Reveal style={{ textAlign: 'center', marginTop: 50 }}>
          <a href="https://www.instagram.com/estelles_delight/" target="_blank" rel="noreferrer" className="btn btn-ghost">
            Follow Along
          </a>
        </Reveal>
      </div>
    </section>
  )
}
