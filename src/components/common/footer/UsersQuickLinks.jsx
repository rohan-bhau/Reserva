'use client'
import Link from 'next/link'
import { fadeUp } from './FooterBrand'
import { motion } from 'framer-motion'


const UsersQuickLinks = () => {
  return (
       <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className='font-semibold text-lg mb-4'>For Users</h2>
          <ul className='space-y-2 text-sm'>
            <li><Link href='/login' className='text-gray-300 hover:text-[#0EA5A4] transition'>Login</Link></li>
            <li><Link href='/register' className='text-gray-300 hover:text-[#0EA5A4] transition'>Register</Link></li>
            <li><Link href='/my-bookings' className='text-gray-300 hover:text-[#0EA5A4] transition'>My Bookings</Link></li>
            <li><Link href='#' className='text-gray-300 hover:text-[#0EA5A4] transition'>Help Center</Link></li>
            <li><Link href='#' className='text-gray-300 hover:text-[#0EA5A4] transition'>Terms & Conditions</Link></li>
          </ul>
        </motion.div>
  )
}

export default UsersQuickLinks
