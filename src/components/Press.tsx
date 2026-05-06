import { motion } from 'framer-motion'

const PUBLICATIONS = [
  { name: 'Food & Wine', abbr: 'F&W', subtitle: 'Magazine' },
  { name: 'Bon Appétit', abbr: 'BA', subtitle: 'Magazine' },
  { name: 'BBC Food', abbr: 'BBC', subtitle: 'Television' },
  { name: 'Eater London', abbr: 'EL', subtitle: 'Digital Media' },
  { name: 'The Guardian Cook', abbr: 'GDN', subtitle: 'Newspaper' },
  { name: 'Vogue Living', abbr: 'VL', subtitle: 'Magazine' },
]

const QUOTE = {
  text: '“Chef Yum has done something remarkable — she has made Nigerian cuisine feel both ancestral and radical at the same time.”',
  author: 'The Guardian Cook',
}

export default function Press() {
  return (
    <section id="press" className="relative py-24 overflow-hidden">

      {/* Subtle radial glow behind the section */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gold-500/4 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="border-t border-white/[0.07] pt-16">

          {/* ── Section label ── */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center text-zinc-500 text-xs font-semibold uppercase tracking-[0.22em] mb-12"
          >
            As Featured In
          </motion.p>

          {/* ── Publication logos ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            className="flex flex-wrap justify-center items-center gap-3 md:gap-4"
          >
            {PUBLICATIONS.map((pub, i) => (
              <motion.div
                key={pub.name}
                initial={{ opacity: 0, scale: 0.88, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: 'easeOut' }}
                whileHover={{ scale: 1.06, y: -3 }}
                className="group glass hover:glass-gold rounded-xl px-5 py-3.5 flex items-center gap-3 cursor-default transition-all duration-300"
              >
                {/* Placeholder logo block — replace with <img> when you have real assets */}
                <div className="w-11 h-11 rounded-lg bg-charcoal-800 border border-white/[0.06] group-hover:border-gold-500/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <span className="text-[11px] font-bold text-zinc-400 group-hover:text-gold-400 transition-colors duration-300 tracking-tight">
                    {pub.abbr}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">{pub.name}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{pub.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Pull quote ── */}
          <motion.blockquote
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-16 text-center max-w-2xl mx-auto"
          >
            {/* Decorative opening quote mark */}
            <span
              className="block font-display text-7xl text-gold-500/20 leading-none -mb-6 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <p className="font-display text-xl md:text-2xl italic text-zinc-300 leading-[1.65]">
              {QUOTE.text}
            </p>
            <footer className="mt-6">
              <cite className="not-italic inline-flex items-center gap-2.5 text-gold-500 text-sm font-semibold">
                <span className="block w-10 h-px bg-gold-500/40" aria-hidden="true" />
                {QUOTE.author}
                <span className="block w-10 h-px bg-gold-500/40" aria-hidden="true" />
              </cite>
            </footer>
          </motion.blockquote>

        </div>
      </div>
    </section>
  )
}
