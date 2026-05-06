import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full mt-20 py-[20px] md:py-[60px] lg:py-[80px] flex items-center justify-center min-h-screen bg-white">
      {/* ── Content ── */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Heading */}
          <h1 className="font-kalnia text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
            Chef Yum
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-rethink text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Building a food brand that blends passion, culture, and purpose.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pt-6"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-red-500 text-white rounded-full font-rethink font-500 hover:scale-105 transition-transform duration-300"
            >
              Contact Me
              <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Supporting image placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20"
        >
          <div className="rounded-3xl bg-gray-100 aspect-video flex items-center justify-center overflow-hidden">
            <img
              src="/hero2.gif"
              alt="Featured meal"
              className="w-full h-full object-cover"
             
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
