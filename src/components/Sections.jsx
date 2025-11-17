import { motion } from 'framer-motion'

export function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-2"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-slate-400 mb-10 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  )
}

export function Card({ children, className = '' }) {
  return (
    <div
      className={`card bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  )
}
