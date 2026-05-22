import BookingsCard from '@/components/common/Bookings/BookingsCard'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import React from 'react'
import { FaRegCalendarTimes } from 'react-icons/fa'

const MyBookingPage = async () => {
   const session = await auth.api.getSession({
      headers: await headers()
    })
  
    const user = session?.user
   const {token} = await auth.api.getToken({
        headers: await headers()
      })
      // console.log(token)
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/author/${user?.id}`,{headers: {
          authorization: `Bearer ${token}`
        }})
  const data = await res.json()
  // console.log(data)
  return (
    <div className='mt-20'>
      <h2 className='text-3xl font-bold '>My Bookings</h2>
      <p className='text-gray-600 mb-10'>View and manage all your facility bookings.</p>

      {/* bookings cards */}
      {data?.length > 0 ? (<div>
        {
          data.map(b => <BookingsCard key={b._id} b={ b} />)
        }
      </div>):  <div className='flex flex-col items-center justify-center text-center py-20 border rounded-2xl bg-white shadow-sm'>
            
            <FaRegCalendarTimes className='text-5xl text-[#0EA5A4] mb-4' />

            <h3 className='text-xl font-semibold text-gray-800'>
              No Bookings Yet
            </h3>

            <p className='text-gray-500 mt-2 max-w-md'>
              You haven’t booked any facility yet. Start exploring and book your favorite sports venue now.
            </p>

          </div>}
    </div>
  )
}

export default MyBookingPage
