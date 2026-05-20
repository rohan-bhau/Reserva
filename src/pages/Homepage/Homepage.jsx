import Banner from '@/components/common/banner/Banner'
import FAQ from '@/components/common/faq/FAQ'
import UpcomingEvents from '@/components/common/upcomingEvents/UpcomingEvents'
import WhyChoose from '@/components/common/whyChoose/WhyChoose'
import HowItWorks from '@/components/common/howItWorks/HowItWorks'
import React from 'react'

const Homepage = () => {
  return (
    <div>
          HomePage
          <Banner />
          <UpcomingEvents/>
          <HowItWorks />
          <WhyChoose />
          <FAQ/>
    </div>
  )
}

export default Homepage
