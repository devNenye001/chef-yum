import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Press from './components/Press'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-charcoal-950 text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Menu />
        <Press />
      </main>
      <Footer />
    </div>
  )
}
