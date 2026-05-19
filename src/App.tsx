import About from "./sections/About"
import Contact from "./sections/Contact"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

function App() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center gap-16 py-16">
      <h1 className="text-5xl font-bold">
        Jose Bustamante
      </h1>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

export default App