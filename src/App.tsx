import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import SocialProof from "./components/SocialProof";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RestaurantGallery from "./components/RestaurantGallery";
import FoodGallery from "./components/FoodGallery";

export default function App() {
  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <FoodGallery />
        <Services />
        <RestaurantGallery />
        <SocialProof />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
