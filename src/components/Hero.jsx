import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const roles = [
  'Full-Stack Developer',
  'Cloud Solutions Architect',
  'SEO Analyst',
  'Videographer',
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index % roles.length]
    const typeSpeed = 80
    const deleteSpeed = 40
    const pause = 2500

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    const id = setTimeout(() => {
      if (deleting) {
        setText((t) => t.slice(0, -1))
        if (text.length === 0) {
          setDeleting(false)
          setIndex((i) => (i + 1) % roles.length)
        }
      } else {
        setText(current.slice(0, text.length + 1))
      }
    }, deleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(id)
  }, [text, deleting, index])

  return (
    <section className="relative pt-32 pb-16 overflow-hidden" id="home">
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 opacity-60" style={{
          background: 'radial-gradient(1200px 800px at 20% 20%, rgba(139,92,246,0.2), rgba(15,23,42,0))',
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(1000px 600px at 80% 30%, rgba(6,182,212,0.18), rgba(15,23,42,0))',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-cyan-300 font-medium"
          >
            Hey, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl sm:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300"
          >
            Gautam T
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-2xl sm:text-3xl text-slate-300"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500">
              {text}
            </span>
            <span className="border-r-2 border-cyan-300 ml-1 animate-pulse" style={{ animationDuration: '700ms' }} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-slate-400 max-w-xl"
          >
            I build secure, scalable and modern digital products — blending full‑stack engineering with cloud, analytics and creativity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 shadow-[0_12px_40px_rgba(139,92,246,0.4)] hover:translate-y-[-3px] active:scale-95 transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl font-semibold text-cyan-300 border-2 border-transparent bg-white/5 backdrop-blur-xl hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-violet-600/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition"
            >
              Get In Touch
            </a>
          </motion.div>

          <div className="mt-10 flex gap-8 text-slate-300">
            {[
              { label: 'Projects', value: '10+' },
              { label: 'Years', value: '1+' },
              { label: 'Certs', value: '10+' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
                className="group"
              >
                <div className="text-3xl font-extrabold text-white/90 group-hover:text-white transition">{s.value}</div>
                <div className="text-sm text-slate-400">{s.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 animate-bounce text-slate-500">↓</div>
        </div>

        <div className="relative h-[460px] md:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
