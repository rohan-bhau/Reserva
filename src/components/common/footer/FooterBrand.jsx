'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
}

const FooterBrand = () => {
  return (
    <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className='w-44 mb-4'>
            <Image src={'/assets/logo-footer.png'} width={300} height={200} alt="footer-logo" />
          </div>

          <p className='text-sm text-gray-300 leading-relaxed'>
            SportNest is your trusted platform to discover and book top sports facilities anytime, anywhere. Simple, fast, and reliable.
          </p>

          <div className='flex gap-4 mt-5'>
            <FaFacebook className='text-lg hover:text-[#0EA5A4] transition cursor-pointer' />
            <FaInstagram className='text-lg hover:text-[#0EA5A4] transition cursor-pointer' />
            <FaTwitter className='text-lg hover:text-[#0EA5A4] transition cursor-pointer' />
          </div>
        </motion.div>
  )
}

export default FooterBrand
