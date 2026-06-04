import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"


import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"

import Contact from "./components/Contact"

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <main 
    /*
      * The className is conditionally set based on the darkMode state. 
      * If darkMode is true, the background will be black and text will be white. 
      * If darkMode is false, the background will be white and text will be black. 
      * The transition-colors and duration-300 classes are used to add a smooth 
      * transition effect when toggling between dark and light modes.
    */
      className={
        darkMode
          ? "bg-black text-white min-h-screen transition-colors duration-300"
          : "bg-white text-black min-h-screen transition-colors duration-300"
      }
    >
      
      <Navbar 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero 
        darkMode={darkMode}
      />

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