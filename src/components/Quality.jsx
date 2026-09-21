import Reveal from './Reveal.jsx'
import chinchinBlackBg from '../assets/images/chinchin-black-bg.webp'
import patternSnacks from '../assets/images/pattern-snacks.webp'

const items = [
  {
    title: 'Rich & buttery',
    desc: 'Each cube is prepared with full cream milk, butter and the finest ingredients, never a shortcut.',
  },
  {
    title: 'Low sugar, all crunch',
    desc: "Well-known for its unmatched crunch, with lower sugar and fat than you'd expect.",
  },
  {
    title: 'However you like it',
    desc: 'Enjoy it with your favourite drink, or use it as a topping for ice cream and desserts.',
  },
]

export default function Quality() {
  return (
    <section
      id="quality"
      className="section"
      style={{ '--pattern-bg': `url(${patternSnacks})` }}
    >
      <div className="bg-blob bg-blob-1"></div>
      <div className="quality-pattern" />
      <div className="wrap">
        <div className="quality-grid">
          <Reveal className="qg-img">
            <img src={chinchinBlackBg} alt="Close-up of three Chin-Chin flavours" />
          </Reveal>
          <Reveal>
            <p className="kicker">Our quality</p>
            <h2>A crunch to remember.</h2>
            <div className="quality-list">
              {items.map((it) => (
                <div className="quality-item" key={it.title}>
                  <h4>{it.title}</h4>
                  <p>{it.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
