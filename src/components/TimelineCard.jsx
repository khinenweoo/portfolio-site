import AnimatedBorder from "./ui/AnimatedBorder";

const TimelineCard = ({
    number,
    title,
    description,
    isLastStep,
    showButton = false,
    iconImage,
}) => {
    return (
        <div className="flex gap-8 relative">
            {/* Left Column: Number and Line */}
            <div className="flex flex-col items-center shrink-0">
                {/* Number Circle */}
                <div className="w-12 h-12 rounded-full border-2 border-[#bdacc4] flex items-center justify-center text-white font-medium z-10 relative">
                    {number}
                </div>
                {/* Connecting Line - only show if not the last step */}
                {!isLastStep && (
                    <div className="w-[1px] bg-purple-300 flex-grow absolute" style={{ top: '4rem', height: 'calc(100% - (4rem + 18px))' }}></div>
                )}
            </div>

            {/* Right Column: Content */}
            <div className="step-card flex flex-col items-start pb-12 pt-2">
                {/* Render the SVG Icon */}
                <div className="mb-4">
                    <img src={iconImage} alt="step icon" className="w-10 h-10" />
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-semibold mb-3">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed max-w-lg mb-6">
                    {description}
                </p>

                {/* Optional Gradient Button */}
                {showButton && (
                    <AnimatedBorder>
                        <button className="relative rounded-full cursor-pointer">
                            <div className="relative px-6 py-2 rounded-full transition group-hover:bg-opacity-90">
                                <span className="text-sm font-medium text-white">
                                    See Examples
                                </span>
                            </div>
                        </button>
                    </AnimatedBorder>
                )}
            </div>
        </div>
    );
};

export default TimelineCard;