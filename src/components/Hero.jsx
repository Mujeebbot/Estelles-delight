import decoFrame from '../assets/images/deco-frame.webp'
import waveTexture from '../assets/images/wave-texture.webp'
import gradientGlow from '../assets/images/gradient-glow.webp'
import chinchinBlackBg from '../assets/images/chinchin-black-bg.webp'
import snackChinchin from '../assets/images/snack-chinchin-circle.webp'
import snackPuffpuff from '../assets/images/snack-puffpuff-circle.webp'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        '--hero-bg-img': `url(${decoFrame})`,
        '--wave-bg-img': `url(${waveTexture})`,
      }}
    >
      <div className="wrap hero-inner">
        <div className="hero-content">
          <span className="eyebrow-tag">Perth, Western Australia</span>
          <h1>A taste of home,<br />made to delight.</h1>
          <p className="hero-sub">
            Authentic West African snacks, crafted with flavour, care and a
            little something extra, from our kitchen in Perth to your table.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-solid-gold">Order Now</a>
            <a href="#menu" className="btn btn-ghost">Explore Our Menu</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow" style={{ '--glow-bg-img': `url(${gradientGlow})` }}></div>
          <div className="snack-float snack-1"><img src={snackChinchin} alt="" /></div>
          <div className="snack-float snack-2"><img src={snackPuffpuff} alt="" /></div>
          <div className="frame">
            <img src={chinchinBlackBg} alt="Estelle's Delight Crunchy Chin-Chin, three flavours" />
          </div>
        </div>
      </div>
    </section>
  )
}
