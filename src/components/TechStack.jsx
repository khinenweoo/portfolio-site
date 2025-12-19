import { motion } from 'framer-motion';
import { GoNorthStar } from 'react-icons/go';

const TechStack = () => {
    return (
        <div className='relative w-full border-t border-b border-[#666] backdrop-blur-sm px-4 sm:px-12 lg:px-24 xl:px-40'>

            {/* Tech stack items using CSS Grid - 7 columns layout */}
            <div className='relative grid grid-cols-8 items-center max-sm:gap-6 lg:gap-20 py-6'>
                {/* Framer */}
                <div className='col-span-1 flex justify-start'>
                    <motion.div className='text-gray-200 text-sm font-medium'>
                        Framer
                    </motion.div>
                </div>

                {/* Star Icon */}
                <div className='col-span-1 flex justify-start'>
                    <GoNorthStar className='w-6 h-6' color='#b59feb' />
                </div>

                {/* Webflow */}
                <div className='col-span-1 flex justify-start'>
                    <motion.div className='text-gray-200 text-sm font-medium'>
                        Webflow
                    </motion.div>
                </div>

                {/* Star Icon */}
                <div className='col-span-1 flex justify-start'>
                    <GoNorthStar className='w-6 h-6' color='#b59feb' />
                </div>

                {/* Figma */}
                <div className='col-span-1 flex justify-start'>
                    <motion.div className='text-gray-200 text-sm font-medium'>
                        Figma
                    </motion.div>
                </div>

                {/* Star Icon */}
                <div className='col-span-1 flex justify-start'>
                    <GoNorthStar className='w-6 h-6' color='#b59feb' />
                </div>

                {/* Notion */}
                <div className='col-span-1 flex justify-start'>
                    <motion.div className='text-gray-200 text-sm font-medium'>
                        Notion
                    </motion.div>
                </div>
                {/* Star Icon */}
                <div className='col-span-1 flex justify-start'>
                    <GoNorthStar className='w-6 h-6' color='#b59feb' />
                </div>
            </div>
        </div>
    );
};
export default TechStack