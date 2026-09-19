import { useEffect, useState } from 'react'
import logo from '../assets/images/logo.webp'

const links = [
  { href: '#menu',     label: 'Menu',      id: 'menu'     },
  { href: '#story',    label: 'Our Story',  id: 'story'   },
  { href: '#catering', label: 'Catering',   id: 'catering' },
  { href: '#training', label: 'Training',   id: 'training' },
  { href: '#contact',  label: 'Contact',    id: 'contact'  },
]

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false)
  const [heroMode,  setHeroMode]  = useState(true)   // true = on the landing hero
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeId,  setActiveId]  = useState('')

  useEffect(() => {
    const updateNav = () => {
      const scrollY = window.scrollY

      // Scrolled state (compact nav)
      setScrolled(scrollY > 40)

      // Hero mode: transparent until we've scrolled past the hero section
      const heroEl = document.getElementById('hero')
      const heroBottom = heroEl ? heroEl.offsetTop + heroEl.offsetHeight : 600
      setHeroMode(scrollY < heroBottom - 80)

      // Active section: scroll-position based (works in both directions)
      const menuEl = document.getElementById('menu')
      if (!menuEl || scrollY < menuEl.offsetTop - 160) {
        setActiveId('')
        return
      }

      let current = ''
      for (const { id } of links) {
        const el = document.getElementById(id)
        if (el && scrollY >= el.offsetTop - 160) {
          current = id
        }
      }
      setActiveId(current)
    }

    updateNav()
    window.addEventListener('scroll', updateNav, { passive: true })

    // Close mobile menu on scroll
    const closeOnScroll = () => setMenuOpen(false)
    window.addEventListener('scroll', closeOnScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateNav)
      window.removeEventListener('scroll', closeOnScroll)
    }
  }, [])

  return (
    <nav id="nav" className={[
      scrolled  ? 'scrolled'  : '',
      heroMode  ? 'hero-mode' : '',
    ].join(' ').trim()}>
      <div className="nav-pill">

        {/* Logo */}
        <a href="#top" className="brand">
          <img src={logo} alt="Estelle's Delight logo" />
        </a>

        {/* Gold dot separator — hidden in hero mode */}
        <span className="nav-dot" aria-hidden="true" />

        {/* Segmented pill links */}
        <div className={`navlinks${menuOpen ? ' open' : ''}`} id="navlinks">
          {links.map((l) => (
            <a
              key={l.href}
              className={`navlink${activeId === l.id ? ' active' : ''}`}
              href={l.href}
              onClick={() => { setMenuOpen(false); setActiveId(l.id) }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="nav-cta">
          <a href="#contact" className="btn btn-solid-gold nav-order-btn">Order Now</a>
          <button
            id="menuToggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className={menuOpen ? 'open' : ''}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />
      )}
    </nav>
  )
}


