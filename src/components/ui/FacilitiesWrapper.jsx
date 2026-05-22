'use client'

import FacilityCard from '@/components/ui/FacilityCard'
import { Spinner } from '@heroui/react'
import { useState, useEffect } from 'react'
import { FaSearch, FaChevronDown } from 'react-icons/fa'

const sports = [
  "Football",
  "Cricket",
  "Badminton",
  "Tennis",
  "Basketball",
  "Volleyball"
]

const FacilitiesClient = ({ data: initialData }) => {

  const [search, setSearch] = useState("")
  const [selectedSport, setSelectedSport] = useState("All Sports")
  const [sortOrder, setSortOrder] = useState("")
  const [filteredData, setFilteredData] = useState(initialData || [])
  const [loading, setLoading] = useState(false)

  // Fetch filtered data from server
  useEffect(() => {
    const fetchFilteredData = async () => {
      try {
        setLoading(true)
        const params = new URLSearchParams()
        
        if (search) params.append("search", search)
        if (selectedSport !== "All Sports") params.append("sportType", selectedSport)
        if (sortOrder) params.append("sortOrder", sortOrder)
        
        const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/facilities${params.toString() ? '?' + params.toString() : ''}`
        
        const res = await fetch(url, { cache: "no-store" })
        const data = await res.json()
        setFilteredData(data || [])
      } catch (error) {
        console.error("Error fetching filtered data:", error)
        setFilteredData(initialData || [])
      } finally {
        setLoading(false)
      }
    }

    fetchFilteredData()
  }, [search, selectedSport, sortOrder, initialData])

  return (
    <div>

      <div className='w-full p-4 bg-white mb-8'>

        {/* filtering */}

  <div className='flex flex-col xl:flex-row gap-4'>

    <div className='w-full xl:flex-1'>
      <div className='relative'>
        <input
          type="text"
          placeholder="Search by facility name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-[#0EA5A4] text-sm'
        />

        <span className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'>
          <FaSearch size={14} />
        </span>
      </div>
    </div>


    <div className='flex flex-col sm:flex-row gap-4 xl:w-auto'>


      <div className='relative w-full sm:w-[220px]'>
        <select
          value={selectedSport}
          onChange={(e) => setSelectedSport(e.target.value)}
          className='appearance-none w-full border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#0EA5A4] bg-white cursor-pointer'
        >
          <option>All Sports</option>

          {sports.map((sport) => (
            <option key={sport} value={sport}>
              {sport}
            </option>
          ))}
        </select>

        <span className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none'>
          <FaChevronDown size={12} />
        </span>
      </div>


      <div className='relative w-full sm:w-[180px]'>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className='appearance-none w-full border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#0EA5A4] bg-white cursor-pointer'
        >
          <option value="">Sort By Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>

        <span className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none'>
          <FaChevronDown size={12} />
        </span>
      </div>

    </div>

  </div>
</div>


      {loading ? (
        <div className='text-center py-20 flex justify-center'>
          <div className='flex gap-2 justify-center items-center'>
            <Spinner/>
            <h3 className='text-xl font-semibold text-gray-700'>
            Loading facilities... ⏳
          </h3>
          </div>
        </div>
      ) : filteredData.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
          {
            filteredData.map(facility => (
              <FacilityCard
                key={facility._id}
                facility={facility}
              />
            ))
          }
        </div>
      ) : (
        <div className='text-center py-20'>
          <h3 className='text-xl font-semibold text-gray-700'>
            No facilities found 😔
          </h3>

          <p className='text-gray-500 mt-2'>
            Try changing search or filters
          </p>
        </div>
      )}

    </div>
  )
}

export default FacilitiesClient