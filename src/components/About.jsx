import { useEffect, useState } from "react";
import ImageScroller from "./ImageScroller";
import Calendar from "./Calendar";
import Announcements from "./Announcements";
import Socials from "./Socials";

export default function About() {
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
        <Socials />

        <Announcements />

        <Calendar />
      </div>

      <ImageScroller />
    </>
  );
}