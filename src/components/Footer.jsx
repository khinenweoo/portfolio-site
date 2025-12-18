import { FaRegUser, FaFacebookF, FaTwitter } from "react-icons/fa";
import Menubar from "./Menubar";
import logo from '../assets/site-logo.webp'
import { FaSquareDribbble, FaSquareInstagram } from "react-icons/fa6";
import AnimatedBorder from "./ui/AnimatedBorder";
import { User } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full flex flex-col md:flex-row items-center justify-between px-4 py-4 sm:px-12 lg:px-24 xl:px-40 pt-20 gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="logo-wrap">
                    <img src={logo} alt="" className='w-9 sm:w-12' />
                </div>
                <span className="text-white font-medium text-lg">znisa</span>
            </div>

            {/* Social Bar */}
            <Menubar
                showHome={false}
                navLinks={[]}
                containerClassName="px-8 py-2"
                renderData={(
                    <div className="flex items-center gap-10">
                        <FaTwitter className="text-zinc-400 hover:text-white cursor-pointer transition-all text-lg" />
                        <FaSquareDribbble className="text-zinc-400 hover:text-white cursor-pointer transition-all text-lg" />
                        <FaSquareInstagram className="text-zinc-400 hover:text-white cursor-pointer transition-all text-lg" />
                        <FaFacebookF className="text-zinc-400 hover:text-white cursor-pointer transition-all text-lg" />
                    </div>
                )}
            />

            {/* Action Buttons */}
            <div className='flex items-center gap-3 sm:gap-2'>
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
        </footer>
    )
}

export default Footer