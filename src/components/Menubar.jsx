import React from 'react';
import { Home } from 'lucide-react';
import AnimatedBorder from './ui/AnimatedBorder';

const Menubar = ({
    className = "",
    navLinks = [],
    renderData,
    showHome = true,
    containerClassName = "px-3 py-1 gap-8"
}) => {
    return (
        <nav className={`flex justify-center items-center ${className}`}>
            <AnimatedBorder
                className="h-14"
                containerClassName={containerClassName}
            >
                {/* Optional Home Icon Section */}
                {showHome && (
                    <a
                        href="/"
                        className="flex items-center justify-center w-12 h-10 rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                        <Home size={18} strokeWidth={1.5} />
                    </a>
                )}

                {/* Content Area: Renders navLinks if present, otherwise renders renderData */}
                <div className={`flex items-center gap-8 text-sm font-medium ${showHome ? 'pr-4' : 'px-4'}`}>
                    {navLinks && navLinks.length > 0 ? (
                        navLinks.map((link, index) => (
                            <a key={index} href={link.path} className="text-gray-400 hover:text-white transition-colors">
                                {link.title}
                            </a>
                        ))
                    ) : (
                        // Render Social Icons
                        renderData && renderData
                    )}
                </div>
            </AnimatedBorder>
        </nav>
    );
};

export default Menubar;