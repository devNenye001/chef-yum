import { motion } from 'framer-motion'
import { Instagram, Twitter, Youtube, Mail, ChefHat, Heart } from 'lucide-react'

const SOCIAL_LINKS = [
  {
    Icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/chefyum',
  },
  {
    Icon: Twitter,
    label: 'X / Twitter',
    href: 'https://www.x.com/chefyum',
  },
  {
    Icon: Youtube,
    label: 'YouTube',
    href: 'https://www.youtube.com/@chefyum',
  },
]

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Press', href: '#press' },
  { label: 'Book a Table', href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="relative border-t border-white/[0.06] overflow-hidden">

      {/* ── Ambient glow ── */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[220px] bg-gold-500/5 rounded-full blur-[90px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32 pt-16 pb-10">
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* ── Brand column ── */}
          <div className="flex flex-col gap-5">
            <a href="#" className="flex items-center gap-2.5 w-fit" aria-label="Chef Yum home">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-gold-500 to-ember-500 flex items-center justify-center shadow-md shadow-gold-500/20">
                <ChefHat className="w-5 h-5 text-charcoal-950" strokeWidth={2.5} />
              </div>
              <span className="font-display text-xl font-semibold">
                Chef <span className="text-gradient-gold">Yum</span>
              </span>
            </a>

            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Elevating Nigerian cuisine to the world stage, one unforgettable dish at a time.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {SOCIAL_LINKS.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-9 h-9 rounded-xl glass border border-white/[0.06] hover:border-gold-500/25 flex items-center justify-center text-zinc-400 hover:text-gold-400 transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Quick links ── */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.18em] mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2.5 text-zinc-500 text-sm hover:text-gold-400 transition-colors duration-300"
                  >
                    <span className="block w-4 h-px bg-zinc-700 group-hover:bg-gold-500 group-hover:w-6 transition-all duration-300 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Booking CTA ── */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.18em] mb-6">
              Book an Experience
            </h4>
            <p className="text-zinc-500 text-sm leading-relaxed mb-5">
              Private dining, events, and masterclasses — reach out to start planning:
            </p>
            <motion.a
              href="mailto:bookings@chefyum.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-5 py-3.5 rounded-xl glass-gold text-gold-400 hover:text-gold-300 font-medium text-sm transition-colors duration-300 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gold-500/10 group-hover:bg-gold-500/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <Mail className="w-4 h-4" />
              </div>
              bookings@chefyum.com
            </motion.a>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-14 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-600 text-xs">
            &copy; {year} Chef Yum. All rights reserved.
          </p>
          <p className="text-zinc-600 text-xs flex items-center gap-1.5">
            Crafted with{' '}
            <Heart className="w-3 h-3 text-ember-500 fill-ember-500" aria-label="love" />{' '}
            in Lagos &amp; London
          </p>
        </div>

      </div>
    </footer>
  )
}
