import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import waveTexture from '../assets/images/wave-texture.webp'
import gradientGlow from '../assets/images/gradient-glow.webp'
import { flavours } from '../data/flavours.js'

export default function Flavours() {
  const [activeKey, setActiveKey] = useState(flavours[0].key)
  const active = flavours.find((f) => f.key === activeKey)

  return (
    <section
      id="flavours"
      className="section"
      style={{ '--wave-bg-img': `url(${waveTexture})` }}
    >
      <div className="bg-blob bg-blob-1"></div>
      <div className="bg-blob bg-blob-2"></div>
      <div className="bg-blob bg-blob-3"></div>

      <div className="wrap">
        <Reveal className="section-head">
          <p className="kicker">Crunchy Chin-Chin</p>
          <h2>30 ways to find your favourite.</h2>
          <p>Four families of flavour, each one mixed, cut and fried in-house. Pick a category to see what's inside.</p>
        </Reveal>

        <div className="flavour-grid">
          <Reveal className="flavour-tabs">
            {flavours.map((f) => (
              <div
                key={f.key}
                className={`flavour-tab${f.key === activeKey ? ' active' : ''}`}
                onClick={() => setActiveKey(f.key)}
              >
                <h3>{f.name}</h3>
                <span className="ft-count">{f.count}</span>
                <div className="ft-list">{f.items.join(' · ')}</div>
              </div>
            ))}
            <div style={{ marginTop: 36, fontSize: 14, color: 'rgba(251,245,234,0.6)' }}>
              Small bag (100g): $10 &nbsp;·&nbsp; Big tub: $60
            </div>
          </Reveal>

          <Reveal className="flavour-visual" style={{ '--glow-bg-img': `url(${gradientGlow})` }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/4.5', minHeight: 320 }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.key}
                  src={active.image}
                  alt={active.alt}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.2, 0.7, 0.3, 1] }}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom' }}
                />
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
