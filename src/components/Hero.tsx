import { motion } from 'framer-motion'
import { ArrowRight, Star, Award, Users } from 'lucide-react'

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.35 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const slideRight = {
  hidden: { opacity: 0, x: 70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.05, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 },
  },
}

const STATS = [
  { Icon: Award, value: '12+', label: 'Awards Won' },
  { Icon: Users, value: '50K+', label: 'Events Hosted' },
  { Icon: Star, value: '4.9', label: 'Average Rating' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Ambient background glows ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-gold-500/7 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-ember-500/7 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-transparent to-charcoal-950 opacity-70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32 w-full pt-28 pb-16">
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-12 items-center">

          {/* ══════════════════════
              Left — Text Content
          ══════════════════════ */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-7 z-10"
          >
            {/* Eyebrow badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold text-gold-400 text-xs font-semibold uppercase tracking-[0.15em]">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse-slow" />
                Nigerian Culinary Artist
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl sm:text-6xl lg:text-[4.25rem] xl:text-7xl font-bold leading-[1.06] tracking-tight"
            >
              Experience the{' '}
              <span className="text-gradient-gold">Art of</span>
              <br />
              Nigerian{' '}
              <em className="not-italic text-gradient-ember">Cuisine</em>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="text-zinc-400 text-lg leading-relaxed max-w-[440px]"
            >
              Where ancestral recipes meet modern fine dining. Chef Yum transforms the bold,
              soulful flavours of West Africa into unforgettable gastronomic journeys.
            </motion.p>

            {/* CTA row */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-gradient-to-r from-gold-600 to-ember-500 text-white font-semibold text-base shadow-xl shadow-ember-600/25 hover:shadow-ember-500/40 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
              >
                Book an Experience
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass text-zinc-300 hover:text-white font-medium text-base hover:bg-white/[0.06] transition-all duration-300"
              >
                View Signature Menu
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-6 pt-5 border-t border-white/[0.07]"
            >
              {STATS.map(({ Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl glass-gold flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-none">{value}</p>
                    <p className="text-zinc-500 text-xs mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ══════════════════════
              Right — Hero Image
          ══════════════════════ */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            className="relative h-[460px] sm:h-[560px] lg:h-[680px]"
          >
            {/* Main image frame */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden ring-1 ring-white/[0.07]">
              {/*
                ┌─────────────────────────────────────────────────┐
                │  REPLACE THIS DIV with a real <img> tag:        │
                │  <img                                            │
                │    src="/images/chef-yum-hero-4k.jpg"           │
                │    alt="Chef Yum plating a signature dish"       │
                │    className="w-full h-full object-cover        │
                │               object-top"                       │
                │  />                                             │
                └─────────────────────────────────────────────────┘
              */}
              <div className="w-full h-full bg-gradient-to-br from-charcoal-800 via-[#2d1b0e] to-[#3d2010] flex items-center justify-center relative">
                {/* Decorative dot grid */}
                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, rgba(212,175,55,0.6) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                  }}
                />
                {/* Radial glow centre */}
                <div className="absolute inset-0 bg-gradient-radial from-ember-600/15 via-transparent to-transparent" />
                {/* Placeholder content */}
                <div className="relative z-10 text-center select-none">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-gold-500/25 to-ember-500/25 border border-gold-500/25 flex items-center justify-center mx-auto mb-4 shadow-2xl shadow-gold-500/10">
                    <span className="text-6xl">👩🏾‍🍳</span>
                  </div>
                  <p className="text-gold-400/50 text-sm font-medium">Replace with 4K Chef Photo</p>
                  <p className="text-zinc-600 text-xs mt-1">Recommended: 1600 × 2000 px minimum</p>
                </div>
              </div>
            </div>

            {/* Floating badge — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -top-5 -right-3 sm:-right-6 glass-gold rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl shadow-black/40"
            >
              <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5 text-gold-400 fill-gold-400" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Michelin Featured</p>
                <p className="text-gold-400/70 text-xs mt-0.5">2023 &amp; 2024</p>
              </div>
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
              className="absolute -bottom-5 -left-3 sm:-left-6 glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-2xl shadow-black/40"
            >
              <div className="w-10 h-10 rounded-xl bg-ember-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🍛</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">Jollof &amp; Beyond</p>
                <p className="text-zinc-400 text-xs mt-0.5">Nigerian Fine Dining</p>
              </div>
            </motion.div>

            {/* Corner accent rings */}
            <div
              className="absolute -inset-5 rounded-[2.5rem] border border-gold-500/[0.08] pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -inset-10 rounded-[3rem] border border-white/[0.03] pointer-events-none"
              aria-hidden="true"
            />
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-zinc-600 text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-zinc-700 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-gold-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
