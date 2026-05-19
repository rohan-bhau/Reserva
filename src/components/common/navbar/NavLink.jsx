'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import {motion} from 'motion/react';

const NavLink = ({ href, children }) => {
  const pathName = usePathname()
  const isActive = href === pathName;
  return (
    <Link href={href} className={`${isActive ? "text-[#029691] " : "text-[#45423d] hover:text-[#050403]"} px-3 py-1 font-semibold text-sm relative transition duration-300`}>{children}
      {isActive && (
        <motion.span
          layoutId="underline"
          className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#029691] rounded"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </Link>
  )
}

export default NavLink
