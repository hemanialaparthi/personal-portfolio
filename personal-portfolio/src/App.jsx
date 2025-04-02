import { useState } from 'react';
import './App.css'
import { LoadingScreen } from '../../personal-portfolio/src/components/LoadingScreen'
import { Navbar } from '../../personal-portfolio/src/components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import "./index.css";
import { Home } from '../../personal-portfolio/src/components/sections/home';
import { About } from '../../personal-portfolio/src/components/sections/About';
import { Projects } from '../../personal-portfolio/src/components/sections/Projects';
import { Contact } from '../../personal-portfolio/src/components/sections/Contact';

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
    <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-auto text-gray-100`}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
    </>
  )
}

export default App
