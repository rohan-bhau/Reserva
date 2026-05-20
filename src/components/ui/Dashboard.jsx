'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiCalendar, FiPlusCircle, FiSettings } from "react-icons/fi";
import Image from "next/image";

const DashboardSidebar = () => {
  const pathname = usePathname();

  const menu = [
    { name: "Back to Home", path: "/", icon: <FiHome /> },
    { name: "My Bookings", path: "/my-bookings", icon: <FiCalendar /> },
    { name: "Add Facility", path: "/add-facilities", icon: <FiPlusCircle /> },
    { name: "Manage Facilities", path: "/manage-facilities", icon: <FiSettings /> },
  ];

  return (
    <div className="w-64 pt-25 bg-white border-r min-h-screen p-5 hidden md:block">

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
  );
};

export default DashboardSidebar;