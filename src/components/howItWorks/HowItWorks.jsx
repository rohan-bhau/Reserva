'use client'
import React from 'react'
import { FaCalendarAlt, FaSearch } from 'react-icons/fa'
import { RiSendPlaneFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
}

const HowItWorks = () => {
  return (
    <div className='container mx-auto py-16 px-5'>

      {/* heading and text */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={fadeUp}
          className='text-3xl sm:text-4xl font-bold text-center mb-3'
        >
          How It Works
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className='text-center text-gray-500 mb-10'
        >
          Get started in 3 simple steps
        </motion.p>
      </motion.div>

      {/* steps */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
      >

        {/* step 1 */}
        <motion.div
          variants={fadeUp}
          className='flex flex-col items-center text-center p-6 rounded-xl  hover:shadow-lg transition duration-300 bg-white'
        >
          <div className='bg-[#ebf7f5] p-5 rounded-full mb-4'>
            <FaSearch className='text-[#0EA5A4] text-4xl' />
          </div>
          <h3 className='text-lg font-semibold mb-2'>1. Search</h3>
          <p className='text-sm text-gray-500'>
            Find the perfect facility that fits your needs.
          </p>
        </motion.div>

        {/* step 2 */}
        <motion.div
          variants={fadeUp}
          className='flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition duration-300 bg-white'
        >
          <div className='bg-[#ebf7f5] p-5 rounded-full mb-4'>
            <FaCalendarAlt className='text-[#0EA5A4] text-4xl' />
          </div>
          <h3 className='text-lg font-semibold mb-2'>2. Book</h3>
          <p className='text-sm text-gray-500'>
            Choose date and time and confirm your booking.
          </p>
        </motion.div>

        {/* step 3 */}
        <motion.div
          variants={fadeUp}
          className='flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition duration-300 bg-white'
        >
          <div className='bg-[#ebf7f5] p-5 rounded-full mb-4'>
            <RiSendPlaneFill className='text-[#0EA5A4] text-4xl' />
          </div>
          <h3 className='text-lg font-semibold mb-2'>3. Enjoy</h3>
          <p className='text-sm text-gray-500'>
            Enjoy your activity without any hassle.
          </p>
        </motion.div>

      </motion.div>

    </div>
  )
}

export default HowItWorks