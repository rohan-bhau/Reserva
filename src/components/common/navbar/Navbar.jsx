import {  poppins } from "@/fonts/font"
import Image from "next/image"
import Link from "next/link"
import NavLink from "./NavLink"
import { Button } from "@heroui/react"
import QuickButtons from "./QuickButtons"
import MobileMenu from "./MobileMenu"

const Navbar = () => {
  return (
    <div className={`${poppins.className} bg-[#fff7f2] border-b px-5 fixed z-40 w-full h-[80px]`}>
          <div className="container mx-auto py-5 flex justify-between items-center">
              <div className="w-15">
             <Link href={'/'}> <Image src={'/assets/nav-logo.png'} width={300} height={200} alt="nav-logo" /></Link>
              </div>
              
              <div className="lg:hidden">
                  <MobileMenu />
              </div>
                  <ul className="lg:flex gap-3 hidden">
                  <li><NavLink href={'/'}>Home</NavLink></li>
                  <li><NavLink href={'/all-facilities'}>All Facilities</NavLink></li>
                  <li><NavLink href={'/my-bookings'}>My Bookings</NavLink></li>
                  <li><NavLink href={'/add-facilities'}>Add Facilities</NavLink></li>
                  <li><NavLink href={'/manage-facilities'}>Manage Facilities</NavLink></li>
                  
              </ul>


              
              <div className="lg:flex gap-4 hidden">
                  <QuickButtons/>
              </div>

          </div>
    </div>
  )
}

export default Navbar
