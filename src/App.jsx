import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Cpu, Feather, Fingerprint, Github, Globe, Grid, Layers, Menu, Shield, Zap } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import GradientButton from './components/GradientButton'
import FeatureCard from './components/FeatureCard'
import BrowserMockup from './components/BrowserMockup'
import NewsletterSignup from './components/NewsletterSignup'
import Section from './components/Section'

function useScrollFade(delay = 0) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return {
    ref,
    style: {
      opacity: isInView ? 1 : 0,
      transform: isInView ? 'none' : 'translateY(12px)',
      transition: `all 700ms cubic-bezier(.2,.6,.2,1) ${delay}ms`
    }
  }
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/50 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="text-white font-semibold tracking-tight">Portrait</a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a href="#concept" className="hover:text-white transition">Concept</a>
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#benefits" className="hover:text-white transition">Benefits</a>
        </nav>
        <GradientButton as="a" href="#cta" className="hidden md:inline-flex">Coming soon</GradientButton>
        <button className="md:hidden h-9 w-9 grid place-items-center rounded-lg bg-white/5 ring-1 ring-white/10"><Menu className="h-5 w-5 text-white" /></button>
      </div>
    </header>
  )
}

function Hero() {
  const { ref, style } = useScrollFade(50)
  return (
    <div id="top" className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[800px] w-[1200px] opacity-60 blur-3xl" style={{background:'radial-gradient(50%_60%_at_50%_0%,rgba(99,102,241,.25),transparent 60%), radial-gradient(40%_40%_at_20%_60%,rgba(168,85,247,.18),transparent 60%), radial-gradient(40%_40%_at_80%_60%,rgba(34,211,238,.18),transparent 60%)'}} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.045]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div ref={ref} style={style}>
            <h1 className="text-white text-5xl md:text-6xl font-semibold tracking-tight leading-tight">Finally, a place on the internet that feels like you.</h1>
            <p className="mt-5 text-zinc-400 text-lg leading-relaxed">Own your identity. Shape your presence. Host your space with people-powered protocols. Portrait is decentralized identity with creative freedom and uncompromising ownership.</p>
            <div className="mt-8 flex items-center gap-4">
              <GradientButton as="a" href="#cta">Join the waitlist</GradientButton>
              <a href="#how" className="text-zinc-400 hover:text-white inline-flex items-center gap-2 text-sm transition"><ArrowRight className="h-4 w-4" /> Learn more</a>
            </div>
          </div>
          <div className="relative h-[420px] md:h-[520px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden ring-1 ring-white/10 bg-black/20">
              <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Concept() {
  const items = [
    { icon: Fingerprint, title: 'Identity, truly yours', desc: 'Backed by cryptography and open standards. Your keys, your identity.' },
    { icon: Layers, title: 'Frames, not templates', desc: 'Compose your space with flexible frames. Drag, drop, and make it yours.' },
    { icon: Globe, title: 'People-powered hosting', desc: 'Publish over protocols. No lock-in, no gatekeepers, just the network.' },
  ]
  return (
    <Section id="concept">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div key={i} className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-8">
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
              <it.icon className="h-4 w-4 text-indigo-300" />
            </div>
            <h3 className="text-white text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function HowItWorks() {
  const steps = [
    { icon: Feather, title: 'Create your Portrait', desc: 'Start with frames. Arrange content like blocks that click.' },
    { icon: Zap, title: 'Download the app', desc: 'Take your identity with you. Seamless sync, zero friction.' },
    { icon: Shield, title: 'Start hosting', desc: 'Own your presence. Publish via protocols, not platforms.' },
  ]
  return (
    <Section id="how">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <BrowserMockup>
            <div className="aspect-[16/10] bg-gradient-to-b from-indigo-500/10 to-transparent p-6">
              <div className="grid grid-cols-12 gap-3 h-full">
                <div className="col-span-3 space-y-3">
                  <div className="h-10 rounded-lg bg-white/5 ring-1 ring-white/10" />
                  <div className="h-10 rounded-lg bg-white/5 ring-1 ring-white/10" />
                  <div className="h-10 rounded-lg bg-white/5 ring-1 ring-white/10" />
                  <div className="h-10 rounded-lg bg-white/5 ring-1 ring-white/10" />
                </div>
                <div className="col-span-9 grid grid-rows-6 gap-3">
                  <div className="row-span-3 rounded-xl bg-white/5 ring-1 ring-white/10" />
                  <div className="row-span-3 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/5 ring-1 ring-white/10" />
                    <div className="rounded-xl bg-white/5 ring-1 ring-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </BrowserMockup>
        </div>
        <div>
          <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">Build, publish, and own it.</h2>
          <p className="mt-4 text-zinc-400">Portrait brings creative tools to decentralized identity. Make something that feels like you, then publish it to the network—portable, lightweight, and truly yours.</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {steps.map((s, i) => (
              <FeatureCard key={i} icon={s.icon} title={s.title} description={s.desc} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

function FeatureShowcase() {
  return (
    <Section id="features">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">Create with frames</h2>
          <p className="mt-4 text-zinc-400">Drag-and-drop blocks for text, media, links, and embeds. Precision control with a minimalist editor that stays out of the way.</p>
          <ul className="mt-6 space-y-3 text-sm text-zinc-400">
            <li className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-indigo-300" /> Drag, drop, and resize</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-indigo-300" /> Multiple content types</li>
            <li className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-indigo-300" /> Keyboard-first controls</li>
          </ul>
        </div>
        <div className="order-1 lg:order-2">
          <BrowserMockup>
            <div className="aspect-[16/10] p-6 grid grid-cols-12 gap-3">
              <div className="col-span-8 rounded-xl bg-white/5 ring-1 ring-white/10" />
              <div className="col-span-4 space-y-3">
                <div className="h-10 rounded-lg bg-white/5 ring-1 ring-white/10" />
                <div className="h-10 rounded-lg bg-white/5 ring-1 ring-white/10" />
                <div className="h-10 rounded-lg bg-white/5 ring-1 ring-white/10" />
              </div>
              <div className="col-span-12 grid grid-cols-3 gap-3">
                <div className="h-24 rounded-xl bg-white/5 ring-1 ring-white/10" />
                <div className="h-24 rounded-xl bg-white/5 ring-1 ring-white/10" />
                <div className="h-24 rounded-xl bg-white/5 ring-1 ring-white/10" />
              </div>
            </div>
          </BrowserMockup>
        </div>
      </div>
    </Section>
  )
}

function TechnicalBenefits() {
  const cards = [
    { icon: Shield, title: 'Unbreakable, truly yours', description: 'Cryptographic keys and open standards ensure your identity is owned by you, not a platform.', detail: 'Ethereum sign-in. Self-custodied keys. Portable identity anchored to protocols.' },
    { icon: Cpu, title: 'Lightweight, by design', description: 'Every byte counts. Portrait is intentionally minimal to stay fast on any device.', detail: 'Optimized rendering pipeline. Lazy-loaded assets. 60fps-first animations.' },
    { icon: Grid, title: 'Built on protocols, not platforms', description: 'Publish over decentralized protocols for portability and permanence.', detail: 'Content-addressed storage. Open APIs. Community-powered hosting.' },
  ]
  return (
    <Section id="benefits">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <FeatureCard key={i} icon={c.icon} title={c.title} description={c.description} detail={c.detail} />
        ))}
      </div>
    </Section>
  )
}

function CTA() {
  return (
    <Section id="cta" className="pt-10">
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-10 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">Join the network early</h2>
        <p className="mt-3 text-zinc-400">Be the first to create, publish, and own your Portrait. Were rolling out access gradually.</p>
        <div className="mt-8">
          <NewsletterSignup />
        </div>
        <div className="mt-6 flex items-center justify-center gap-4 text-zinc-500 text-sm">
          <a className="hover:text-white transition inline-flex items-center gap-2" href="#"><Github className="h-4 w-4" /> GitHub</a>
          <a className="hover:text-white transition" href="#">Docs</a>
          <a className="hover:text-white transition" href="#">Community</a>
        </div>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-2 sm:grid-cols-4 gap-10 text-sm">
        <div>
          <h4 className="text-white font-medium mb-4">Company</h4>
          <ul className="space-y-2 text-zinc-400">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Press</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Resources</h4>
          <ul className="space-y-2 text-zinc-400">
            <li><a href="#" className="hover:text-white transition">Docs</a></li>
            <li><a href="#" className="hover:text-white transition">Guides</a></li>
            <li><a href="#" className="hover:text-white transition">API</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Community</h4>
          <ul className="space-y-2 text-zinc-400">
            <li><a href="#" className="hover:text-white transition">Discord</a></li>
            <li><a href="#" className="hover:text-white transition">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-medium mb-4">Legal</h4>
          <ul className="space-y-2 text-zinc-400">
            <li><a href="#" className="hover:text-white transition">Privacy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms</a></li>
            <li><a href="#" className="hover:text-white transition">Security</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-zinc-500">© {new Date().getFullYear()} Portrait. All rights reserved.</div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    const handler = (e) => {
      const target = e.target
      if (target.matches('a[href^="#"]')) {
        e.preventDefault()
        const el = document.querySelector(target.getAttribute('href'))
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Concept />
        <HowItWorks />
        <FeatureShowcase />
        <TechnicalBenefits />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
