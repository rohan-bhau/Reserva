import ManageFacilitiesCard from '@/components/common/manageFacilities/ManageFacilitiesCard'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import { FaPlus, FaRegCalendarTimes } from 'react-icons/fa'

const ManageFacilitiesPage = async () => {
  const session = await auth.api.getSession({ headers: await headers() })

  const user = session?.user

  
  if (!user) {
    redirect('/signin')
  }

  let token = null
  try {
    const tokenRes = await auth.api.getToken({ headers: await headers() })
    token = tokenRes?.token
  } catch (err) {
    console.error('Error getting token for manage-facilities:', err)
    token = null
  }

  let data = []
  if (user?.id && token) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/author/${user.id}`, {
      headers: { authorization: `Bearer ${token}` },
    })

    if (res.ok) {
      try {
        const json = await res.json()
        data = Array.isArray(json) ? json : []
      } catch (error) {
        console.error('Failed to parse facilities response:', error)
        data = []
      }
    } else {
      const text = await res.text()
      console.error('Failed to fetch facilities:', res.status, text)
    }
  } else {
    data = []
  }

  return (
    <div className='mt-20 container mx-auto px-5'>

      <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10'>

      <div>
     <h2 className='text-2xl md:text-3xl font-bold'>Manage Your Facilities</h2>
     <p className='text-gray-600'>
        Edit or remove your listed facilities.
       </p>
      </div>


     <Link href="/add-facilities">
      <button className='bg-[#0EA5A4] text-white px-5 py-2 flex items-center gap-3 cursor-pointer rounded-lg font-semibold  hover:bg-[#0B7C7B] transition duration-300 shadow-sm hover:shadow-md w-full md:w-auto justify-center'>
        <FaPlus />Add New
       </button>
        </Link>

      </div>

      {data?.length > 0 ? (
        <div>
          {data.map(f => (
            <ManageFacilitiesCard key={f._id} b={f} />
          ))}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center text-center py-20 border rounded-2xl bg-white shadow-sm'>
          <FaRegCalendarTimes className='text-5xl text-[#0EA5A4] mb-4' />

          <h3 className='text-xl font-semibold text-gray-800'>
            No Facilities Yet
          </h3>

          <p className='text-gray-500 mt-2 max-w-md'>
            You haven’t added any facility yet. Start by creating one.
          </p>
        </div>
      )}

    </div>
  )
}

export default ManageFacilitiesPage