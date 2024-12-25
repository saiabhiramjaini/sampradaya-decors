'use client'

import { fadeInUp, staggerContainer } from '@/lib/animations'
import { motion } from 'framer-motion'
import { Phone, Mail, Instagram } from 'lucide-react'

export default function ContactUs() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-script text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-600">Let's create something beautiful together</p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-rose-500" />
                <div>
                  <h3 className="font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 81251 45821</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-rose-500" />
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">contact@sampradayadecors.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Instagram className="w-6 h-6 text-rose-500" />
                <div>
                  <h3 className="font-semibold text-gray-800">Instagram</h3>
                  <a 
                    href="https://www.instagram.com/sampradayadecors/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-rose-500 hover:underline"
                  >
                    @sampradayadecors
                  </a>
                </div>
              </div>
            </div>

            <form 
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();

                // Extract values from form fields
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

                // Format the message
                const encodedMessage = encodeURIComponent(
                  `Hello, this is ${name} (${email}).\n\n${message}`
                );

                // WhatsApp API link
                const whatsappURL = `https://wa.me/918125145821?text=${encodedMessage}`;
                
                // Open WhatsApp in a new tab
                window.open(whatsappURL, "_blank");
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-rose-500 text-white px-6 py-3 rounded-lg hover:bg-rose-600 transition-colors"
                type="submit"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
