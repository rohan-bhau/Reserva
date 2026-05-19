'use client'
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaShieldHalved } from 'react-icons/fa6';
import { LuDrum } from 'react-icons/lu';
import { container, fadeUp } from './Text';
import { BiSupport } from 'react-icons/bi';

const Features = () => {
  return (
    <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white"
          >
            <motion.div variants={fadeUp}>
              <LuDrum className="text-3xl mb-2" />
              <h2 className="text-sm font-semibold">Wide Range</h2>
              <p className="text-xs text-gray-300">All sports</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <FaCalendarAlt className="text-3xl mb-2" />
              <h2 className="text-sm font-semibold">Easy Booking</h2>
              <p className="text-xs text-gray-300">Fast & simple</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <FaShieldHalved className="text-3xl mb-2" />
              <h2 className="text-sm font-semibold">Secure</h2>
              <p className="text-xs text-gray-300">Trusted system</p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <BiSupport className="text-3xl mb-2" />
              <h2 className="text-sm font-semibold">Support</h2>
              <p className="text-xs text-gray-300">24/7 help</p>
            </motion.div>
          </motion.div>
  )
}

export default Features
