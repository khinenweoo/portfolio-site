import React from 'react';
import StarShape from './ui/StarShape';

const Footer = () => {
    return (
        <div className="relative w-full h-96 bg-[#0a0a0a] overflow-hidden flex items-center justify-center">

            {/* 1. The Grid Layer */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #222 1px, transparent 1px),
            linear-gradient(to bottom, #222 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px', // Adjust this to change grid size
                    maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)' // Fades the grid at edges
                }}
            />

            {/* 2. The Content Area */}
            <div className="relative z-10 text-white text-center">
                <h2 className="text-4xl font-medium mb-4">Have idea about project? ✨</h2>
                <p className="text-gray-400 mb-8 max-w-sm mx-auto">
                    Write anything here to showcase what you are doing.
                </p>
                <button className="bg-gradient-to-r from-indigo-400 to-orange-200 text-black px-6 py-2 rounded-full font-semibold">
                    Send us a message
                </button>
            </div>

            {/* 3. Manually Placed Stars (Matching your screenshot) */}
            {/* Star 1 */}
            <div className="absolute top-[40%] left-[70%] -translate-x-1/2 -translate-y-1/2">
                <StarShape className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </div>

            {/* Star 2 */}
            <div className="absolute top-[60%] left-[78%] -translate-x-1/2 -translate-y-1/2">
                <StarShape className="w-4 h-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            </div>

        </div>
    );
};

export default Footer;