import Reveal from './Reveal.jsx'
import founderMarketStall from '../assets/images/founder-market-stall.webp'
import founderDoughProcess from '../assets/images/founder-dough-process.webp'

export default function Story() {
  return (
    <section id="story" className="section">
      <div className="wrap">
        <div className="story-grid">
          <Reveal className="story-imgs">
            <img className="main-img" src={founderMarketStall} alt="Estelle's Delight founder at a Perth market stall" />
            <img className="float-img" src={founderDoughProcess} alt="Hand-rolling Chin-Chin dough" />
          </Reveal>
          <Reveal className="story-text">
            <p className="kicker">Our story</p>
            <h2>More than a snack.<br />It's a little taste of home.</h2>
            <p>
              Estelle's Delight started the way most good things do: in a home
              kitchen in Perth, with a rolling pin, a pasta machine repurposed
              for chin-chin dough, and a determination to get it exactly
              right.
            </p>
            <p>
              Today you'll find us behind a market stall most weekends, still
              cutting, frying and bagging every batch ourselves, thirty
              flavours deep and counting.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
