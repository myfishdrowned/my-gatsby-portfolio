/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-900 text-white flex flex-col">
    <Header />
    <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">{children}</main>
    <footer className="text-center text-gray-500 py-6 border-t border-gray-800 text-sm">
      © {new Date().getFullYear()} &middot; Built with <a href="https://www.gatsbyjs.com" className="text-indigo-400 hover:underline">Gatsby</a>
    </footer>
  </div>
)

export default Layout
