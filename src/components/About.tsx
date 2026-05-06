import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-[20px] md:py-[80px] lg:py-[120px] bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Headshot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-[60px] bg-gray-100 aspect-[3/4] flex items-center justify-center overflow-hidden">
              <img
                src="/chef-yum.jpeg"
                alt="Chef Nsikan Happiness Dickson"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h2 className="font-kalnia text-3xl md:text-4xl font-medium tracking-tight mb-3">
                Nsikan Happiness Dickson
              </h2>
              <p className="font-rethink text-xl text-red-500 font-medium">
                CEO of Yum Delivery
              </p>
            </div>

            <div className="space-y-4 font-rethink text-gray-700 leading-relaxed">
              <p>
                Chef Yum is a celebrated culinary artist specialising in
                elevated Nigerian cuisine. With over a decade of experience in
                fine dining, she transforms traditional West African recipes
                into world-class gastronomic experiences.
              </p>

              <p>
                Her journey began in Lagos and has taken her to prestigious
                kitchens across London, New York, and Dubai. She is passionate
                about mentoring young chefs and making Nigerian cuisine
                accessible to the world stage.
              </p>

              <p>
                When she's not creating in the kitchen, Chef Yum is dedicated to
                empowering young girls through culinary education and
                entrepreneurship.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
