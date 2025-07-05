import * as React from "react"
import { motion } from "framer-motion"

const HomePage = () => (
  <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
    <motion.h1
      className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      Mahi
    </motion.h1>
    <motion.p
      className="text-xl md:text-2xl text-gray-300 mb-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      IAM Engineer & SailPoint Developer
    </motion.p>
    <motion.div
      className="w-32 h-32 rounded-full bg-gray-800 flex items-center justify-center mb-8 border-4 border-gray-700"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <span className="text-gray-500">Your Photo</span>
    </motion.div>
    <motion.a
      href="/experience"
      className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-lg font-semibold transition"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.6 }}
    >
      View Experience
    </motion.a>
  </main>
)

export default HomePage
