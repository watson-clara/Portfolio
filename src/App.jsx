import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Substack from './components/Substack/Substack'
import ArtGallery from './components/ArtGallery/ArtGallery'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './styles/global.css'

function App() {
  useEffect(() => {
    // Add smooth scroll polyfill for Safari
    if (!('scrollBehavior' in document.documentElement.style)) {
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/scroll-behavior-polyfill@1.0.0/dist/scroll-behavior-polyfill.min.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="hero" className="section">
          <Hero />
        </section>
        <section id="education" className="section">
          <Education />
        </section>
        <section id="experience" className="section">
          <Experience />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="substack" className="section">
          <Substack />
        </section>
        <section id="art-gallery" className="section">
          <ArtGallery />
        </section>
      </main>
      <section id="contact" className="section">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App
