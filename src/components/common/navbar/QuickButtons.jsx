'use client'
import { authClient } from '@/lib/auth-client'
import { Button } from '@heroui/react'
import Link from 'next/link'


const QuickButtons = () => {
  const { 
        data: session, 
  } = authClient.useSession() 
  console.log('session', session)
  return (
    <div className='flex gap-4'>
   <Button className='rounded-md bg-white text-black border border-[#dadada] font-semibold 
      transition-all duration-300 hover:bg-gray-100 hover:shadow-md active:scale-95'><Link href={'/signin'}>Login</Link></Button>
   <Button className='rounded-md bg-[#029691] text-white border border-[#029691] font-semibold 
      transition-all duration-300 hover:bg-[#027e79] hover:shadow-lg active:scale-95'><Link href={'/register'}>SignUp</Link></Button>
    </div>
  )
}

export default QuickButtons
