'use client'
import { authClient } from '@/lib/auth-client'
import { Avatar, Button } from '@heroui/react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import ProfileDropdown from './ProfileDropdown'
import { useState } from 'react'
import { usePathname } from 'next/navigation'



const QuickButtons = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname();
  const { 
        data: session, 
  } = authClient.useSession() 

  const user = session?.user
  // console.log('session', user)
  return (
    <div className='flex gap-4'>
      {user ? <div className='flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 transition duration-300'>
        <ProfileDropdown user={user} isOpen={ isOpen} setIsOpen={setIsOpen} pathName={pathName} />
        
      </div>
        : <>
          <Button className='rounded-md bg-white text-black border border-[#dadada] font-semibold 
      transition-all duration-300 hover:bg-gray-100 hover:shadow-md active:scale-95'><Link href={'/signin'}>Login</Link></Button>
   <Button className='rounded-md bg-[#029691] text-white border border-[#029691] font-semibold 
      transition-all duration-300 hover:bg-[#027e79] hover:shadow-lg active:scale-95'><Link href={'/register'}>SignUp</Link></Button>
        </>}
   
    </div>
  )
}

export default QuickButtons
