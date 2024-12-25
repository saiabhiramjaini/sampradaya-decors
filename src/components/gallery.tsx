'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations'

const galleryImages = [
  {
    src: '/placeholder.svg?height=600&width=800',
    title: 'Elegant Wedding Setup',
    category: 'Wedding'
  },
  {
    src: '/placeholder.svg?height=800&width=600',
    title: 'Birthday Celebration',
    category: 'Birthday'
  },
  {
    src: '/placeholder.svg?height=600&width=800',
    title: 'Corporate Event',
    category: 'Corporate'
  },
  {
    src: '/placeholder.svg?height=800&width=600',
    title: 'Festival Decoration',
    category: 'Festival'
  },
  {
    src: '/placeholder.svg?height=600&width=800',
    title: 'Baby Shower Setup',
    category: 'Baby Shower'
  },
  {
    src: '/placeholder.svg?height=800&width=600',
    title: 'Anniversary Celebration',
    category: 'Anniversary'
  }
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState('All')

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))]
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter)

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-amber-50 to-rose-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-script text-gray-800 mb-4"
          >
            Our Gallery
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Browse through our collection of beautifully decorated events
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all transform hover:scale-105
                  ${filter === category 
                    ? 'bg-rose-500 text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-rose-100'}`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
  key={filter} // Add this key to force React to re-render when the filter changes
  variants={staggerContainer}
  initial="initial"
  whileInView="animate"
  viewport={{ once: true }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
>
  {filteredImages.map((image, index) => (
    <motion.div
      key={index}
      variants={fadeInUp}
      whileHover={{ y: -10 }}
      className="relative group cursor-pointer"
      onClick={() => setSelectedImage(index)}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
        <img
          src={image.src}
          alt={image.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-lg font-semibold">{image.title}</h3>
            <p className="text-sm text-rose-200">{image.category}</p>
          </div>
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>


        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className="relative max-w-4xl w-full"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-rose-400 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <h3 className="text-xl font-semibold">{galleryImages[selectedImage].title}</h3>
                  <p className="text-rose-200">{galleryImages[selectedImage].category}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

