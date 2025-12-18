import React, { useEffect, useState } from 'react'
import logo from '../assets/site-logo.webp'
import menu_icon from '../assets/menu_icon_dark.svg'
import { User, X } from 'lucide-react'
import AnimatedBorder from './ui/AnimatedBorder'
import Menubar from './Menubar'

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
    const [isScrolled, setIsScrolled] = useState(false);

    // Track scroll position to hide/show side elements
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 z-20 ${isScrolled ? 'bg-transparent' : 'bg-[#101111] '}`}>
            {/* Logo */}
            <div className={`flex-1 flex items-center gap-2 transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'
                }`}>               
                <div className="logo-wrap">
                    <img src={logo} alt="" className='w-9 sm:w-12' />
                </div>
                <span className="text-white font-medium text-lg">znisa</span>
            </div>

            {/* Menubar (Made Sticky) */}
            <div className="max-sm:hidden sticky top-4 z-50">
                <Menubar
                    showHome={true}
                    navLinks={navLinks}
                />
            </div>

            {/* Mobile Menu */}
            <nav className={`md:hidden ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0
            max-sm:min-h-screen max-sm:h-full max-sm:flex-col z-30
            max-sm:bg-linear-to-r max-sm:from-[#A78BFA] max-sm:to-[#FDE68A] max-sm:text-black max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
                <div className='close-icon w-5 absolute right-4 top-4 cursor-pointer sm:hidden' onClick={() => setSidebarOpen(false)}>
                    <X />
                </div>
                {navLinks.map((link, index) => (
                    <a key={index} href={link.path} onClick={() => setSidebarOpen(false)} className="text-black text-sm hover:text-gray-100 transition-colors">
                    {link.title}
                    </a>
                ))}
            </nav>

            {/* Right Buttons */}
            <div className={`flex-1 flex items-center justify-end gap-1 sm:gap-2 transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'
                }`}>
                <img src={menu_icon} alt="" className="w-8 h-6 cursor-pointer sm:hidden" onClick={() => setSidebarOpen(true)} />
                {/* Hire me Button */}
                <AnimatedBorder
                    className="h-12 cursor-pointer max-sm:hidden" 
                    containerClassName="bg-gradient-to-r from-[#A78BFA] to-[#FDE68A] px-8 font-medium hover:bg-white/10 transition-colors" // Inner padding and hover effect
                    duration="3s"
                >
                    <button className=''>Hire me</button>
                </AnimatedBorder>

                {/*User Icon Button */}
                <AnimatedBorder
                    className="h-12 w-12 max-sm:hidden"
                    containerClassName="bg-gradient-to-r from-[#A78BFA] to-[#FDE68A] p-0 hover:bg-white/10 transition-colors" // p-0 centers the icon perfectly
                >
                    <button aria-label="User Profile" className="flex items-center justify-center cursor-pointer h-full w-full">
                        <User size={20} strokeWidth={1.5} />
                    </button>
                </AnimatedBorder>
            </div>

        </div>
    )
}

export default Header