import { motion } from "framer-motion";
import { Instagram, Music, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-kalnia text-2xl font-medium mb-3">
              Chef Yum
            </h3>
            <p className="font-rethink text-gray-600 text-sm leading-relaxed">
              Delivering authentic Nigerian cuisine with passion and excellence.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-rethink font-500 text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 font-rethink text-sm text-gray-600">
              <li>
                <a
                  href="#about"
                  className="hover:text-red-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-red-500 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-red-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-rethink font-500 text-gray-900 mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/Yumdelivery01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@Yumdelivery01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              >
                <Music className="w-5 h-5" />
              </a>
              <a
                href="mailto:yumdelivery01@gmail.com"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 text-center font-rethink text-sm text-gray-600">
          <p>&copy; {year} Chef Yum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
