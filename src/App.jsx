import { useState } from 'react'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import { Section, Card } from './components/Sections'
import { Shield, Code2, Smartphone, Cloud, BarChart3, Video, Camera, Layers, ExternalLink, Github } from 'lucide-react'

function ExpertiseGrid() {
  const items = [
    { icon: Code2, title: 'Software Development', points: ['Full‑stack apps', 'APIs & dashboards', 'Performance first'] },
    { icon: Shield, title: 'Cybersecurity', points: ['App hardening', 'Auth & RBAC', 'Best practices'] },
    { icon: Smartphone, title: 'Mobile Development', points: ['Responsive UX', 'PWA ready', 'Cross‑platform'] },
    { icon: Cloud, title: 'Cloud Solutions', points: ['GCP & Docker', 'CI/CD pipelines', 'Scalable infra'] },
    { icon: BarChart3, title: 'SEO & Analytics', points: ['Core Web Vitals', 'Tracking & funnels', 'Content strategy'] },
    { icon: Layers, title: 'SaaS Applications', points: ['Multi‑tenant', 'Billing ready', 'Admin consoles'] },
    { icon: Video, title: 'Video Editing', points: ['Story‑first', 'Color & sound', 'Short/long form'] },
    { icon: Camera, title: 'Photography', points: ['Product shoots', 'Events', 'Retouching'] },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((it, idx) => (
        <Card key={it.title} className="group hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)] hover:border-cyan-400/50">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition">
              <it.icon className="w-6 h-6 text-slate-300 group-hover:text-cyan-300 transition-transform group-hover:rotate-180" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg mb-2">{it.title}</h4>
              <ul className="text-slate-400 text-sm space-y-1">
                {it.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

function ProjectCard({ featured = false, title, desc, tags = [] }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl ${featured ? 'md:col-span-2' : ''}`}>
      <div className="aspect-[16/9] bg-gradient-to-tr from-slate-800 to-slate-700" />
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-t from-slate-900/90 to-transparent" />
      <div className="p-6">
        <div className="inline-flex items-center text-xs text-cyan-300/80 border border-cyan-400/30 px-2 py-1 rounded-full mb-3">Featured</div>
        <h3 className="text-white text-2xl font-semibold">{title}</h3>
        <p className="text-slate-400 mt-2">{desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-slate-300">{t}</span>
          ))}
        </div>
        <div className="mt-5 flex gap-3">
          <a className="inline-flex items-center gap-1 text-cyan-300 hover:text-white transition" href="#"><ExternalLink size={16}/> Live</a>
          <a className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition" href="#"><Github size={16}/> Code</a>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100">
      {loading && <Loader onDone={() => setLoading(false)} />}
      <ScrollProgress />
      <Navbar />

      <Hero />

      <Section id="about" title="My Expertise" subtitle="Specialized in creating secure, scalable and modern digital solutions.">
        <ExpertiseGrid />
      </Section>

      <Section id="projects" title="Featured Projects" subtitle="Some of my recent work showcasing different technologies and solutions.">
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard featured title="City Pulse Vision" desc="Computer vision platform for urban insights with dashboards and analytics." tags={["AI/ML", "FastAPI", "React"]} />
          <ProjectCard title="CrowdSafe AI" desc="Crowd density analysis and alerting for public safety." tags={["AI/ML", "Edge", "GCP"]} />
          <ProjectCard title="CineSphere" desc="Movie discovery and recommendation web app." tags={["Web", "Next.js", "Tailwind"]} />
        </div>
      </Section>

      <Section id="services" title="Professional Services" subtitle="From secure web applications to cloud architecture and analytics.">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            'Web Development', 'Cloud Solutions', 'SEO & Analytics', 'Cybersecurity',
            'Mobile Development', 'SaaS Applications', 'Video Editing', 'Photography',
          ].map((s) => (
            <Card key={s} className="hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
              <div className="flex items-center justify-between">
                <h4 className="text-white font-semibold text-xl">{s}</h4>
                <button className="text-cyan-300 hover:text-white transition">View Details ↓</button>
              </div>
              <p className="text-slate-400 mt-2">Engagement-ready with case studies and clear process steps.</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Get in Touch" subtitle="Let’s work together. I’m currently accepting new projects.">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <form className="space-y-4">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input className="mt-1 w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-transparent focus:ring-2 focus:ring-cyan-400/60 transition" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input className="mt-1 w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-transparent focus:ring-2 focus:ring-cyan-400/60 transition" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Project Type</label>
                <select className="mt-1 w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-transparent focus:ring-2 focus:ring-violet-500/60 transition">
                  <option>Web</option>
                  <option>Mobile</option>
                  <option>Cloud</option>
                  <option>AI/ML</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-300">Message</label>
                <textarea rows="4" className="mt-1 w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-transparent focus:ring-2 focus:ring-cyan-400/60 transition" placeholder="Tell me about your project..." />
              </div>
              <button className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 shadow-[0_12px_40px_rgba(139,92,246,0.4)] hover:translate-y-[-3px] active:scale-95 transition-all">Send Message</button>
            </form>
          </Card>
          <div className="space-y-4">
            <Card>
              <div className="text-slate-300">📧 gautam@example.com</div>
              <div className="text-slate-300">📍 Bangalore, India</div>
              <div className="text-emerald-400">✅ Currently accepting new projects</div>
            </Card>
            <Card>
              <div className="text-white font-semibold mb-2">FAQ</div>
              <ul className="text-slate-400 space-y-2">
                <li>• What services do you offer?</li>
                <li>• How long does a project take?</li>
                <li>• Do you provide maintenance?</li>
                <li>• What is your development process?</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <footer className="mt-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-slate-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <div className="text-white font-semibold">GAUTAM T</div>
              <div>Full‑Stack Developer</div>
            </div>
            <div className="flex gap-6">
              <a className="hover:text-white" href="#about">About</a>
              <a className="hover:text-white" href="#projects">Projects</a>
              <a className="hover:text-white" href="#services">Services</a>
              <a className="hover:text-white" href="#contact">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            <div>© 2025 Gautam T. All rights reserved.</div>
            <a href="#home" className="hover:text-white">↑ Back to Top</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
