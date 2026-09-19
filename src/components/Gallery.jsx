import Reveal from './Reveal.jsx'
import chinchinFlatlay from '../assets/images/chinchin-flatlay.webp'
import piesTray1 from '../assets/images/pies-tray-1.webp'
import chinchinTubsGroup from '../assets/images/chinchin-tubs-group.webp'
import smallchopsHandheld2 from '../assets/images/smallchops-handheld-2.webp'
import graphic4categories from '../assets/images/graphic-4categories.webp'
import piesTray2 from '../assets/images/pies-tray-2.webp'
import chinchinBulkSizes from '../assets/images/chinchin-bulk-sizes.webp'
import graphicThisorthat from '../assets/images/graphic-thisorthat.webp'

const images = [
  { src: chinchinFlatlay, alt: 'Chin-Chin flat lay' },
  { src: piesTray1, alt: 'Tray of pies' },
  { src: chinchinTubsGroup, alt: 'Chin-Chin tubs' },
  { src: smallchopsHandheld2, alt: 'Small chops handheld' },
  { src: graphic4categories, alt: 'Four Chin-Chin categories' },
  { src: piesTray2, alt: 'Pies tray' },
  { src: chinchinBulkSizes, alt: 'Chin-Chin bulk sizes' },
  { src: graphicThisorthat, alt: 'Relish Spices or Fruity' },
]

export default function Gallery({ onImageClick }) {
  return (
    <section id="gallery" className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">Follow the flavour</p>
          <h2>@estelles_delight</h2>
        </Reveal>

        <Reveal className="gallery-grid">
          {images.map((im) => (
            <a key={im.src} onClick={() => onImageClick(im.src)}>
              <img src={im.src} alt={im.alt} />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
