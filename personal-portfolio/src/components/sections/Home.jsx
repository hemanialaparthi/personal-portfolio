import React, { useState, useEffect } from 'react';

export const Home = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide indicator when user scrolls down more than 100px
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 md:py-0 md:min-h-screen relative overflow-hidden bg-black"
    >
      {/* enhanced animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        {/* Add floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* left section: text */}
      <div className="text-left z-10 max-w-2xl md:w-1/2 mb-16 md:mb-0">
        <div className="flex items-center mb-6">
          <div className="h-12 w-1 bg-gradient-to-b from-purple-500 to-pink-500 mr-4"></div>
          <p className="text-gray-300 font-medium tracking-wide text-lg animate-fade-in">Full Stack Developer</p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
          <span className="inline-block animate-slide-up">Hi, I'm</span>{" "}
          <span className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
            Hemani Alaparthi
          </span>
        </h1>

        <p className="text-gray-300 text-lg mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Aspiring software engineer passionate about building innovative solutions. Currently pursuing a double major in Computer Science & Economics at Allegheny College.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-10">
          <a
            href="#projects"
            className="group bg-gradient-to-r from-purple-600 to-blue-500 text-white py-4 px-8 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(112,4,244,0.4)] flex items-center justify-center relative overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>

          <a
            href="#contact"
            className="group border border-[#B296DC] text-[#B296DC] py-4 px-8 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(178,150,220,0.2)] hover:bg-[#B296DC]/10 flex items-center justify-center backdrop-blur-sm relative overflow-hidden"
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-[#B296DC]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </a>
        </div>

        {/* social media icons with enhanced hover effects */}
        <div className="flex items-center">
          <p className="text-gray-400 text-base mr-4">Connect with me:</p>
          <div className="flex space-x-6">
            {[
              { href: "https://github.com/hemanialaparthi", icon: "github", svgPath: "M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" },
              { href: "https://www.linkedin.com/in/hemanialaparthi/", icon: "linkedin", svgPath: "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.88-1.32 2.5-2.25 4.25-2.25 2.48 0 4.5 2.02 4.5 4.5v6.25z" },
              { href: "https://stackoverflow.com/users/25577383/hemani", icon: "stackoverflow", svgPath: "M17.45 14.86l.69-1.97-8.45-2.97-.69 1.97 8.45 2.97zm-8.45 3.14h9v-2h-9v2zm.23-6.86l7.77 4.45 1-1.73-7.77-4.45-1 1.73zm2.45-4.91l6.91 6.91 1.41-1.41-6.91-6.91-1.41 1.41zm4.91-4.91l4.91 8.45 1.73-1-4.91-8.45-1.73 1zm-9.09 15.77h12v-2h-12v2z" },
              { href: "https://leetcode.com/u/hemanialaparthi/", icon: "leetcode", svgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }
            ].map((social, index) => (
              <a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.svgPath} />
                  </svg>
                  <div className="absolute inset-0 bg-purple-400 rounded-full opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* right section: image with enhanced animated border */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative">
        <div className="relative">
          {/* multi-layered animated gradient borders */}
          <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin-slow opacity-70 blur-sm"></div>
          <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow-reverse opacity-50 blur-sm" style={{transform: 'scale(1.05)'}}></div>
          
          {/* profile image with enhanced effects */}
          <div className="relative rounded-full bg-gradient-to-b from-gray-900 to-black p-3 shadow-2xl group">
            <img
              src="../../assets/images/hemani3.jpg"
              alt="Hemani Alaparthi"
              className="w-64 h-64 md:w-[500px] md:h-[500px] rounded-full object-cover transition-all duration-500 group-hover:scale-105"
            />
            
            {/* enhanced decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-full opacity-60 blur-sm animate-pulse group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-purple-500 rounded-full opacity-60 blur-sm animate-pulse group-hover:opacity-80 transition-opacity duration-300" style={{ animationDelay: "0.5s" }}></div>
          </div>
        </div>
      </div>

      {/* Modified scroll indicator with fade out */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block transition-opacity duration-500 ${
          showScrollIndicator ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-sm mb-4 animate-fade-in">Scroll Down</span>
          <div className="relative">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-lg flex items-center justify-center animate-bounce">
              <div className="w-1 h-1 bg-gray-400 rounded-full animate-scroll"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full border-2 border-purple-500 rounded-lg opacity-0 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* add custom CSS classes for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 12s ease infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 1.2s ease-out forwards;
        }
        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(10px);
            opacity: 0.8;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }
        .animate-scroll {
          animation: scroll 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};