import BookingsCard from '@/components/common/Bookings/BookingsCard'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import React from 'react'
import { FaRegCalendarTimes } from 'react-icons/fa'

const MyBookingPage = async () => {
  const session = await auth.api.getSession({ headers: await headers() })

  const user = session?.user

 
  if (!user) {
    return (
      <div className='mt-20'>
        <h2 className='text-3xl font-bold '>My Bookings</h2>
        <p className='text-gray-600 mb-10'>You need to sign in to view your bookings.</p>
        <div className='flex items-center justify-center'>
          <a href='/signin' className='px-4 py-2 bg-[#0EA5A4] text-white rounded-lg'>Sign in</a>
        </div>
      </div>
    )
  }

 
  let data = []
  let token = null
  try {
    const tokenRes = await auth.api.getToken({ headers: await headers() })
    token = tokenRes?.token
  } catch (err) {
    console.error('Error getting token for my-bookings:', err)
    token = null
  }

  if (user?.id && token) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/author/${user.id}`, {
      headers: { authorization: `Bearer ${token}` },
    })

    if (res.ok) {
      try {
        const json = await res.json()
        data = Array.isArray(json) ? json : []
      } catch (error) {
        console.error('Failed to parse bookings response:', error)
        data = []
      }
    } else {
      const text = await res.text()
      console.error('Failed to fetch bookings:', res.status, text)
    }
  } else {
    data = []
  }

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
