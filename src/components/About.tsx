import { motion } from 'framer-motion'
import { Flame, Globe, BookOpen } from 'lucide-react'

const MILESTONES = [
  {
    Icon: Flame,
    title: 'Le Cordon Bleu, Paris',
    detail: 'Classical culinary training — 2010',
  },
  {
    Icon: Globe,
    title: 'Global Residencies',
    detail: 'Lagos · London · New York · Dubai',
  },
  {
    Icon: BookOpen,
    title: 'Published Author',
    detail: '"Roots & Spice: Nigerian Fine Dining" — 2022',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">

      {/* ── Background glow ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gold-500/5 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ember-500/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* ══════════════════════
              Left — Portrait
          ══════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Portrait frame */}
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden ring-1 ring-white/[0.06]">
              {/*
                Replace this div with:
                <img
                  src="/images/chef-yum-portrait-4k.jpg"
                  alt="Chef Yum in her kitchen"
                  className="w-full h-full object-cover object-center"
                />
              */}
              <div className="w-full h-full bg-gradient-to-br from-charcoal-800 via-[#1e1208] to-[#2d1b0e] flex items-center justify-center relative">
                <div
                  className="absolute inset-0 opacity-[0.18]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, rgba(212,175,55,0.5) 1px, transparent 1px)',
                    backgroundSize: '22px 22px',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
                <div className="relative z-10 text-center select-none">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gold-500/30 to-ember-500/30 border border-gold-500/20 flex items-center justify-center mx-auto mb-3">
                    <span className="text-5xl">👩🏾‍🍳</span>
                  </div>
                  <p className="text-gold-400/40 text-xs">Professional Headshot</p>
                </div>
              </div>
            </div>

            {/* Floating stat chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -bottom-6 -right-4 sm:-right-8 glass-gold rounded-2xl p-5 shadow-2xl shadow-black/50"
            >
              <p className="font-display text-4xl font-bold text-gradient-gold leading-none">15+</p>
              <p className="text-zinc-400 text-sm mt-1.5">Years of Craft</p>
            </motion.div>

            {/* Corner accent lines */}
            <div
              className="absolute -top-5 -left-5 w-24 h-24 border-t-2 border-l-2 border-gold-500/25 rounded-tl-xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-5 -right-5 w-24 h-24 border-b-2 border-r-2 border-gold-500/25 rounded-br-xl pointer-events-none"
              aria-hidden="true"
            />
          </motion.div>

          {/* ══════════════════════
              Right — Biography
          ══════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-7"
          >
            <div>
              <p className="text-gold-500 text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                Her Story
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Born in Lagos,
                <br />
                <span className="text-gradient-gold">Refined</span> by the World
              </h2>
            </div>

            <div className="space-y-4 text-zinc-400 text-base leading-[1.8]">
              <p>
                Chef Yum grew up in the vibrant streets of Lagos, Nigeria, where every family
                gathering was orchestrated around fire, spice, and the intoxicating aroma of
                slow-cooked stews. Her grandmother's kitchen was her first — and most
                formative — classroom.
              </p>
              <p>
                After rigorous classical training at Le Cordon Bleu in Paris, she spent a decade
                honing her craft in New York, London, and Dubai, absorbing global techniques while
                remaining fiercely rooted in West African tradition.
              </p>
              <p>
                Today, she hosts intimate supper clubs, high-end private events, and sold-out
                culinary masterclasses — each one a love letter to the flavours that raised her,
                and a declaration that Nigerian cuisine deserves its seat at the world's finest
                tables.
              </p>
            </div>

            {/* Milestones */}
            <div className="grid gap-3 pt-1">
              {MILESTONES.map(({ Icon, title, detail }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.6, ease: 'easeOut' }}
                  className="flex items-center gap-4 p-4 glass rounded-xl group hover:bg-white/[0.045] transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl glass-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{title}</p>
                    <p className="text-zinc-500 text-xs mt-0.5">{detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
