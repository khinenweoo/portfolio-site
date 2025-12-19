import Hero from "./components/Hero"
import Navbar from "./components/Header"
import ProcessFlow from "./components/ProcessFlow"
import Projects from "./components/ProjectsSection"
import TestimonialSection from "./components/TestimonialSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import TechStack from "./components/TechStack"


function App() {

  return (
    <div className="relative bg-[#101111]">
      <Navbar />
      <Hero />
      <TechStack />
      <ProcessFlow />
      <Projects />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
