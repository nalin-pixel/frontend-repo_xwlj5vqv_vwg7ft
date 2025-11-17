import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const total = 100
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + 3
        if (next >= total) {
          clearInterval(id)
          setTimeout(() => onDone?.(), 300)
          return 100
        }
        return next
      })
    }, 40)
    return () => clearInterval(id)
  }, [onDone])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6 } }}
        className="fixed inset-0 z-[1200] flex items-center justify-center"
        style={{
          background:
            'radial-gradient(1200px 800px at 50% 50%, rgba(99,102,241,0.15), rgba(15,23,42,1))',
        }}
      >
        <div className="w-[min(90vw,520px)] text-center">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="mb-8"
          >
            <div className="text-4xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300">
              Gautam T
            </div>
            <div className="mt-2 text-slate-300">Loading portfolio…</div>
          </motion.div>

          <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden border border-white/10 backdrop-blur-xl">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400"
              style={{ width: `${progress}%` }}
              animate={{ boxShadow: '0 0 20px rgba(6,182,212,0.5)' }}
              transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
            />
          </div>
          <div className="mt-3 text-slate-400 text-sm">{progress}%</div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
