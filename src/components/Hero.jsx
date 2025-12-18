import { motion } from 'framer-motion';
import StarShape from './ui/StarShape';

const Hero = () => {
  return (
    <div id='hero' className='w-full flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40'>
        <div className="relative w-full h-screen overflow-hidden z-0">
              {/* Grid Background */}
              <div
                  className="absolute inset-0 opacity-20"
                  style={{
                      backgroundImage: `
                    linear-gradient(to right, #666 1px, transparent 1px),
                    linear-gradient(to bottom, #666 1px, transparent 1px)
                    `,
                    backgroundSize: '171.5px 90px'
                  }}
              />
              {/* Star element */}
              {/* Star 1 */}
              <div className="absolute top-[50%] left-[1%] -translate-x-1/2 -translate-y-1/2">
                  <StarShape className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              </div>
              {/* Star 2 */}
        <div className="absolute top-[15%] right-[16%] -translate-x-1/2 -translate-y-1/2">
                  <StarShape className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              </div>

              {/* content */}
        <div className='w-full max-w-2xl py-14 mx-auto h-1/2 translate-y-1/2 bg-[#101111] rounded-md'>
                <div className="relative flex flex-col items-center justify-center">
                    <motion.h1
                        className="text-white text-3xl font-semibold text-center mb-6 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        I design and build clean websites
                    </motion.h1>

                    <motion.p
                        className="text-gray-100 text-center max-w-2xl mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        Experienced software developer skilled in <br />
                        writing clean, efficient code with a proven track<br />
                        record of building impactful web applications.
                    </motion.p>
                </div>
              </div>
        </div>

    </div>
  )
}

export default Hero