import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ name, role, text }) => {
    return (
        <div className="relative group p-[1.5px] rounded-[2rem] overflow-hidden bg-transparent h-full">
            {/* Framer Motion Animated Border Layer */}
            <motion.div
                className="absolute inset-[-100%] z-0"
                style={{
                    /* Gradient Logic: 
                       Gold (#FDE68A) starts at 0deg.
                       Dark Gray (#18181b) takes over quickly and stays until nearly the end.
                       This makes the gold appear as a narrow moving 'beam'.
                    */
                    background: `conic-gradient(from 0deg at 50% 50%, #FDE68A 0deg, #18181b 45deg, #111111 280deg, #8B5CF6 325deg, #FDE68A 360deg)`,
                }}
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Main Card */}
            <div className="relative z-10 bg-[#111111] rounded-[calc(2rem-1.5px)] h-full w-full p-4 md:p-6 flex flex-col items-start text-left">

                {/* content */}
                <div className="flex justify-between w-full mb-2">
                    <div className="flex items-center gap-4">
                        <div className="avatar w-14 h-14 rounded-full bg-zinc-700 border border-zinc-800" />
                        <div>
                            <h4 className="client-name text-white font-semibold text-lg leading-tight tracking-wide">{name}</h4>
                            <p className="role text-zinc-500 text-sm mt-1">{role}</p>
                        </div>
                    </div>

                    {/* Quote Icon */}
                    <span
                        className="text-9xl font-extrabold"
                        style={{
                            backgroundImage: 'linear-gradient(to bottom right, #FDE68A, #8B5CF6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        “
                    </span>
                </div>

                {/* Testimonial Text */}
                <p className="text-zinc-400 leading-relaxed text-[15px] md:text-base font-light">
                    {text}
                </p>
            </div>
        </div>
    );
};

export default TestimonialCard;