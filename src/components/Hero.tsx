type HeroProps = {
  darkMode: boolean
}

function Hero({ darkMode }: HeroProps) {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <p className="text-gray-400 uppercase tracking-widest mb-4">
        Full Stack Developer • AI Systems
      </p>

      <h1 className={
        darkMode
          ? "text-gray-400 text-5xl md:text-7xl font-bold max-w-4xl leading-tight mb-6"
          : "text-gray-600 text-5xl md:text-7xl font-bold max-w-4xl leading-tight mb-6"
      }>
        Building intelligent web experiences with AI
      </h1>

      <p className="text-gray-400 max-w-2xl text-lg mb-8">
        Full Stack Developer specialized in AI-powered systems,
        automation, APIs, and modern web applications.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-900 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default Hero