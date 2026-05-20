'use client'

import Link from "next/link"
import { fadeUp } from "./FooterBrand"
import { motion } from 'framer-motion'


const OwnersQuickLinks = () => {
  return (
    <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h2 className='font-semibold text-lg mb-4'>For Owners</h2>
              <ul className='space-y-2 text-sm'>
                <li><Link href='#' className='text-gray-300 hover:text-[#0EA5A4] transition'>Dashboard</Link></li>
                <li><Link href='#' className='text-gray-300 hover:text-[#0EA5A4] transition'>Add Facility</Link></li>
                <li><Link href='#' className='text-gray-300 hover:text-[#0EA5A4] transition'>Manage Facilities</Link></li>
                <li><Link href='#' className='text-gray-300 hover:text-[#0EA5A4] transition'>Support</Link></li>
              </ul>
            </motion.div>
  )
}

export default OwnersQuickLinks
