import { useEffect, useRef, useState } from "react";

const imageModules = import.meta.glob(
  "/src/assets/images/*.{jpg,jpeg,png,gif,webp}",
  { eager: true }
);

const imageUrls = Object.values(imageModules).map(mod => mod.default);

export default function ImageScroller() {
  const innerRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const imgs = Array.from(inner.querySelectorAll("img"));
    let loaded = 0;

    const onLoad = () => {
      loaded++;
      if (loaded === imgs.length) {
        const clone = inner.cloneNode(true);
        inner.append(...Array.from(clone.children));

        void inner.offsetWidth;

        const oneSetWidth = inner.scrollWidth / 2;
        inner.style.animationDuration = `${oneSetWidth / 40}s`;
        setReady(true);
      }
    };

    imgs.forEach((img) => {
      if (img.complete) onLoad();
      else img.addEventListener("load", onLoad);
    });

    return () => {
      imgs.forEach((img) => img.removeEventListener("load", onLoad));
    };
  }, []);

  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <div className="scroller">
        <div
          className={`scroller-inner ${ready ? "" : "opacity-0"}`}
          ref={innerRef}
          style={{ animationPlayState: ready ? "running" : "paused" }}
        >
          {imageUrls.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}