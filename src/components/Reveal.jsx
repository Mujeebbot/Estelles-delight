import { motion } from 'framer-motion'

/**
 * Fade-up reveal wrapper, replaces the old IntersectionObserver + .reveal
 * class approach with Framer Motion's whileInView.
 */
export default function Reveal({ children, className = '', style, as = 'div', ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.2, 0.7, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
