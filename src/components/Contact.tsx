function Contact() {
  return (
    <section
      id="contact"
      className="w-full max-w-4xl py-20 px-6 text-center"
    >
      <h2 className="text-4xl font-bold mb-6">
        Let's Build Something Great
      </h2>

      <p className="text-gray-400 mb-8">
        Interested in AI integrations, modern web development,
        or automation systems? Let's connect.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <a
          href="mailto:josephrbo1997@gmail.com"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:opacity-80 transition"
        >
          Send Email
        </a>

        <a
          href="https://github.com/Joserbo"
          target="_blank"
          className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-900 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  )
}

export default Contact