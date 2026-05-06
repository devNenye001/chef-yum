import { motion } from "framer-motion";
import {
  Utensils,
  Users,
  BookOpen,
  ShoppingBag,
  ClipboardList,
  PartyPopper,
} from "lucide-react";

const SERVICES = [
  {
    icon: Utensils,
    title: "Food Delivery",
    description:
      "Premium homemade meals prepared with passion and delivered fresh, hot, and on time.",
  },
  {
    icon: Users,
    title: "Restaurant Dining",
    description:
      "Enjoy freshly prepared meals in a clean, comfortable, and welcoming environment.",
  },
  {
    icon: PartyPopper,
    title: "Catering Services",
    description:
      "Full-service catering for weddings, birthdays, corporate events, and private gatherings.",
  },
  {
    icon: ShoppingBag,
    title: "Bulk & Daily Orders",
    description:
      "Reliable meal supply for offices, families, organizations, and recurring daily needs.",
  },
  {
    icon: ClipboardList,
    title: "Menu Customization",
    description:
      "Personalized meal plans tailored to your budget, taste, and dietary preferences.",
  },
  {
    icon: BookOpen,
    title: "Event Support",
    description:
      "Food planning and coordination to ensure smooth, stress-free event execution.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-[20px] md:py-[80px] lg:py-[120px] bg-[#FFFFFF]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-kalnia text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Yum Delivery Services
          </h2>

          <p className="font-rethink text-lg text-gray-600 max-w-2xl mx-auto">
            From everyday meals to luxury events, we deliver food experiences tailored to your lifestyle and needs.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#F3F4F6] rounded-[32px] p-6"
            >

              {/* ICON */}
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-[#F62905]" />
              </div>

              {/* TITLE */}
              <h3 className="font-kalnia text-xl font-medium mb-2">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="font-rethink text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}