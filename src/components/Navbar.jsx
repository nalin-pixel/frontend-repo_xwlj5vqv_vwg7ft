import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top: y, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <div className={`fixed top-0 inset-x-0 z-[1100] transition-all duration-300 ${
      scrolled ? 'backdrop-blur-xl bg-slate-900/80 shadow-lg' : 'bg-transparent'
    } border-b border-white/10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="text-white font-bold text-xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-300">
            Gautam T
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <button
              key={n.id}
              onClick={() => handleClick(n.id)}
              className="text-slate-300 hover:text-white transition-colors relative group"
            >
              {n.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all" />
            </button>
          ))}
          <a
            href="#resume"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 text-white font-semibold shadow-[0_12px_40px_rgba(139,92,246,0.4)] hover:scale-[1.03] transition"
          >
            Resume
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen((o) => !o)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 bg-slate-900/80 backdrop-blur-xl md:hidden"
          >
            <div className="absolute right-0 top-0 h-full w-80 bg-slate-900/90 border-l border-white/10 p-8">
              <div className="flex justify-between items-center mb-8">
                <div className="text-white font-bold text-xl">Menu</div>
                <button onClick={() => setOpen(false)} className="text-white"><X /></button>
              </div>
              <div className="flex flex-col gap-4">
                {navItems.map((n, i) => (
                  <motion.button
                    key={n.id}
                    onClick={() => handleClick(n.id)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-left text-slate-200 py-2 px-3 rounded-lg hover:bg-white/5"
                  >
                    {n.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
