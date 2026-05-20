import {  FaRegCopyright } from 'react-icons/fa'
import FooterBrand from './FooterBrand'
import QuickLinks from './QuickLinks'
import UsersQuickLinks from './UsersQuickLinks'
import OwnersQuickLinks from './OwnersQuickLinks'



const Footer = () => {
  return (
    <div className='bg-[#062333] text-white'>

      <div className='container mx-auto pt-14 pb-10 px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>

        {/* Logo,  Description and social links*/} 
        <FooterBrand />
        
        {/* QUICK LINKS */}
       <QuickLinks/>

        {/*QUICK LINK FOR USERS */}
     <UsersQuickLinks/>

        {/* QUICK LINK FOR OWNERS/SELLERS */}
        <OwnersQuickLinks/>

      </div>

      {/* COPY RIGHT */}
      <div className='border-t border-white/10 py-6 text-center text-sm text-gray-400'>
        <p className='flex items-center justify-center gap-2'>
          <FaRegCopyright />
          2026 SportNest. All Rights Reserved.
        </p>
      </div>

    </div>
  )
}

export default Footer