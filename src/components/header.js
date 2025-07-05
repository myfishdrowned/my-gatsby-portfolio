import * as React from "react"
import { Link } from "gatsby"

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Experience", to: "/experience" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
]

const Header = () => (
  <header className="bg-gray-900 border-b border-gray-800">
    <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
      <Link to="/" className="text-2xl font-bold text-indigo-400 tracking-tight">Mahi</Link>
      <ul className="flex gap-6">
        {navLinks.map(link => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="text-gray-200 hover:text-indigo-400 font-medium transition"
              activeClassName="text-indigo-400 underline"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

export default Header
