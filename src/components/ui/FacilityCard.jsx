'use client'
import { Button, Skeleton } from '@heroui/react'
import { motion } from 'framer-motion'
import { div } from 'motion/react-client'
import Image from 'next/image'
import Link from 'next/link'
import { FaClock, FaMapMarkerAlt, FaUsers } from 'react-icons/fa'

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

const sportColors = {
  Football: "bg-green-100 text-green-700",
  Cricket: "bg-yellow-100 text-yellow-700",
  Badminton: "bg-blue-100 text-blue-700",
  Tennis: "bg-purple-100 text-purple-700",
  Basketball: "bg-orange-100 text-orange-700",
  Volleyball: "bg-pink-100 text-pink-700"
}

const FacilityCard = ({ facility }) => {

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div
        variants={fadeUp}
        whileHover={{ y: -6 }}
        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
      >
    {/* <div> */}

        {/* IMAGE */}
        <div className="relative h-52 overflow-hidden">

          <Image
            src={facility.image}
            alt={facility.name}
            fill
            className="object-cover transition duration-500 hover:scale-110"
          />

          {/*  BADGES */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-center">

            {/* Sport Type */}
            <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-md
              ${sportColors[facility.sportType] || 'bg-gray-100 text-gray-700'}`}>
              {facility.sportType}
            </span>

            {/* Price */}
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-[#0EA5A4] shadow-sm">
              ৳ {facility.price}/hr
            </span>

          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5 space-y-3">

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
            {facility.name}
          </h3>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <FaMapMarkerAlt className="text-[#0EA5A4]" />
            <span className="line-clamp-1">{facility.location}</span>
          </div>

          {/* Capacity */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <FaUsers className="text-[#0EA5A4]" />
            <span>Up to {facility.capacity} Players</span>
          </div>

          {/* available slot */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <FaClock className="text-[#0EA5A4]" />
            <span>{facility.timeSlots.length} slots available</span>
          </div>

          {/* button */}
                  <Link href={`/all-facilities/${facility._id}`}>
                  <Button
            className="mt-3 w-full bg-[#0EA5A4] text-white py-2 rounded-lg font-semibold hover:bg-[#0B7C7B] transition duration-300"
          >
            Book Now
          </Button></Link>

        </div>

      {/* </div> */}
      </motion.div>
    </motion.div >
  )
}

export default FacilityCard