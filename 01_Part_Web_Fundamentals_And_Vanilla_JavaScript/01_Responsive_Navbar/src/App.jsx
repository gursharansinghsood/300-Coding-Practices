import { useState } from 'react'
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
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <nav className="bg-blue-100 shadow-md flex justify-between items-center sm:pr-6 pr-2">

        <div className="tracking-wide select-none font-bold text-xl lg:text-3xl sm:py-4 py-3 sm:pr-10 pr-5 pl-5 bg-blue-500 text-white rounded-r-xl">
          Website Logo
        </div>

        <div className="text-sm sm:text-lg lg:text-xl font-medium flex gap-2 sm:gap-5 lg:gap-10 items-center">

          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="md:block hidden hover:text-blue-600 hover:underline underline-offset-4 decoration-2 hover:-translate-y-1 transition-all duration-300"
            >
              {label}
            </a>
          ))}

          <a
            href="#"
            className="bg-blue-500 text-white py-1 px-3 rounded-xl hover:bg-blue-600 transition-colors duration-300"
          >
            Get Started
          </a>

          <button
            aria-label="Toggle Menu"
            className="md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(prev => !prev)}
          >
            <MdMenu size={30} />
          </button>

        </div>
      </nav>

      <div
        className={`md:hidden fixed inset-0 z-50 bg-blue-500 flex flex-col transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center py-3 px-5 font-bold text-2xl text-white select-none">
          <span>Website Logo</span>
          <button aria-label="Close Menu" onClick={closeMenu}>
            <MdClose size={30} />
          </button>
        </div>

        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={label}
            href={href}
            onClick={closeMenu}
            className="py-3 pl-10 text-xl font-bold text-white hover:bg-blue-400 transition-colors duration-300"
          >
            {label}
          </a>
        ))}

      </div>
    </>
  )
}

export default App