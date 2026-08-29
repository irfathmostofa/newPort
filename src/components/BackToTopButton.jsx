import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed bottom-5 right-5 z-[1000] w-12 h-12 rounded-full bg-[#F7AB0A] text-black shadow-lg shadow-black/30 flex items-center justify-center transition-all duration-300 hover:bg-amber-500 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7AB0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#242424] ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
};

export default BackToTopButton;
