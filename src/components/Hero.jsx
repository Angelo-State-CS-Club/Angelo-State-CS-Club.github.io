import { useEffect, useState, useRef } from 'react';

/**
 * Hero component with full-viewport CSS Grid layout,
 * typewriter animation, and scroll-triggered sticky header.
 */
export default function Hero({ aboutText }) {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = 'Computer Science Club';
    const heroRef = useRef(null);

    // Typewriter effect
    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                // Keep cursor blinking after typing completes
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    // Blinking cursor effect
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);

        return () => clearInterval(cursorInterval);
    }, []);

    const scrollToContent = () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            ref={heroRef}
            className="hero-section"
        >
            {/* Background overlay for better text readability */}
            <div className="hero-overlay"></div>

            {/* Content container */}
            <div className="hero-content">
                <h1 className="hero-title">
                    {displayText}
                    <span className={`hero-cursor ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                </h1>

                <p className="hero-tagline">
                    Innovate. Collaborate. Code.
                </p>

                <p className="hero-description">
                    {aboutText}
                </p>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={scrollToContent}
                className="hero-scroll-indicator"
                aria-label="Scroll to content"
            >
                <div className="scroll-arrow"></div>
                <span className="scroll-text">Explore</span>
            </button>
        </section>
    );
}
