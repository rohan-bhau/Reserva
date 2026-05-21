'use client'
import { Button } from '@heroui/react'
import Image from 'next/image'
import { CiLocationOn } from 'react-icons/ci'
import { FaUsers, FaEdit, FaTrashAlt } from 'react-icons/fa'

const ManageFacilitiesCard = ({ b }) => {

  const {
    name,
    sportType,
    location,
    price,
    capacity,
    image
  } = b

  const sportColors = {
    Football: "bg-green-100 text-green-700",
    Cricket: "bg-yellow-100 text-yellow-700",
    Badminton: "bg-blue-100 text-blue-700",
    Tennis: "bg-purple-100 text-purple-700",
    Basketball: "bg-orange-100 text-orange-700",
    Volleyball: "bg-pink-100 text-pink-700"
  }

  return (
    <div className='bg-white border rounded-2xl p-4 md:p-5 flex flex-col md:flex-row gap-4 md:gap-5 shadow-sm hover:shadow-md transition duration-300 mb-5'>

      {/* image */}
      <div className='relative w-full md:w-[160px] h-[180px] md:h-[120px] rounded-xl overflow-hidden flex-shrink-0'>
        <Image
          src={image}
          alt={name}
          fill
          className='object-cover'
        />

        <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded-full
          ${sportColors[sportType] || 'bg-gray-100 text-gray-700'}`}>
          {sportType}
        </span>
      </div>

      <div className='flex-1 flex flex-col md:flex-row md:items-center md:justify-between'>


        <div className='flex flex-col gap-2'>

          <h2 className='font-semibold text-base md:text-lg text-gray-800'>
            {name}
          </h2>

          <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500'>

            <p className='flex items-center gap-2'>
              <CiLocationOn className='text-[#0EA5A4]' />
              {location}
            </p>

            <p className='flex items-center gap-2'>
              <FaUsers className='text-[#0EA5A4]' />
              {capacity} Players
            </p>

            <p className='text-[#0EA5A4] font-bold whitespace-nowrap'>
              ৳ {price}/hr
            </p>

          </div>
        </div>

        {/*  BUTTONS */}
        <div className='flex flex-col justify-between gap-3 mt-4 md:mt-0'>

          <Button
            size='sm'
            className='bg-[#0EA5A4] text-white rounded-lg hover:bg-[#0B7C7B]'
          >
            <FaEdit /> Edit
          </Button>

          <Button
            size='sm'
            className='text-red-500 border-none hover:bg-red-50 rounded-lg'
            variant='outline'
          >
            <FaTrashAlt /> Delete
          </Button>

        </div>

      </div>
    </div>
  )
}

export default ManageFacilitiesCard