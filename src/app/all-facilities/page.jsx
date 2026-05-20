import FacilityCard from '@/components/ui/FacilityCard'
import React from 'react'

const AllFacilitiesPage = async() => {
  const res = await fetch(`http://localhost:8000/facilities`)
  const data = await res.json()
  console.log(data)
  return (
    <div className='mt-20 container mx-auto py-10 px-5'>

      {/* all facilities */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          data.map(facility => <FacilityCard key={facility._id} facility={ facility} />)
        }
      </div>
    </div>
  )
}

export default AllFacilitiesPage
