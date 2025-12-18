
const AnimatedBorder = ({
    children,
    className = "",
    containerClassName = "",
    duration = "4s"
}) => {
    return (
        <div className={`relative inline-flex overflow-hidden rounded-full p-[1.5px] ${className}`}>
            {/* The Animated Gradient Layer */}
            <span
                className="absolute inset-[-1000%] animate-[spin_var(--duration)_linear_infinite]"
                style={{
                    '--duration': duration,
                    backgroundImage: 'conic-gradient(from 90deg at 50% 50%, #FDE68A 0%, #8B5CF6 50%, #FDE68A 100%)'
                }}
            />

            {/* The Inner Content Container */}
            <div className={`inline-flex h-full w-full items-center justify-center rounded-full bg-[#121212] backdrop-blur-3xl ${containerClassName}`}>
                {children}
            </div>
        </div>
    );
};

export default AnimatedBorder;