'use client'

import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah M.",
    event: "Wedding Decoration",
    comment: "Absolutely stunning decoration! They transformed our venue into a magical space.",
    rating: 5
  },
  {
    name: "Raj K.",
    event: "Corporate Event",
    comment: "Professional service with attention to detail. Highly recommended!",
    rating: 5
  },
  {
    name: "Priya S.",
    event: "Birthday Party",
    comment: "Creative themes and perfect execution. Made our day special!",
    rating: 5
  }
]

export default function CustomerFeedback() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-amber-50">
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
            What Our Customers Say
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We take pride in making your events memorable
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInUp}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.comment}</p>
              <div className="font-semibold text-gray-800">{testimonial.name}</div>
              <div className="text-sm text-rose-500">{testimonial.event}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

