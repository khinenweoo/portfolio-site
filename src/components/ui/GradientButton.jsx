const GradientButton = ({ children, className = "", onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`
        flex items-center justify-center
        rounded-full
        bg-linear-to-r from-[#A78BFA] to-[#FDE68A] 
        text-black font-medium
        transition-transform hover:scale-105 active:scale-95 
        ${className}
      `}
        >
            {children}
        </button>
    );
};
export default GradientButton;