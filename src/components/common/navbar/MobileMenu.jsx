'use client'
import { authClient } from "@/lib/auth-client";
import {ArrowRightFromSquare, Bars} from "@gravity-ui/icons";
import {Avatar, Button, Drawer, Dropdown, Label} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { FiCalendar, FiHome, FiPlusCircle, FiSettings } from "react-icons/fi";
import { MdOutlineSportsSoccer } from "react-icons/md";


const MobileMenu = () => {
  const pathName = usePathname()
    const { 
          data: session, 
    } = authClient.useSession() 
  
  const user = session?.user
  // const user = true
  // console.log(user.name)
  return (
    <div className="">
          <Drawer>
      <Button className="bg-[#ebf7f5] text-[#029691] hover:bg-[#dff3f1]">
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
                  {
                    user ? <div className='flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 transition duration-300'>
                                 <Dropdown>
      <Dropdown.Trigger className="rounded-full flex items-center gap-3" >
         <Avatar>
        <Avatar.Image alt={user.name} src={user.image} />
        <Avatar.Fallback className="border-none bg-gradient-to-br from-pink-500 to-purple-500 text-white">
          {user.name.slice(0,2).toUpperCase()}
        </Avatar.Fallback>
              </Avatar>
              <div>
               <p className="text-sm leading-5 font-semibold text-black text-left">{ user.name}</p>
             <p className="text-xs leading-none text-muted">{ user.email}</p>
             </div>
      </Dropdown.Trigger>
      <Dropdown.Popover className="w-full max-w-[270px] mx-auto">
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image
                alt="Jane"
                src={user.image}
              />
              <Avatar.Fallback className="border-none bg-gradient-to-br from-pink-500 to-purple-500 text-white">
          {user.name.slice(0,2).toUpperCase()}
        </Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col gap-0 w-fit">
                          <p className="text-sm leading-5 font-medium">{ user.name}</p>
                          <p className="text-xs leading-none text-muted">{ user.email}</p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
          <Dropdown.Item id="logout" textValue="Logout" variant="danger" onClick={async () => {
                    await authClient.signOut();
                    toast.success("Logged Out successfull!")
                  }}>
            <div className="flex w-full items-center justify-between gap-2">
              <Label>Log Out</Label>
              <ArrowRightFromSquare className="size-3.5 text-danger" />
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown>
                            
                          </div>:<Button className="w-full py-3 rounded-lg font-semibold transition-all duration-300 
bg-[#029691] text-white hover:bg-[#027e79] hover:shadow-md active:scale-95"><Link href={'/signin'}>Login / Register</Link></Button>
                                  }
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
