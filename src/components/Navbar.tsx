type NavbarProps = {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
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
      <button
          onClick={() => setDarkMode(!darkMode)}
          className="border border-gray-700 px-4 py-2 rounded-lg"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  )
}

export default Navbar