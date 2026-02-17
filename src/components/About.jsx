import { useEffect, useState } from "react";
import ImageScroller from "./ImageScroller";
import Calendar from "./Calendar";
import Announcements from "./Announcements";

export default function About({ aboutText }) {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector("header");
    if (!navbar) return;

    const updateHeight = () => {
      setNavbarHeight(navbar.offsetHeight + 20);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <>
      <div
        className="max-w-4xl mx-auto px-4 flex-1 flex flex-col justify-evenly"
        style={{ marginTop: `${navbarHeight}px` }}
      >
        <section id="about" className="pb-10">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">About Us</h3>
          <p className="leading-relaxed text-sm sm:text-base">
            {aboutText}
          </p>
        </section>

        <Announcements />

        <Calendar />
      </div>

      <ImageScroller />
    </>
  );
}