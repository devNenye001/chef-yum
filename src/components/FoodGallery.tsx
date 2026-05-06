import { motion } from "framer-motion";

const FOOD_IMAGES = [
  { id: 1, src: "/egusi.jpeg", alt: "Signature dish 1" },
  { id: 2, src: "/okra-soup.jpg", alt: "Signature dish 2" },
  { id: 3, src: "/oha.jpg", alt: "Signature dish 3" },
  { id: 4, src: "/plantain-egg.jpg", alt: "Signature dish 4" },
];

export default function FoodGallery() {
  return (
    <section id="gallery" className="py-[20px] md:py-[80px] lg:py-[120px] bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-kalnia text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Signature Meals
          </h2>
          <p className="font-rethink text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the flavors, quality, and creativity behind every dish we serve.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOOD_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-3xl overflow-hidden bg-gray-100 aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
