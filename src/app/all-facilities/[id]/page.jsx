import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { FaMapMarkerAlt, FaUsers, FaClock } from 'react-icons/fa'
import RightCard from '@/components/common/facilityDetailPage/RightCard'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

const FacilityDetailPage = async ({ params }) => {
  const { id } = await params

  const {token} = await auth.api.getToken({
    headers: await headers()
  })
  console.log(token)

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  const data = await res.json()

  const {
    author,
    authorEmail,
    capacity,
    description,
    image,
    location,
    name,
    price,
    sportType,
    timeSlots,
    _id
  } = data

  return (
    <div className='mt-20 container mx-auto py-10 px-5'>

      {/* back to facilities page */}
      <Link
        href={'/all-facilities'}
        className='inline-flex items-center gap-2 text-gray-600 mb-6 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-[#0EA5A4] group'
      >
        <IoArrowBackOutline className='transition-transform duration-300 group-hover:-translate-x-1' />
        <span className='font-medium'>Back to Facilities</span>
      </Link>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>

        {/* left content */}
         <div>
          <div className='relative w-full h-72 rounded-2xl overflow-hidden group'>

        {/* image */}
          <Image
              
            src={image}
            alt={name}
            fill
            className='object-cover transition duration-500 group-hover:scale-110'
          />

        {/* sport type */}
          <div className='absolute top-4 left-4'>
          <span className='px-3 py-1 text-xs font-semibold rounded-full bg-white/90 text-[#0EA5A4] shadow'>
            {sportType}
          </span>
          </div>

          </div>

          <h2 className='font-bold text-4xl mt-5'>{name}</h2>

          <div className='grid grid-cols-2 gap-4 mt-6'>
            <div className='bg-gray-100 p-4 rounded-xl'>
              <p className='text-sm text-gray-500'>Location</p>
              <p className='font-semibold'>{location}</p>
            </div>

            <div className='bg-gray-100 p-4 rounded-xl'>
              <p className='text-sm text-gray-500'>Capacity</p>
              <p className='font-semibold'>Up to {capacity} players</p>
            </div>

            <div className='bg-gray-100 p-4 rounded-xl'>
              <p className='text-sm text-gray-500'>Price</p>
              <p className='font-semibold'>৳ {price}/hour</p>
            </div>

            <div className='bg-gray-100 p-4 rounded-xl'>
              <p className='text-sm text-gray-500'>Available Slots</p>
              <p className='font-semibold'>{timeSlots.length}</p>
            </div>
          </div>

          {/* description */}
          <div className='mt-6'>
            <h3 className='font-semibold text-lg mb-2'>Description</h3>
            <p className='text-gray-600'>{description}</p>
          </div>

          {/* author */}
          <div className='mt-6 p-4 bg-gray-50 rounded-xl border'>
            <p className='text-sm text-gray-500'>Created By</p>
            <p className='font-semibold'>{author}</p>
            <p className='text-sm text-gray-500'>{authorEmail}</p>
          </div>
        </div>


        {/* right side content */}
        <RightCard data={data} />

      </div>
    </div>
  )
}

export default FacilityDetailPage