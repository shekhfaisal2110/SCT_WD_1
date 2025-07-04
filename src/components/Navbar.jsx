import { useEffect, useRef, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle scroll for background blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const navItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0f0f0f]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold">👨‍💻 Faisal Dev</h1>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </div>

        {/* Nav Items */}
        <ul
          ref={menuRef}
          className={`md:flex gap-8 font-medium absolute md:static left-0 w-full md:w-auto top-16 bg-[#121212] md:bg-transparent px-6 md:px-0 py-4 md:py-0 transition-all duration-300 ${
            open ? 'block' : 'hidden md:flex'
          }`}
        >
          {navItems.map((item) => (
            <li key={item} className="group relative py-2 md:py-0">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setOpen(false)} // 👈 Closes menu on click
              >
                {item}
              </a>
              <span className="block h-0.5 max-w-0 bg-cyan-400 transition-all duration-300 group-hover:max-w-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
