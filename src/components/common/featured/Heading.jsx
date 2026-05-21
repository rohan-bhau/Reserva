'use client'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
}

const Heading = () => {
  return (
               <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold mb-3"
          >
            Featured <span className="text-[#0EA5A4]">Facilities</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-500 max-w-xl mx-auto"
          >
            <Link
        href={'/all-facilities'}
        className='inline-flex items-center gap-2 text-gray-600 mb-6 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-[#0EA5A4] group'
      >
        <span className='font-medium'>See All Facilities</span>
        <FaArrowRight  className='transition-transform duration-300 group-hover:translate-1' />
      </Link>
          </motion.p>
          </motion.div>
          
  )
}

export default Heading
