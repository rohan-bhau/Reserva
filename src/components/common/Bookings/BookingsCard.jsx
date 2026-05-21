'use client'
import { Button, Chip } from '@heroui/react'
import Image from 'next/image'
import { CiLocationOn } from 'react-icons/ci'
import { FaCalendarAlt, FaRegClock, FaTrashAlt } from 'react-icons/fa'
import DeleteBooking from './DeleteBooking'

const BookingsCard = ({ b }) => {

  const {
    bookingDate,
    bookingTime,
    duration,
    facilityName,
    status,
    totalPrice,
    image
  } = b

  return (
    <div className='bg-white border rounded-2xl p-4 md:p-5 flex flex-col md:flex-row gap-4 md:gap-5 shadow-sm hover:shadow-md transition duration-300 mb-5'>

      {/* image */}
      <div className='relative w-full md:w-[160px] h-[180px] md:h-[120px] rounded-xl overflow-hidden flex-shrink-0'>
        <Image
          src={image}
          alt={facilityName}
          fill
          className='object-cover'
        />
      </div>

      <div className='flex-1 flex flex-col justify-between'>


        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2'>

          <h2 className='font-semibold text-base md:text-lg text-gray-800 flex flex-wrap items-center gap-2'>
            {facilityName}

            {status === "Pending" ? (
              <Chip size="sm" color="warning">Pending</Chip>
            ) : status === "Confirmed" ? (
              <Chip size="sm" color="success">Confirmed</Chip>
            ) : (
              <Chip size="sm" color="danger">Cancelled</Chip>
            )}
          </h2>

        </div>

  
        <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 mt-2'>

          <p className='flex items-center gap-2 whitespace-nowrap'>
            <CiLocationOn className='text-[#0EA5A4]' />
            <span className='truncate max-w-[140px] md:max-w-none'>
              {b?.location}
            </span>
          </p>

          <p className='flex items-center gap-2 whitespace-nowrap'>
            <FaCalendarAlt className='text-[#0EA5A4]' />
            {new Date(bookingDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>

          <p className='flex items-center gap-2 whitespace-nowrap'>
            <FaRegClock className='text-[#0EA5A4]' />
            {bookingTime} ({duration}h)
          </p>

        </div>


        <div className='flex items-center justify-between mt-4'>

          <p className='text-[#0EA5A4] font-bold text-lg'>
            ৳ {totalPrice}
                  </p>

          <DeleteBooking b={b} />
        

        </div>

      </div>
    </div>
  )
}

export default BookingsCard