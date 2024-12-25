'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations'
import { Heart, PartyPopperIcon as Party, Baby, Cake, Users, Music } from 'lucide-react'

const events = [
  {
    title: 'Weddings',
    icon: Heart,
    description: 'Create your dream wedding with our elegant decorations'
  },
  {
    title: 'Birthday Parties',
    icon: Cake,
    description: 'Make your birthday celebration unforgettable'
  },
  {
    title: 'Corporate Events',
    icon: Users,
    description: 'Professional decor for your business events'
  },
  {
    title: 'Baby Showers',
    icon: Baby,
    description: 'Beautiful setups for your special moments'
  },
  {
    title: 'Festival Celebrations',
    icon: Party,
    description: 'Traditional and modern decor for festivals'
  },
  {
    title: 'Entertainment Events',
    icon: Music,
    description: 'Creative themes for entertainment events'
  }
]

export default function Events() {
  return (
    <section id="events" className="py-20 bg-white">
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
            Events We Cover
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            From intimate gatherings to grand celebrations, we create perfect atmospheres for every occasion
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-amber-500 rounded-xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white p-6 rounded-xl shadow-lg border border-rose-100">
                <div className="bg-gradient-to-br from-rose-100 to-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <event.icon className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

