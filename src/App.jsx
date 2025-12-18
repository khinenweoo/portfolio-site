import Footer from "./components/footer"
import Hero from "./components/Hero"
import Navbar from "./components/Header"
import ProcessFlow from "./components/Processflow"


function App() {

  return (
    <div className="relative bg-[#101111]">
      <Navbar />
      <Hero />
      <ProcessFlow />
      <Footer />
    </div>
  )
}

export default App
