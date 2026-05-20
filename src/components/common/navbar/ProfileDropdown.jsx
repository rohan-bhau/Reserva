import { authClient } from "@/lib/auth-client";
import {ArrowRightFromSquare, Gear, Persons} from "@gravity-ui/icons";
import {Avatar, Dropdown, Label} from "@heroui/react";
import Link from "next/link";
import toast from "react-hot-toast";
import { FaCalendarCheck } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp, IoMdAddCircleOutline } from "react-icons/io";

const ProfileDropdown = ({user, setIsOpen, isOpen, pathName}) => {
  return (
     <Dropdown onOpenChange={()=>setIsOpen(!isOpen)}>
      <Dropdown.Trigger className="rounded-full flex items-center gap-3" >
         <Avatar>
        <Avatar.Image alt={user.name} src={user.image} />
        <Avatar.Fallback className="border-none bg-gradient-to-br from-pink-500 to-purple-500 text-white">
          {user.name.slice(0,2).toUpperCase()}
        </Avatar.Fallback>
              </Avatar>
              <p className='font-semibold'>{user.name}</p>
              {isOpen? <IoIosArrowUp /> :<IoIosArrowDown />}
      </Dropdown.Trigger>
      <Dropdown.Popover>
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
            <div className="flex flex-col gap-0">
                          <p className="text-sm leading-5 font-medium">{ user.name}</p>
                          <p className="text-xs leading-none text-muted">{ user.email}</p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
          <Dropdown.Item id="settings" textValue="Settings" className={`transition-all duration-200 rounded-md
              ${pathName === '/my-bookings' ? 'bg-[#0EA5A4]/10 text-[#0EA5A4]' : 'hover:bg-gray-100'}
            `}>
            <Link href={'/my-bookings'}>
            <div className="flex w-full items-center justify-between gap-3">
              <FaCalendarCheck className="size-3.5 text-muted" />
              <Label>My Bookings</Label>
            </div></Link>
          </Dropdown.Item>
          <Dropdown.Item id="add-facility" textValue="Add Facility" className={`transition-all duration-200 rounded-md
              ${pathName === '/add-facilities' ? 'bg-[#0EA5A4]/10 text-[#0EA5A4]' : 'hover:bg-gray-100'}
            `}>
            <Link href={'/add-facilities'}>
             <div className="flex w-full items-center justify-between gap-3">
              <IoMdAddCircleOutline  className="size-3.5 text-muted" />
              <Label>Add Facility</Label>
            </div></Link>
          </Dropdown.Item>
          <Dropdown.Item id="manage-facilities" textValue="Manage Facilities" className={`transition-all duration-200 rounded-md
              ${pathName === '/manage-facilities' ? 'bg-[#0EA5A4]/10 text-[#0EA5A4]' : 'hover:bg-gray-100'}
            `}>
            <Link href={'/manage-facilities'}>
            <div className="flex w-full items-center justify-between gap-3">
              <Gear  className="size-3.5 text-muted" />
              <Label>Manage Facilities</Label>
            </div>
            </Link>
          </Dropdown.Item>
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
  )
}

export default ProfileDropdown
