'use client'
import { motion } from 'framer-motion'
import { fadeUp } from "./FooterBrand"
import Link from 'next/link'

const QuickLinks = () => {
  return (
     <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className='font-semibold text-lg mb-4'>Quick Links</h2>
          <ul className='space-y-2 text-sm'>
            <li><Link href='/' className='text-gray-300 hover:text-[#0EA5A4] transition'>Home</Link></li>
            <li><Link href='/all-facilities' className='text-gray-300 hover:text-[#0EA5A4] transition'>Browse Facilities</Link></li>
            <li><Link href='/#' className='text-gray-300 hover:text-[#0EA5A4] transition'>How It Works</Link></li>
            <li><Link href='/#faq' className='text-gray-300 hover:text-[#0EA5A4] transition'>FAQ's</Link></li>
            <li><Link href='#' className='text-gray-300 hover:text-[#0EA5A4] transition'>Contact Us</Link></li>
          </ul>
        </motion.div>
  )
}

export default QuickLinks
