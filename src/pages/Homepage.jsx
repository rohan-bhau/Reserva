import Banner from '@/components/common/banner/Banner'
import FAQ from '@/components/common/faq/FAQ'
import WhyChoose from '@/components/common/whyChoose/WhyChoose'
import HowItWorks from '@/components/howItWorks/HowItWorks'
import React from 'react'

const Homepage = () => {
  return (
    <div>
          HomePage
          <Banner />
          <HowItWorks />
          <WhyChoose />
          <FAQ/>
    </div>
  )
}

export default Homepage
