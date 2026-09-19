import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import SignatureMenu from './components/SignatureMenu.jsx'
import Flavours from './components/Flavours.jsx'
import Quality from './components/Quality.jsx'
import Story from './components/Story.jsx'
import Catering from './components/Catering.jsx'
import Training from './components/Training.jsx'
import Social from './components/Social.jsx'
import Gallery from './components/Gallery.jsx'

import { CinematicFooter } from './components/ui/motion-footer.jsx'
import Lightbox from './components/Lightbox.jsx'

export default function App() {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  return (
    <>
      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />

      <Nav />

      <section id="top" style={{ height: 0 }}></section>

      <Hero />
      <Intro />
      <SignatureMenu />
      <Flavours />
      <Quality />
      <Story />
      <Catering onImageClick={setLightboxSrc} />
      <Training />
      <Social onImageClick={setLightboxSrc} />
      <Gallery onImageClick={setLightboxSrc} />
      <CinematicFooter />
    </>
  )
}
