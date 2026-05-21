'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiCalendar, FiPlusCircle, FiSettings } from "react-icons/fi";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Avatar, Dropdown, Label } from "@heroui/react";
import { ArrowRightFromSquare } from "@gravity-ui/icons";
import toast from "react-hot-toast";

const DashboardSidebar = () => {
  const pathname = usePathname();
    const {
    data: session,
  } = authClient.useSession();

  const user = session?.user;

  const menu = [
    { name: "Back to Home", path: "/", icon: <FiHome /> },
    { name: "My Bookings", path: "/my-bookings", icon: <FiCalendar /> },
    { name: "Add Facility", path: "/add-facilities", icon: <FiPlusCircle /> },
    { name: "Manage Facilities", path: "/manage-facilities", icon: <FiSettings /> },
  ];

  return (
    <div className="w-64 pt-25 bg-white border-r min-h-screen p-5 hidden md:flex flex-col justify-between">

       <div>
      {/* Logo */}
      <div className="mb-8 flex items-center gap-2">
        <Image src="/assets/favicon.png" width={30} height={30} alt="logo" />
        <h2 className="font-bold text-lg text-[#0EA5A4]">Reserva</h2>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2">
        {menu.map((item, i) => (
          <Link
            key={i}
            href={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
              ${
                pathname === item.path
                  ? "bg-[#0EA5A4] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
        </nav>
      </div>
      
      {
        user && (
          <div className='mt-8'>
            <div className='flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 transition duration-300'>
              <Dropdown>
                <Dropdown.Trigger className="rounded-full flex items-center gap-3 w-full cursor-pointer">
                  <div className="flex items-center gap-3 w-full">
                    <Avatar>
                      <Avatar.Image
                        alt={user.name}
                        src={user.image}
                      />
                      <Avatar.Fallback className="border-none bg-gradient-to-br from-pink-500 to-purple-500 text-white">
                        {user.name.slice(0, 2).toUpperCase()}
                      </Avatar.Fallback>
                    </Avatar>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-sm font-semibold text-black truncate">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </Dropdown.Trigger>
                <Dropdown.Popover className="w-full max-w-[270px]">
                  <div className="px-3 pt-3 pb-1">
                    <div className="flex items-center gap-2">
                      <Avatar size="sm">
                        <Avatar.Image
                          alt={user.name}
                          src={user.image}
                        />
                        <Avatar.Fallback className="border-none bg-gradient-to-br from-pink-500 to-purple-500 text-white">
                          {user.name.slice(0, 2).toUpperCase()}
                        </Avatar.Fallback>
                      </Avatar>
                      <div className="flex flex-col gap-0">
                        <p className="text-sm leading-5 font-medium">
                          {user.name}
                        </p>
                        <p className="text-xs leading-none text-muted">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      id="logout"
                      textValue="Logout"
                      variant="danger"
                      onClick={async () => {
                        await authClient.signOut();
                        toast.success("Logged Out successfully!");
                      }}
                    >
                      <div className="flex w-full items-center justify-between gap-2">
                        <Label>Log Out</Label>
                        <ArrowRightFromSquare className="size-3.5 text-danger" />
                      </div>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </div>
          </div>
        )
      }

    </div>
  );
};

export default DashboardSidebar;