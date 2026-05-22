'use client'

import { authClient } from "@/lib/auth-client"
import { Button } from "@heroui/react"
import { redirect } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

const RightCard = ({ data }) => {
  const [duration, setDuration] = useState(1)

  const {
    name,
    price,
    timeSlots,
    _id, image, location
  } = data

    const totalPrice = price * duration
    const { 
              data: session, 
        } = authClient.useSession() 
      
    const user = session?.user
    // console.log(user)
    const username = user?.name;
    const email = user?.email;
    const userId = user?.id;

  const onSubmit = async(e) => {
    e.preventDefault()

    const form = e.currentTarget

    const formData = new FormData(form)
    const bookingData = Object.fromEntries(formData.entries())

    bookingData.facilityName = name
      bookingData.totalPrice = totalPrice
      bookingData.userName = username;
      bookingData.userEmail = email;
      bookingData.userId = userId;
    bookingData.status = "Pending"
    bookingData.image = image;
    bookingData.facilityId = _id;
    bookingData.location = location;


    // console.log('form submitted', bookingData)
    
    
        const {data:tokenData}=await authClient.token()
      
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
          method: "POST",
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${tokenData.token}`
          },
          body: JSON.stringify(bookingData)
      })

      const data = await res.json()
      // console.log('data after post', data)
    toast.success("Booking Successfull! ")
    redirect('/my-bookings')

    form.reset()
    setDuration(1)
  }

  return (
    <div className='bg-white border rounded-2xl p-6 shadow-sm h-fit'>

      <h3 className='text-xl font-semibold mb-2'>Book This Facility</h3>
      <p className='text-gray-500 text-sm mb-5'>
        Fill in your details to reserve this spot
      </p>

      <form onSubmit={onSubmit} className='space-y-4'>

        {/* facility */}
        <div>
          <label className='text-sm text-gray-500'>Facility</label>
          <input
            type='text'
            value={name}
            readOnly
            className='w-full mt-1 border rounded-lg px-3 py-2 bg-gray-100'
          />
        </div>

        {/* date */}
        <div>
          <label className='text-sm text-gray-500'>Booking Date</label>
          <input
            type='date'
            name="bookingDate"
            required
            className='w-full mt-1 border rounded-lg px-3 py-2'
          />
        </div>

        {/* time slot */}
        <div>
          <label className='text-sm text-gray-500'>Time Slot</label>

          <select
            name="bookingTime"
            required
            className='w-full mt-1 border rounded-lg px-3 py-2'
          >
            <option value="">Select a time slot</option>

            {
              timeSlots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))
            }

          </select>
        </div>

        {/* duration */}
        <div>
          <label className='text-sm text-gray-500'>Duration (Hours)</label>
          <input
            type='number'
            name="duration"
            value={duration}
            min={1}
            required
            onChange={(e) => setDuration(Number(e.target.value))}
            className='w-full mt-1 border rounded-lg px-3 py-2'
          />
        </div>

        {/* price */}
        <div className='bg-[#f0fdfc] p-4 rounded-lg'>
          <p className='text-sm text-gray-600'>
            ৳ {price} x {duration} hr
          </p>
          <h3 className='text-xl font-bold text-[#0EA5A4]'>
            Total: ৳ {totalPrice}
          </h3>
        </div>

        {/* button */}
        <Button
          type='submit'
          className='w-full bg-[#0EA5A4] text-white py-3 rounded-lg font-semibold hover:bg-[#0B7C7B] transition'
        >
          Confirm Booking
        </Button>

      </form>

    </div>
  )
}

export default RightCard