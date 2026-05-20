'use client'
import { Button } from '@heroui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

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

const events = [
  {
    title: "Football Night Tournament",
    date: "25 June 2026",
    location: "Dhaka Sports Arena",
    image: "/assets/event1.jpg"
  },
  {
    title: "Badminton Championship",
    date: "29 June 2026",
    location: "Elite Indoor Club",
    image: "/assets/event2.webp"
  },
  {
    title: "Swimming Competition",
    date: "2 July 2026",
    location: "City Aquatic Center",
    image: "/assets/event3.webp"
  }
]

const UpcomingEvents = () => {
  return (
    <div className="bg-[#f8fafc] py-16 px-5">

      <div className="container mx-auto">

        {/* heading */}
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
            Upcoming <span className="text-[#0EA5A4]">Events</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-500 max-w-xl mx-auto"
          >
            Join exciting sports events happening near you.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >

          {events.map((event, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >

              {/* image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-lg font-semibold mb-2">
                  {event.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <FaCalendarAlt className="text-[#0EA5A4]" />
                  {event.date}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <FaMapMarkerAlt className="text-[#0EA5A4]" />
                  {event.location}
                </div>

                <Button className="mt-4 w-full bg-[#0EA5A4] text-white py-2 rounded-lg font-semibold hover:bg-[#0B7C7B] transition duration-300">
                  Join Event
                </Button>

              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </div>
  )
}

export default UpcomingEvents