import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useMotionTemplate,
} from 'framer-motion'
import { Flame, Clock, ChevronRight } from 'lucide-react'

interface Dish {
  id: number
  name: string
  origin: string
  description: string
  price: string
  spiceLevel: number
  prepTime: string
  tags: string[]
  accentColor: string
  bgFrom: string
  bgTo: string
  emoji: string
}

const DISHES: Dish[] = [
  {
    id: 1,
    name: 'Signature Jollof Rice',
    origin: 'West African Heritage',
    description:
      'Party-style smoked jollof with heritage basmati, slow-roasted tomatoes, and twelve aromatic spices. Served with suya-spiced grilled prawns and crispy plantain.',
    price: 'From £85 / head',
    spiceLevel: 2,
    prepTime: '3 hrs',
    tags: ['Signature', 'Crowd Favourite'],
    accentColor: '#E8702A',
    bgFrom: '#2d1008',
    bgTo: '#1a0a04',
    emoji: '🍛',
  },
  {
    id: 2,
    name: 'Elevated Egusi Soup',
    origin: 'Yoruba Tradition',
    description:
      'Hand-ground melon seeds slow-cooked with bitter leaf, smoked seafood, and aged palm oil. Finished with white truffle oil and edible 24-carat gold leaf.',
    price: 'From £70 / head',
    spiceLevel: 3,
    prepTime: '4 hrs',
    tags: ["Chef's Pick", 'Traditional'],
    accentColor: '#D4AF37',
    bgFrom: '#2a1f04',
    bgTo: '#1a1402',
    emoji: '🥘',
  },
  {
    id: 3,
    name: 'Pepper Soup Crudo',
    origin: 'Delta State',
    description:
      'Chilled catfish and prawn pepper soup reinterpreted as a delicate crudo with uziza oil, coconut–scotch bonnet emulsion, and crispy shallots.',
    price: 'From £60 / head',
    spiceLevel: 4,
    prepTime: '1.5 hrs',
    tags: ['Avant-Garde', 'Fine Dining'],
    accentColor: '#C0392B',
    bgFrom: '#2a0808',
    bgTo: '#1a0404',
    emoji: '🌶️',
  },
  {
    id: 4,
    name: 'Puff Puff Mignardises',
    origin: 'Pan-Nigerian',
    description:
      'Cloud-light puff puff filled with salted caramel and cardamom cream, dusted with hibiscus sugar, and served warm alongside zobo sorbet and aged balsamic.',
    price: 'From £35 / head',
    spiceLevel: 0,
    prepTime: '2 hrs',
    tags: ['Dessert', 'Sweet'],
    accentColor: '#D4AF37',
    bgFrom: '#2a1f04',
    bgTo: '#1a1402',
    emoji: '🍩',
  },
]

/* ─────────────────────────────────────────
   3-D Tilt Card
───────────────────────────────────────── */
function TiltCard({ dish, index }: { dish: Dish; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const springCfg = { stiffness: 180, damping: 22 }
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], ['13deg', '-13deg']), springCfg)
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], ['-13deg', '13deg']), springCfg)

  /* Spotlight glare that follows the cursor */
  const glareX = useTransform(rawX, [-0.5, 0.5], ['10%', '90%'])
  const glareY = useTransform(rawY, [-0.5, 0.5], ['10%', '90%'])
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.07) 0%, transparent 65%)`

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    rawX.set((e.clientX - left) / width - 0.5)
    rawY.set((e.clientY - top) / height - 0.5)
  }

  const handleMouseLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.85, delay: index * 0.11, ease: [0.25, 0.46, 0.45, 0.94] }}
      /* perspective wrapper */
      style={{ perspective: '1200px' }}
      className="h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.04 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ scale: { duration: 0.25 } }}
        className="relative h-full rounded-2xl glass overflow-hidden cursor-default group flex flex-col"
      >
        {/* Spotlight glare overlay */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: glare }}
          aria-hidden="true"
        />

        {/* ── Card image area ── */}
        <div
          className="relative h-52 flex-shrink-0 flex items-center justify-center overflow-hidden"
          style={{
            background: `radial-gradient(ellipse at 50% 60%, ${dish.accentColor}22 0%, ${dish.bgFrom} 55%, ${dish.bgTo} 100%)`,
            borderBottom: `1px solid ${dish.accentColor}22`,
          }}
        >
          {/* Dot grid texture */}
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage: `radial-gradient(circle, ${dish.accentColor}80 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
            aria-hidden="true"
          />
          {/* Emoji hero */}
          <span className="text-7xl relative z-10 drop-shadow-2xl select-none">{dish.emoji}</span>

          {/* Tag pills */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            {dish.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                style={{
                  background: `${dish.accentColor}28`,
                  color: dish.accentColor,
                  border: `1px solid ${dish.accentColor}45`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Card body ── */}
        <div className="p-6 flex flex-col gap-3 flex-1">
          <div>
            <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-widest mb-1">
              {dish.origin}
            </p>
            <h3 className="font-display text-xl font-bold text-white leading-tight">{dish.name}</h3>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3 flex-1">
            {dish.description}
          </p>

          {/* Metadata */}
          <div className="flex items-center justify-between pt-1">
            {dish.spiceLevel > 0 ? (
              <div className="flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-ember-500" aria-hidden="true" />
                <div className="flex gap-0.5" aria-label={`Spice level ${dish.spiceLevel} of 4`}>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-4 h-1.5 rounded-full transition-colors duration-200"
                      style={{
                        background:
                          i < dish.spiceLevel ? dish.accentColor : 'rgba(255,255,255,0.1)',
                      }}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <span className="text-zinc-600 text-xs italic">No spice</span>
            )}
            <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              {dish.prepTime}
            </div>
          </div>

          {/* Price + Enquire */}
          <div className="flex items-center justify-between pt-3 mt-auto border-t border-white/[0.06]">
            <span className="font-bold text-[15px]" style={{ color: dish.accentColor }}>
              {dish.price}
            </span>
            <a
              href="#contact"
              className="flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white transition-colors group/link"
              aria-label={`Enquire about ${dish.name}`}
            >
              Enquire
              <ChevronRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   Section
───────────────────────────────────────── */
export default function Menu() {
  return (
    <section id="menu" className="relative py-28 overflow-hidden">

      {/* ── Background glows ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 w-[550px] h-[550px] bg-ember-500/6 rounded-full blur-[130px]" />
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gold-500/5 rounded-full blur-[110px] translate-x-1/3 -translate-y-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 xl:px-32">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-14"
        >
          <p className="text-gold-500 text-xs font-semibold uppercase tracking-[0.18em] mb-3">
            The Menu
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Signature <span className="text-gradient-gold">Dishes</span>
          </h2>
          <p className="text-zinc-400 mt-4 max-w-md mx-auto text-base leading-relaxed">
            Each plate is a chapter of Nigeria's culinary story, meticulously crafted for the modern
            palate.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DISHES.map((dish, i) => (
            <TiltCard key={dish.id} dish={dish} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border border-gold-500/20 hover:border-gold-500/40 text-zinc-300 hover:text-white font-medium hover:bg-white/[0.04] transition-all duration-300"
          >
            Request a Bespoke Menu
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}
