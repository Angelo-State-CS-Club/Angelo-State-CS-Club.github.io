export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-10 shadow">
      <div className="relative w-full mx-auto py-3 px-4">
        <div className="text-center">
          <h1 className="">Computer Science Club</h1>
          <p className="text-white">Innovate. Collaborate. Code.</p>
        </div>

        <div className="absolute left-12 top-3/4 transform -translate-y-3/4">
          <a href="#top">
            <img src="/Angelo-State-CS-Club/favicon.png" type="image/png"></img>
          </a>
        </div>

        <nav className="absolute right-12 top-3/4 transform -translate-y-3/4 space-x-6">
          <a
            href="#about"
            className="
              inline-block px-2 py-2 rounded-md
              text-yellow-300 font-bold
              hover:text-background
              hover:bg-yellow-300 
              transition-colors duration-200
            "
          >
            About
          </a>

          <a 
            href="#officers"
            className="
              inline-block px-2 py-2 rounded-md
              text-yellow-300 font-bold
              hover:text-background
              hover:bg-yellow-300 
              transition-colors duration-200
            "
          >
            Officers
          </a>

          <a
            href="#contact"
            className="
              inline-block px-2 py-2 rounded-md
              text-yellow-300 font-bold
              hover:text-background
              hover:bg-yellow-300 
              transition-colors duration-200
            "
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
