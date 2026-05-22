import FacilitiesWrapper from '@/components/ui/FacilitiesWrapper'
import React from 'react'

const AllFacilitiesPage = async() => {
  // No initial fetch needed - FacilitiesWrapper handles all fetching with filters
  return (
    <div className='mt-20 container mx-auto py-10 px-5'>
      <FacilitiesWrapper data={[]}/>
    </div>
  )
}

export default AllFacilitiesPage
