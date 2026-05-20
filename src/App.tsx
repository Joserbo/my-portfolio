import Navbar from "./components/Navbar"
import Hero from "./components/Hero"


import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"

import Contact from "./components/Contact"

function App() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <Hero />

      <div className="flex flex-col items-center gap-24 px-6">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  )
}

export default App