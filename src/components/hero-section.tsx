"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Image from "next/image";
import logo from "../../public/logo.png"


export default function HeroSection() {
  return (
    <section className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-amber-50 via-rose-50 to-amber-100">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={fadeInUp} className="text-center md:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-600 mb-4"
            >
              Theme Event Decorations
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-script text-gray-800 mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="block"
              >
                Creating Magical
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="block bg-gradient-to-r from-rose-500 to-amber-500 text-transparent bg-clip-text"
              >
                Moments
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="text-lg md:text-xl text-gray-600 mb-8"
            >
              We bring smiles to your lips and beautiful memories to your heart on your special day
            </motion.p>
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.3 }}
  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
>
  <motion.a
    href="https://wa.me/918125145821"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-rose-500 text-white px-8 py-3 rounded-full hover:bg-rose-600 transition-colors shadow-lg hover:shadow-xl text-center"
  >
    Book Consultation
  </motion.a>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white text-rose-500 px-8 py-3 rounded-full hover:bg-rose-50 transition-colors shadow-lg hover:shadow-xl"
  >
    View Gallery
  </motion.button>
</motion.div>

          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="relative h-[400px] md:h-[600px]"
          >
            <motion.div
              initial={{ rotate: 10, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute inset-0 rounded-2xl shadow-2xl flex items-center justify-center p-8"
            >
              <Image
                src={logo}
                alt="Sampradaya Decors Logo"
                className="w-full h-auto rounded-2xl object-contain"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl"
            >
              <div className="text-rose-500 font-semibold">500+</div>
              <div className="text-sm text-gray-600">Events Decorated</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

