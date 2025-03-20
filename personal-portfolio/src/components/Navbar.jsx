import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  
  // handle? body overflow when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);
  
  // Add scroll effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // track active section
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handleSectionVisibility = () => {
      const sections = ["home", "about", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      }) || "home";
      
      setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleSectionVisibility);
    return () => window.removeEventListener("scroll", handleSectionVisibility);
  }, []);
  
  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#projects", text: "Projects" },
    { href: "#contact", text: "Contact" }
  ];
  
  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      scrolled ? "bg-purple-900/95 shadow-lg py-2" : "bg-black py-4"
    } backdrop-blur-lg border-b border-white/10`}>
      <div className="w-full">
        <div className="flex justify-between items-center px-4 md:px-8 lg:px-12">
          <a 
            href="#home" 
            className="font-mono text-4xl font-bold text-white hover:scale-105 transition-transform"
          >
            hemani <span className="text-purple-300">alaparthi</span>
          </a>

          {/* mobile menu button */}
          <button 
            className="w-10 h-10 text-white focus:outline-none md:hidden flex items-center justify-center"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}>
              <span className={`block w-full h-0.5 bg-white mb-1.5 transition-all ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className="block w-full h-0.5 bg-white mb-1.5"></span>
              <span className={`block w-full h-0.5 bg-white transition-all ${menuOpen ? "-rotate-90 -translate-y-1.5" : ""}`}></span>
            </div>
          </button>

          {/* mobile menu */}
          <div className={`fixed inset-0 bg-purple-900/98 flex-col items-center justify-center text-center ${
            menuOpen ? "flex" : "hidden"
          } md:hidden`}>
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className={`text-3xl font-medium py-4 ${
                  activeSection === link.href.substring(1) 
                    ? "text-white" 
                    : "text-purple-300"
                } hover:text-white transition-colors`}
                onClick={() => setMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
          </div>

          {/* desktop menu */}
          <div className="text-2xl hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className={`relative font-medium group ${
                  activeSection === link.href.substring(1)
                    ? "text-white" 
                    : "text-purple-300"
                } hover:text-white transition-colors`}
              >
                {link.text}
                <span className={`h-0.5 bg-purple-300 absolute bottom-0 left-0 transition-all duration-300 ${
                  activeSection === link.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </a>
            ))}
            
            <a 
              href="/resume.pdf" 
              className="px-4 py-2 bg-purple-500 hover:bg-purple-400 text-white rounded-md font-medium transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};