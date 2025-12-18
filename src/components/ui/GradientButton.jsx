const GradientButton = ({ children, className = "", onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`
        flex items-center justify-center
        rounded-full
        bg-gradient-to-r from-[#A78BFA] to-[#FDE68A] /* Soft Purple to Peach Gradient */
        text-black font-medium
        transition-transform hover:scale-105 active:scale-95 /* Subtle interaction animation */
        ${className}
      `}
        >
            {children}
        </button>
    );
};
export default GradientButton;