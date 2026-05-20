'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa'

const faqData = [
  {
    question: "How do I book a sports facility?",
    answer: "Simply browse available facilities, choose your preferred date and time, and confirm your booking in just a few clicks."
  },
  {
    question: "Do I need an account to make a booking?",
    answer: "Yes, you need to create an account to book a facility and manage your bookings."
  },
  {
    question: "Can I cancel my booking?",
    answer: "Yes, you can cancel your booking from the 'My Bookings' section anytime."
  },
  {
    question: "Are payments secure?",
    answer: "Absolutely. We ensure secure transactions and protect your data with industry-standard security measures."
  },
  {
    question: "Can I add my own facility?",
    answer: "Yes! You can add and manage your own facilities from the dashboard."
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div id='faq' className="bg-[#f8fafc] py-16 px-5">
      
      <div className="max-w-4xl mx-auto">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Frequently Asked <span className="text-[#0EA5A4]">Questions</span>
          </h2>
          <p className="text-gray-500">
            Everything you need to know about booking and using SportNest.
          </p>
        </motion.div>

        {/* FAQ items */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm"
            >

              {/* question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-semibold text-gray-800">
                  {item.question}
                </span>

                {activeIndex === index ? (
                  <FaMinus className="text-[#0EA5A4]" />
                ) : (
                  <FaPlus className="text-gray-400" />
                )}
              </button>

              {/* answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-sm text-gray-500"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default FAQ