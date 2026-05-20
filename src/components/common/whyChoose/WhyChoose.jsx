'use client'
import { motion } from 'framer-motion'
import { FaLayerGroup, FaCalendarCheck, FaShieldAlt, FaTags, FaUsers } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'

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

const data = [
  {
    icon: <FaLayerGroup />,
    title: "Wide Variety",
    desc: "Choose from a wide range of sports facilities."
  },
  {
    icon: <FaCalendarCheck />,
    title: "Easy Booking",
    desc: "Book your slot in just a few simple steps."
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Payment",
    desc: "Safe and secure payment options available."
  },
  {
    icon: <FaTags />,
    title: "Best Price",
    desc: "Get the best deals for your bookings."
  },
  {
    icon: <FaUsers />,
    title: "Trusted Platform",
    desc: "Trusted by thousands of happy users."
  },
  {
    icon: <BiSupport />,
    title: "24/7 Support",
    desc: "Our team is always here to help you."
  }
]

const WhyChoose = () => {
  return (
    <div className="bg-[#f8fafc] border-y">

      <div className="container mx-auto py-16 px-5">

        {/* heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-bold text-center mb-3"
          >
            Why Choose <span className="text-[#0EA5A4]">Reserva?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-center text-gray-500 mb-12 max-w-xl mx-auto"
          >
            We make sports facility booking simple, secure, and reliable for everyone.
          </motion.p>
        </motion.div>

        {/* cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {data.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-[#ebf7f5] p-4 rounded-full w-fit mb-4 text-[#0EA5A4] text-2xl">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}

export default WhyChoose