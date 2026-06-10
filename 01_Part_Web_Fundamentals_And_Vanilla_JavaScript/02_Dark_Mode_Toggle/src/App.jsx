import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { MdClose, MdMenu } from 'react-icons/md'

const NAV_LINKS = [
  { href: "#", label: "Home" },
  { href: "#", label: "Service" },
  { href: "#", label: "Portfolio" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Contact" },
]

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "light")

  const closeMenu = () => setIsMenuOpen(false)
  const toggleTheme = () => setTheme(prev => prev === "light" ? "dark" : "light")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  const isDark = theme === "dark"

  return (
    <>
      {/* ── Navbar ── */}
      <nav className="bg-surface border-b border-accent/30 flex justify-between items-center">

        <div className="tracking-wide select-none font-bold text-md sm:text-xl lg:text-3xl sm:py-4 py-3 sm:pr-10 pr-5 pl-5 bg-primary text-white rounded-r-xl">
          Website Logo
        </div>

        <div className="text-sm sm:text-lg lg:text-xl font-medium flex gap-2 sm:gap-5 lg:gap-10 items-center pr-5">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="md:block hidden text-text hover:text-primary hover:underline underline-offset-4 decoration-2 hover:-translate-y-1 transition-all duration-300"
            >
              {label}
            </a>
          ))}

          <a
            href="#"
            className="bg-primary text-white py-1 px-3 rounded-xl hover:bg-secondary transition-colors duration-300"
          >
            Get Started
          </a>

          <button
            aria-label="Toggle Menu"
            className="md:hidden cursor-pointer text-text hover:text-primary transition-colors duration-300"
            onClick={() => setIsMenuOpen(prev => !prev)}
          >
            <MdMenu size={30} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <div className={`md:hidden fixed inset-0 z-50 bg-background flex flex-col transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        <div className="flex justify-between items-center py-3 px-5 font-bold text-2xl text-text select-none border-b border-accent">
          <span>Website Logo</span>
          <button aria-label="Close Menu" className="cursor-pointer text-text hover:text-primary transition-colors duration-300" onClick={closeMenu}>
            <MdClose size={30} />
          </button>
        </div>

        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={label}
            href={href}
            onClick={closeMenu}
            className="py-3 pl-10 text-xl font-bold text-text hover:bg-accent/20 hover:text-primary transition-colors duration-300"
          >
            {label}
          </a>
        ))}
      </div>

      {/* ── Theme Toggle ── */}
      <button
        aria-label="Toggle Theme"
        onClick={toggleTheme}
        className={`fixed bottom-5 right-5 backdrop-blur-md bg-text/10 p-2 rounded-full cursor-pointer hover:scale-125 transition-all duration-200 ease-in-out text-2xl ${isDark ? 'text-yellow-500' : 'text-gray-600'}`}
      >
        {isDark ? <FaSun /> : <FaMoon />}
      </button>
    </>
  )
}

export default App