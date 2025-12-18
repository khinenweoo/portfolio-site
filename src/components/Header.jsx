import React, { useState } from 'react'
import logo from '../assets/logo.png'
import menu_icon from '../assets/menu_icon_dark.svg'
import { User, X } from 'lucide-react'
import Topbar from './Topbar'
import GradientButton from './ui/GradientButton'
import AnimatedBorder from './ui/AnimatedBorder'

const navLinks = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact Me",
        path: "#contact",
    },
];
const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 
        sticky top-0 z-20 backdrop-blur-xl font-medium '>
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="logo-wrap">
                    <img src={logo} alt="" className='w-9 sm:w-12' />
                </div>
                <span className="text-white font-medium text-lg">znisa</span>
            </div>

            {/* Middle Menubar */}
            <Topbar className="max-sm:hidden" navLinks={navLinks}/>
            

            {/* Mobile Menu */}
            <nav className={`md:hidden ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0
            max-sm:min-h-screen max-sm:h-full max-sm:flex-col z-30
            max-sm:bg-zinc-800 max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
                <div className='close-icon w-5 absolute right-4 top-4 cursor-pointer sm:hidden' onClick={() => setSidebarOpen(false)}>
                    <X />
                </div>
                {navLinks.map((link, index) => (
                    <a key={index} href={link.path} onClick={()=>setSidebarOpen(false)} className="text-gray-400 text-sm hover:text-purple-400 transition-colors">
                    {link.title}
                    </a>
                ))}
            </nav>
            <div className='flex items-center gap-1 sm:gap-2'>
                <img src={menu_icon} alt="" className="w-8 h-6 cursor-pointer sm:hidden" onClick={() => setSidebarOpen(true)} />
                {/* Hire Me Button */}
                {/* The "Hire me" Pill Button */}
                {/* 1. The "Hire me" Pill Button */}
                <AnimatedBorder
                    className="h-12"  // Sets the overall height of the pill
                    containerClassName="bg-gradient-to-r from-[#A78BFA] to-[#FDE68A] px-8 font-medium hover:bg-white/10 transition-colors" // Inner padding and hover effect
                    duration="3s" // Slightly faster spin for buttons looks good
                >
                    <button className=''>Hire me</button>
                </AnimatedBorder>

                {/*User Icon Button */}
                <AnimatedBorder
                    className="h-12 w-12" // Fixed equal dimensions creates the circle
                    containerClassName="bg-gradient-to-r from-[#A78BFA] to-[#FDE68A] p-0 hover:bg-white/10 transition-colors" // p-0 centers the icon perfectly
                >
                    <button aria-label="User Profile" className="flex items-center justify-center h-full w-full">
                        <User size={20} strokeWidth={1.5} />
                    </button>
                </AnimatedBorder>
            </div>

        </div>
    )
}

export default Header