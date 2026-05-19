'use client'
import { Button } from '@heroui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const Text = () => {
  return (
              <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-xl text-white"
          >
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Book Your <br />
              <span className="text-[#0EA5A4]">Perfect Play</span> Anytime, Anywhere
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-sm sm:text-base text-gray-200"
            >
              Discover and book top sports facilities easily.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Button className="mt-6 px-6 py-3 rounded-lg font-semibold bg-[#0EA5A4] text-white hover:bg-[#0B7C7B] transition">
                <Link href="/all-facilities" className="flex items-center gap-2">
                  Explore Facilities <FaArrowRight />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
  )
}

export default Text
