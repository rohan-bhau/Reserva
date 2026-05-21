import BookingsCard from '@/components/ui/BookingsCard'
import React from 'react'

const MyBookingPage = async () => {
  const res = await fetch(`http://localhost:8000/bookings`)
  const data = await res.json()
  console.log(data)
  return (
    <div className='mt-20'>
      <h2 className='text-3xl font-bold '>My Bookings</h2>
      <p className='text-gray-600 mb-10'>View and manage all your facility bookings.</p>

      {/* bookings cards */}
      <div>
        {
          data.map(b => <BookingsCard key={b._id} b={ b} />)
        }
      </div>
    </div>
  )
}

export default MyBookingPage
