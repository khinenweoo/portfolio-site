import { Home } from 'lucide-react'
import AnimatedBorder from './ui/AnimatedBorder'

const Topbar = ({ className, navLinks }) => {
    return (
        <nav
            className={`flex justify-center items-center ${className}`}
        >
            <AnimatedBorder
                className="h-14"
                containerClassName="px-3 py-1 gap-8"
            >
                {/* Home Icon Section */}
                <a
                    href="/"
                    className="flex items-center justify-center w-12 h-10 rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                    <Home size={18} strokeWidth={1.5} />
                </a>

                {/* Links */}
                <div className="flex items-center gap-8 text-sm font-medium pr-4">
                    {navLinks.map((link, index) => (
                        <a key={index} href={link.path} className="text-gray-400 text-sm hover:text-white transition-colors">
                            {link.title}
                        </a>
                    ))}
                </div>
            </AnimatedBorder>
        </nav>
    )
}

export default Topbar