'use client'
import { motion } from 'framer-motion';
import { container, fadeUp } from './Text';

const Stats = () => {
  return (
     <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white"
          >

            <motion.div
              variants={fadeUp}
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/10   hover:scale-105 hover:bg-white/20 transition-all duration-300"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0EA5A4]">500+</h2>
              <p className="text-xs text-gray-300 mt-1">Facilities</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/10 hover:scale-105 hover:bg-white/20 transition-all duration-300"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0EA5A4]">1K+</h2>
              <p className="text-xs text-gray-300 mt-1">Happy Players</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/10   hover:scale-105 hover:bg-white/20 transition-all duration-300"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0EA5A4]">2K+</h2>
              <p className="text-xs text-gray-300 mt-1">Bookings</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/10   hover:scale-105 hover:bg-white/20 transition-all duration-300"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0EA5A4]">4.8★</h2>
              <p className="text-xs text-gray-300 mt-1">Rating</p>
            </motion.div>

          </motion.div>
  )
}

export default Stats
