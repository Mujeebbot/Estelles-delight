import logo from '../assets/images/logo.webp'
import waveTexture from '../assets/images/wave-texture.webp'

export default function Footer() {
  return (
    <footer id="contact" style={{ '--wave-bg-img': `url(${waveTexture})` }}>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="Estelle's Delight" />
            <p>West African snacks and catering, handmade in Perth, Western Australia.</p>
          </div>

          <div className="footer-col">
            <h5>Explore</h5>
            <a href="#menu">Menu</a>
            <a href="#story">Our Story</a>
            <a href="#catering">Catering</a>
            <a href="#training">Training</a>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <a href="tel:+61426921991">+61 426 921 991</a>
            <a href="mailto:estelledelight@gmail.com">estelledelight@gmail.com</a>
            <p>Perth, Western Australia</p>
          </div>

          <div className="footer-col">
            <h5>Follow</h5>
            <a href="https://www.instagram.com/estelles_delight/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.facebook.com/estelles_delight" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.tiktok.com/@estelles_delight" target="_blank" rel="noreferrer">TikTok</a>
            <a href="https://wa.me/61426921991" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Estelle's Delight. Quality is our recipe.</span>
          <span>Perth, Western Australia</span>
        </div>
      </div>
    </footer>
  )
}
