import FacilityCard from "@/components/ui/FacilityCard"
import Heading from "./Heading"


const Featured = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)
    const data =  await res.json()
  return (
      <div className='container mx-auto py-15 px-5'>
          
        <Heading/>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                  data.map(facility=><FacilityCard key={facility._id} facility={facility}/>)
              }
          </div>
          
    </div>
  )
}

export default Featured
