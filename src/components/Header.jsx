export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white p-4 z-50 shadow-md">
      <nav className="flex justify-between max-w-5xl mx-auto">
        <span className="font-bold text-lg">Diogo Lima</span>
        <ul className="flex gap-4 text-sm">
          <li><a href="#projects" className="hover:underline">PROJECTS</a></li>
          <li><a href="#about" className="hover:underline">ABOUT ME</a></li>
          <li><a href="#contact" className="hover:underline">CONTACTS</a></li>
        </ul>
      </nav>
    </header>
  );
}
