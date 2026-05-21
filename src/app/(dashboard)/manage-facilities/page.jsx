import ManageFacilitiesCard from '@/components/common/manageFacilities/ManageFacilitiesCard'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import Link from 'next/link'
import React from 'react'
import { FaPlus, FaRegCalendarTimes } from 'react-icons/fa'

const ManageFacilitiesPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  const user = session?.user

  const res = await fetch(`http://localhost:8000/facilities/author/${user.id}`)
  const data = await res.json()

  return (
    <div className='mt-20 container mx-auto px-5'>

      <div className='flex items-center justify-between mb-10'>

      <div>
     <h2 className='text-3xl font-bold'>Manage Your Facilities</h2>
     <p className='text-gray-600'>
        Edit or remove your listed facilities.
       </p>
      </div>


     <Link href="/add-facilities">
      <button className='bg-[#0EA5A4] text-white px-5 py-2 flex items-center gap-3 cursor-pointer rounded-lg font-semibold  hover:bg-[#0B7C7B] transition duration-300 shadow-sm hover:shadow-md'>
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