'use client'
import {Bars, Bell, Envelope, Gear, House, Magnifier, Person} from "@gravity-ui/icons";
import {Button, Drawer} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiCalendar, FiHome, FiPlusCircle, FiSettings } from "react-icons/fi";
import { MdOutlineSportsSoccer } from "react-icons/md";


const MobileMenu = () => {
       const pathName = usePathname()
  return (
    <div className="">
          <Drawer>
      <Button variant="secondary" className={'text-[#029691]'}>
        <Bars />
        Menu
      </Button>
      <Drawer.Backdrop>
        <Drawer.Content placement="right">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Header>
                              <Drawer.Heading className="flex items-center gap-4">
                                  
                               <div className="w-8">
             <Link href={'/'}> <Image src={'/assets/favicon.png'} width={300} height={200} alt="nav-logo" /></Link>
                                  </div>
                                  <p className="mt-3">Reservo</p>
                              </Drawer.Heading>
            </Drawer.Header>
            <Drawer.Body className="flex flex-col  justify-between">
              <nav className="flex flex-col gap-1">
                                  <Link href={'/'} className={`${pathName === '/' ? "text-[#029691] " : "text-[#45423d] hover:text-[#050403]"} flex items-center gap-3  font-semibold text-sm relative transition duration-300`}>
                                      <FiHome /> Home
                                  </Link>
                                  <Link href={'/all-facilities'} className={`${pathName === '/all-facilities' ? "text-[#029691] " : "text-[#45423d] hover:text-[#050403]"} flex items-center gap-3  font-semibold text-sm relative transition duration-300`}>
                                      <MdOutlineSportsSoccer  /> All Facilities
                                  </Link>
                                  <Link href={'/my-bookings'} className={`${pathName === '/my-bookings' ? "text-[#029691] " : "text-[#45423d] hover:text-[#050403]"} flex items-center gap-3  font-semibold text-sm relative transition duration-300`}>
                                      <FiCalendar  /> My Bookings
                                  </Link>
                                  <Link href={'add-facilities'} className={`${pathName === '/add-facilities' ? "text-[#029691] " : "text-[#45423d] hover:text-[#050403]"} flex items-center gap-3  font-semibold text-sm relative transition duration-300`}>
                                      <FiPlusCircle  /> Add Facilities
                                  </Link>
                                  <Link href={'/manage-facilities'} className={`${pathName === '/manage-facilities' ? "text-[#029691] " : "text-[#45423d] hover:text-[#050403]"} flex items-center gap-3  font-semibold text-sm relative transition duration-300`}>
                                      <FiSettings  /> Manage Facilities
                                  </Link>
                              </nav>
                              
                              <div>
                                  <Button className="w-full py-3 rounded-lg font-semibold transition-all duration-300 
bg-[#029691] text-white hover:bg-[#027e79] hover:shadow-md active:scale-95"><Link href={'/login'}>Login / Register</Link></Button>
                              </div>
             </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
    </div>
  )
}

export default MobileMenu
