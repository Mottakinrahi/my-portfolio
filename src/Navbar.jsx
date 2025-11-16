import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Competitive", href: "#competitive" },
    { name: "Education", href: "#education" },
    { name: "Courses", href: "#courses" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll listener to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((sec, idx) => {
        if (sec.offsetTop <= scrollPos && scrollPos < sec.offsetTop + sec.offsetHeight) {
          setActiveSection(navItems[idx].name);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to section
  const scrollToSection = (href) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 bg-black/60 backdrop-blur-md border-b border-white/10 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1
          className="text-2xl font-bold text-blue-400 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Mottakin Kamal Rahi
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg text-white">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`hover:text-blue-400 transition cursor-pointer ${
                activeSection === item.name ? "text-blue-400 font-semibold" : ""
              }`}
              onClick={() => scrollToSection(item.href)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-lg text-white text-center py-4 text-xl space-y-4 overflow-hidden"
          >
            {navItems.map((item) => (
              <li
                key={item.name}
                className="hover:text-blue-400 transition cursor-pointer"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

