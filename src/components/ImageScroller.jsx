import { useRef, useEffect, useCallback } from 'react';

// Import all images from the assets/images folder
// Just drop new .jpg/.jpeg/.png/.webp files in src/assets/images/ — no code changes needed
const imageModules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp}', { eager: true });
const images = Object.values(imageModules).map((mod) => mod.default);

/** Pixels per second — adjust to taste */
const SCROLL_SPEED = 60;

/**
 * Infinite scroll image gallery component.
 * Uses requestAnimationFrame for consistent scroll speed
 * regardless of image load timing or element width.
 */
export default function ImageScroller() {
    const scrollerRef = useRef(null);
    const offsetRef = useRef(0);
    const prevTimeRef = useRef(null);
    const rafRef = useRef(null);

    // Duplicate images for seamless infinite scroll
    const scrollerImages = [...images, ...images, ...images];

    const tick = useCallback((timestamp) => {
        if (prevTimeRef.current === null) {
            prevTimeRef.current = timestamp;
        }

        const delta = (timestamp - prevTimeRef.current) / 1000; // seconds
        prevTimeRef.current = timestamp;

        const el = scrollerRef.current;
        if (el) {
            offsetRef.current += SCROLL_SPEED * delta;

            // One-third of scroll width = one full set of images (since we have 3 copies)
            const oneSetWidth = el.scrollWidth / 3;
            if (oneSetWidth > 0 && offsetRef.current >= oneSetWidth) {
                offsetRef.current -= oneSetWidth;
            }

            el.style.transform = `translateX(-${offsetRef.current}px)`;
        }

        rafRef.current = requestAnimationFrame(tick);
    }, []);

    useEffect(() => {
        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [tick]);

    return (
        <section className="py-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Club Highlights</h2>
            <div className="scroller">
                <div className="scroller-inner" ref={scrollerRef}>
                    {scrollerImages.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Club activity ${(index % images.length) + 1}`}
                            className="h-40 sm:h-48 md:h-56 rounded-lg shadow-md object-cover"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
