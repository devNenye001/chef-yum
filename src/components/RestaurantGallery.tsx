import { motion } from "framer-motion";

const RESTAURANT_IMAGES = [
  { id: 1, src: "/gallery1.webp", alt: "Restaurant space 1" },
  { id: 2, src: "/gallery2.webp", alt: "Restaurant space 2" },
  { id: 3, src: "/gallery13.webp", alt: "Restaurant space 3" },
  { id: 4, src: "/gallery12.webp", alt: "Restaurant space 4" },
];

export default function RestaurantGallery() {
  return (
    <section className="py-[20px] md:py-[80px] lg:py-[120px] bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-kalnia text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Our Space
          </h2>
          <p className="font-rethink text-lg text-gray-600 max-w-2xl mx-auto">
            A welcoming environment where great food meets comfort and experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESTAURANT_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-3xl overflow-hidden bg-gray-200 aspect-square"
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
