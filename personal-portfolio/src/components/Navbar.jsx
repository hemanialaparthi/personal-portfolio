import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto"
    }, [menuOpen])
    return <nav className="fixed top-0 w-full z-40 bg-purple-900 backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-monospace text-xl font-bold text-white">
                    {" "}
                    hemani <span className=" text-purple-300">alaparthi</span>{" "}
                </a>

                <div className="w-7 h-7 cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    <a href="#home" className="text-purple-300 hover:text-white transition-colors">
                        {" "}
                        Home
                    </a>
                    <a href="#about" className="text-purple-300 hover:text-white transition-colors">
                        {" "}
                        About
                    </a>
                    <a href="#projects" className="text-purple-300 hover:text-white transition-colors">
                        {" "}
                        Projects
                    </a>
                    <a href="#contact" className="text-purple-300 hover:text-white transition-colors">
                        {" "}
                        Contact
                    </a>

                </div>
            </div>
        </div>
    </nav>
}