import Navbar from "./components/Navbar";
import About from "./components/About";
import Officers from "./components/Officers";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="top" className="font-sans text-gray-900 bg-gray-50">
      <Navbar />
      <main className="flex flex-col">
        <About />
        <Officers />
      </main>
      <Footer />
    </div>
  );
}
