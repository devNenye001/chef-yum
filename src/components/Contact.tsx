import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-[20px] md:py-[80px] lg:py-[120px] bg-green-500"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="font-kalnia text-3xl md:text-4xl font-500 tracking-tight mb-4">
              Get in Touch
            </h2>
            <p className="font-rethink text-lg opacity-90">
              Ready to experience culinary excellence? Reach out today.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            {/* Email */}
            <motion.a
              href="mailto:yumdelivery01@gmail.com"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-3 font-rethink font-500 text-lg hover:opacity-90 transition-opacity"
            >
              <Mail className="w-6 h-6" />
              yumdelivery01@gmail.com
            </motion.a>

            {/* Social links */}
            <div className="flex gap-6 justify-center pt-4">
              <motion.a
                href="https://instagram.com/Yumdelivery01"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="font-rethink font-500 hover:opacity-80 transition-opacity"
              >
                Instagram
              </motion.a>
              <motion.a
                href="https://tiktok.com/@Yumdelivery01"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="font-rethink font-500 hover:opacity-80 transition-opacity"
              >
                TikTok
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
