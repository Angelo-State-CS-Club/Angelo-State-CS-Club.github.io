import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Officers from "./components/Officers";
import Footer from "./components/Footer";

export default function App() {
  const [aboutText, setAboutText] = useState("");

  // Fetch about text from public/about.txt
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/about.txt`)
      .then((res) => res.text())
      .then((text) => setAboutText(text.trim()))
      .catch((err) => console.error("Failed to load about text:", err));
  }, []);

  return (
    <div id="top" className="font-sans text-gray-900 bg-gray-50">
      <Navbar />
      <Hero aboutText={aboutText} />
      <main className="flex flex-col justify-evenly min-h-screen">
        <About />
      </main>
      <Footer />
    </div>
  );
}
