import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to toggle sticky header appearance
  useEffect(() => {
    const handleScroll = () => {
      // Collapse navbar after scrolling a small amount
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-gray-900 shadow-lg py-2'
        : 'bg-gray-900 py-4'
        }`}
    >
      <div className="relative w-full mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {/* Logo - left side */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 sm:left-4 md:left-6 lg:left-12">
            <a href="#top">
              <img
                src={`${import.meta.env.BASE_URL}/favicon.png`}
                alt="CS Club logo"
                className={`transition-all duration-300 ${isScrolled
                  ? 'h-8 w-8'
                  : 'h-10 w-10 sm:h-12 sm:w-12'
                  }`}
              />
            </a>
          </div>

          {/* Title - center */}
          <div className={`text-center transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'
            }`}>
            <h1 className={`font-bold text-white transition-all duration-300 ${isScrolled
              ? 'text-base sm:text-lg md:text-xl'
              : 'text-lg sm:text-xl md:text-2xl lg:text-3xl'
              }`}>
              Computer Science Club
            </h1>
            <p className={`text-yellow-300 transition-all duration-300 ${isScrolled
              ? 'hidden'
              : 'hidden sm:block text-xs sm:text-sm md:text-base'
              }`}>
              Innovate. Collaborate. Code.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}