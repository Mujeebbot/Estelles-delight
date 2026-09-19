import { AnimatePresence, motion } from 'framer-motion'

export default function Lightbox({ src, onClose }) {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          id="lightbox"
          onClick={(e) => { if (e.target.id === 'lightbox') onClose() }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <span className="lb-close" onClick={onClose}>Close ✕</span>
          <img src={src} alt="" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
