import { motion } from "framer-motion";
import { Instagram, Music } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="py-[20px] md:py-[80px] lg:py-[120px] bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-kalnia text-3xl md:text-4xl font-500 tracking-tight mb-6">
            Follow My Journey
          </h2>
          <p className="font-rethink text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Connect with Chef Yum on social media for daily culinary inspiration
            and behind-the-scenes content.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* Instagram */}
            <motion.a
              href="https://instagram.com/Yumdelivery01"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full font-rethink font-500 transition-all"
            >
              <Instagram className="w-5 h-5" />
              @Yumdelivery01
            </motion.a>

            {/* TikTok */}
            <motion.a
              href="https://tiktok.com/@Yumdelivery01"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-rethink font-500 transition-all"
            >
              <Music className="w-5 h-5" />
              @Yumdelivery01
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
