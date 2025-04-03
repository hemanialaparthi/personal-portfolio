import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle body overflow when menu is open
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
  
  // Track active section
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
  
  // Using consistent color theme
  const bgColor = "bg-black";
  const accentColor = "text-purple-400";
  const hoverAccentColor = "text-purple-300";
  const buttonBgColor = "bg-purple-500";
  const buttonHoverBgColor = "bg-purple-400";
  
  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      scrolled ? `${bgColor} bg-opacity-90 shadow-lg py-2` : `${bgColor} py-4`
    } backdrop-blur-lg border-b border-white/10`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4 md:px-6 lg:px-8">
          <a 
            href="#home" 
            className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-white hover:scale-105 transition-transform"
          >
            hemani <span className={accentColor}>alaparthi</span>
          </a>

          {/* Mobile menu button */}
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

          {/* Mobile menu */}
          <div className={`fixed inset-0 ${bgColor} bg-opacity-98 flex-col items-center justify-center text-center ${
            menuOpen ? "flex" : "hidden"
          } md:hidden`}>
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className={`text-2xl sm:text-3xl font-medium py-3 sm:py-4 ${
                  activeSection === link.href.substring(1) 
                    ? "text-white" 
                    : accentColor
                } hover:text-white transition-colors`}
                onClick={() => setMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
            
            <a 
              href="/Alaparthi_Hemani_Resume.pdf"
              className={`mt-6 px-4 py-2 ${buttonBgColor} hover:${buttonHoverBgColor} text-white rounded-md font-medium transition-colors`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          {/* Desktop menu */}
          <div className="text-lg lg:text-xl xl:text-2xl hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className={`relative font-medium group ${
                  activeSection === link.href.substring(1)
                    ? "text-white" 
                    : accentColor
                } hover:text-white transition-colors`}
              >
                {link.text}
                <span className={`h-0.5 ${buttonBgColor} absolute bottom-0 left-0 transition-all duration-300 ${
                  activeSection === link.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </a>
            ))}
            
            <a 
              href="/302-webportfolio/Alaparthi_Hemani_Resume.pdf"
              className={`px-3 py-1.5 lg:px-4 lg:py-2 ${buttonBgColor} hover:${buttonHoverBgColor} text-white rounded-md font-medium transition-colors`}
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