export default function Footer() {
  return (
    <footer id="contact" className="text-white py-8">
      <div className="max-w-6xl mx-auto text-center px-4">
        <p className="text-lg mb-2">Contact us at <a href="mailto:angelostate.csclub@gmail.com">angelostate.csclub@gmail.com</a></p>
        <p className="text-sm opacity-75">
          © {new Date().getFullYear()} Angelo State CS Club
        </p>
      </div>
    </footer>
  );
}
