import FacilitiesWrapper from '@/components/ui/FacilitiesWrapper'
import FacilityCard from '@/components/ui/FacilityCard'
import React from 'react'

const AllFacilitiesPage = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`,{
    cache: "no-store"
  })
  const data = await res.json()
  console.log(data)
  return (
    <div className='mt-20 container mx-auto py-10 px-5'>

      <FacilitiesWrapper data={data}/>
    </div>
  )
}

export default AllFacilitiesPage
