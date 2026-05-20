function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 border-b border-gray-800">
      <h1 className="text-2xl font-bold">
        Jose.dev
      </h1>

      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <a href="#about" className="hover:text-gray-400 transition">
            About
          </a>
        </li>

        <li>
          <a href="#skills" className="hover:text-gray-400 transition">
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" className="hover:text-gray-400 transition">
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" className="hover:text-gray-400 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar