import Banner from '@/components/common/banner/Banner'
import FAQ from '@/components/common/faq/FAQ'
import UpcomingEvents from '@/components/common/upcomingEvents/UpcomingEvents'
import WhyChoose from '@/components/common/whyChoose/WhyChoose'
import HowItWorks from '@/components/common/howItWorks/HowItWorks'
import React from 'react'
import Featured from '@/components/common/featured/Featured'

const Homepage = () => {
  return (
    <div>
          HomePage
      <Banner />
      <Featured/>
          <UpcomingEvents/>
          <HowItWorks />
          <WhyChoose />
          <FAQ/>
    </div>
  )
}

export default Homepage
