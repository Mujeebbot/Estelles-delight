import Reveal from './Reveal.jsx'
import waveTexture from '../assets/images/wave-texture.webp'
import cateringPlatter from '../assets/images/catering-platter.webp'
import cateringSpread from '../assets/images/catering-spread.webp'
import eventFavors from '../assets/images/event-favors.webp'
import smallchopsBagsSingle from '../assets/images/smallchops-bags-single.webp'
import smallchopsBagsBulk from '../assets/images/smallchops-bags-bulk.webp'
import cateringBoxFull from '../assets/images/catering-box-full.webp'
import cateringBoxesMulti from '../assets/images/catering-boxes-multi.webp'
import puffpuffStrawberry from '../assets/images/puffpuff-strawberry.webp'

export default function Catering({ onImageClick }) {
  return (
    <section
      id="catering"
      className="section"
      style={{ '--wave-bg-img': `url(${waveTexture})` }}
    >
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>
      <div className="wrap">
        <div className="catering-inner">
          <Reveal>
            <p className="kicker">For your next event</p>
            <h2>Planning something special?</h2>
            <p>
              From intimate gatherings to full celebrations, let Estelle's
              Delight bring the flavour: trays of chicken, pies and small chops,
              favours for your guests, and Chin-Chin by the bucket.
            </p>
            <a href="#contact" className="btn btn-solid" style={{ marginTop: 30 }}>
              Enquire About Catering
            </a>
          </Reveal>

          <Reveal className="catering-gallery">
            <a onClick={() => onImageClick(cateringBoxFull)}>
              <img src={cateringBoxFull} alt="Full catering box with chicken, puff-puff, samosas, spring rolls and skewers" />
            </a>
            <a onClick={() => onImageClick(smallchopsBagsBulk)}>
              <img src={smallchopsBagsBulk} alt="Bulk small chops bags packed for an event" />
            </a>
            <a onClick={() => onImageClick(smallchopsBagsSingle)}>
              <img src={smallchopsBagsSingle} alt="Individual small chops bag" />
            </a>
            <a onClick={() => onImageClick(cateringPlatter)}>
              <img src={cateringPlatter} alt="Catering platter with small chops and grilled meat" />
            </a>
            <a onClick={() => onImageClick(cateringSpread)}>
              <img src={cateringSpread} alt="Puff-puff and pies catering spread" />
            </a>
            <a onClick={() => onImageClick(puffpuffStrawberry)}>
              <img src={puffpuffStrawberry} alt="Puff-puff with strawberries and glaze" />
            </a>
            <a onClick={() => onImageClick(eventFavors)}>
              <img src={eventFavors} alt="Personalised event favour cups" />
            </a>
            <a onClick={() => onImageClick(cateringBoxesMulti)}>
              <img src={cateringBoxesMulti} alt="Multiple catering boxes ready for an event" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
