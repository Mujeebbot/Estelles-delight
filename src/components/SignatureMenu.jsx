import Reveal from './Reveal.jsx'
import chinchinLifestyleTub from '../assets/images/chinchin-lifestyle-tub.webp'
import piesTray3 from '../assets/images/pies-tray-3.webp'
import puffpuffPiesBoxes from '../assets/images/puffpuff-pies-boxes.webp'
import smallchopsHandheld from '../assets/images/smallchops-handheld.webp'
import drinksRefreshCans from '../assets/images/drinks-refresh-cans.webp'
import chickenTray from '../assets/images/chicken-tray.jpg'

const cards = [
  {
    href: '#catering',
    cls: 'mc-chinchin',
    img: chinchinLifestyleTub,
    alt: "Estelle's Delight Chin-Chin, bucket and bags",
    objectPosition: 'center 68%',
    title: 'Chin-Chin',
    desc: 'Our signature: 30 flavours across four families, from Relish Spices to Creamy.',
    meta: '4 categories · 100g bags & bulk tubs',
  },
  {
    href: '#catering',
    cls: 'mc-pies',
    img: piesTray3,
    alt: 'Freshly baked meat, chicken and fish pies',
    title: 'Pies',
    desc: 'Meat, chicken & fish, baked golden and sealed by hand.',
  },
  {
    href: '#catering',
    cls: 'mc-puff',
    img: puffpuffPiesBoxes,
    alt: 'Puff-puff and pies packed in kraft boxes',
    objectPosition: 'center 30%',
    title: 'Puff-Puff',
    desc: 'Soft, golden and just sweet enough: a West African classic.',
  },
  {
    href: '#catering',
    cls: 'mc-chicken',
    img: chickenTray,
    alt: 'Roasted chicken drumsticks and puff-puff catering tray',
    objectPosition: 'center 40%',
    title: 'Chicken & Turkey',
    desc: 'Grilled, roasted and spiced to perfection, whole trays for events.',
  },
  {
    href: '#catering',
    cls: 'mc-chops',
    img: smallchopsHandheld,
    alt: 'Small chops sample tray',
    objectPosition: 'center 25%',
    title: 'Small Chops',
    desc: 'Spring rolls, samosas & grilled bites for sharing.',
  },
  {
    href: '#gallery',
    cls: 'mc-drinks',
    img: drinksRefreshCans,
    alt: "Refresh by Estelle's Delight, bottled drinks",
    title: 'Drinks',
    desc: 'Fruity Zobo, Chapman & Refresh, made fresh.',
  },
]


export default function SignatureMenu() {
  return (
    <section id="menu" className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">On the menu</p>
          <h2>Made for every craving.</h2>
          <p>From our signature Chin-Chin to catering trays built for a crowd. Everything is fried, baked and bottled in small batches.</p>
        </Reveal>

        <div className="menu-grid">
          {cards.map((c) => (
            <Reveal as="a" key={c.cls} href={c.href} className={`menu-card ${c.cls}`}>
              <img src={c.img} alt={c.alt} style={c.objectPosition ? { objectPosition: c.objectPosition } : undefined} />
              <div className="mc-overlay"></div>
              <div className="mc-body">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                {c.meta && <span className="mc-meta">{c.meta}</span>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
