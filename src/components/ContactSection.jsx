import React from 'react';
import StarShape from './ui/StarShape';
import { Sparkles } from 'lucide-react';


const ContactSection = () => {
    return (
        <section id='contact' className="relative w-full px-6 sm:px-12 lg:px-24 xl:px-40 min-h-screen text-white flex flex-col justify-between py-20 overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-grow">
                {/* Left Side - Content */}
                <div className="z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <h2 className="text-3xl md:text-4xl text-white tracking-tight font-semibold">
                            Have idea about project?
                        </h2>
                        <Sparkles className="text-white" size={24} />
                    </div>

                    <p className="text-zinc-400 text-lg max-w-md mb-10 leading-relaxed">
                        Write anything here something about yourself to showcase what actually you doing or targeting etc.
                    </p>

                    <button className="px-8 py-3 rounded-full text-zinc-900 font-semibold transition-transform hover:scale-105"
                        style={{ background: 'linear-gradient(to right, #8B5CF6, #FDE68A)' }}>
                        Send us a message
                    </button>
                </div>

                {/* Right Side - Custom Grid Pattern */}
                <div className="relative h-100 w-full hidden lg:block">
                    {/* Vertical Lines */}
                    <div className="absolute left-[40%] top-0 w-px h-full bg-zinc-800/50" />
                    <div className="absolute left-[60%] top-0 w-px h-full bg-zinc-800/50" />
                    <div className="absolute left-[80%] top-0 w-px h-full bg-zinc-800/50" />

                    {/* Horizontal Lines */}
                    <div className="absolute top-[40%] left-0 w-full h-[1px] bg-zinc-800/50" />
                    <div className="absolute top-[70%] left-0 w-full h-[1px] bg-zinc-800/50" />

                    {/* Intersection Stars matching screenshot */}
                    <div className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2">
                        <StarShape className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    </div>
                    <div className="absolute top-[70%] left-[80%] -translate-x-1/2 -translate-y-1/2">
                        <StarShape className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    </div>
                </div>
            </div>

            {/* Footer Area */}

        </section>
    );
};

export default ContactSection;