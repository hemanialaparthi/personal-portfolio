export const Home = () => {
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
      </div>

      {/* left section: text */}
      <div className="text-left z-10 max-w-2xl md:w-1/2 mb-16 md:mb-0">
        <div className="flex items-center mb-6">
          <div className="h-12 w-1 bg-gradient-to-b from-purple-500 to-pink-500 mr-4"></div>
          <p className="text-gray-300 font-medium tracking-wide text-lg">Full Stack Developer</p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Hemani Alaparthi
          </span>
        </h1>

        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
        Aspiring software engineer passionate about building innovative solutions. Currently pursuing a double major in Computer Science & Economics at Allegheny College.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-10">
          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-4 px-8 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(112,4,244,0.4)] flex items-center justify-center group"
          >
            View Projects
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>

          <a
            href="#contact"
            className="border border-[#B296DC] text-[#B296DC] py-4 px-8 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(178,150,220,0.2)] hover:bg-[#B296DC]/10 flex items-center justify-center group backdrop-blur-sm"
          >
            Contact Me
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </a>
        </div>

        {/* social media icons */}
        <div className="flex items-center">
          <p className="text-gray-400 text-base mr-4">Connect with me:</p>
          <div className="flex space-x-6">
            <a href="https://github.com/hemanialaparthi" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:-translate-y-1 hover:scale-110 duration-300">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/hemanialaparthi/" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:-translate-y-1 hover:scale-110 duration-300">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://stackoverflow.com/users/25577383/hemani" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:-translate-y-1 hover:scale-110 duration-300">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.783 19.823V14.87h1.923v6.899H3.294V14.87h1.923v4.953h12.566zM8.065 14.416l7.521 1.566.405-1.876-7.521-1.566-.405 1.876zm1.383-4.062l6.951 3.285.809-1.74-6.951-3.285-.809 1.74zm2.542-4.307l5.874 4.979 1.246-1.479-5.874-4.979-1.246 1.479zM17.148 0l-1.494 1.127 4.655 6.168 1.494-1.127L17.148 0zM6.823 17.702h7.692v-1.923H6.823v1.923z"/>
              </svg>
            </a>
            <a href="https://leetcode.com/u/hemanialaparthi/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:-translate-y-1 hover:scale-110 duration-300">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.92 3.377c.503-.507 1.322-.507 1.825 0l3.394 3.397c.504.506.504 1.328 0 1.833l-1.817 1.822c-.49.492-1.283.496-1.778.008a1.24 1.24 0 01-.004-1.768l.905-.91L9.92 5.202c-.5-.506-.5-1.325 0-1.825zm4.16 8.087c.495-.489 1.288-.484 1.778.008l5.293 5.3c.506.507.506 1.328 0 1.835l-5.293 5.298c-.495.492-1.283.488-1.778-.008a1.24 1.24 0 01-.004-1.766l.905-.91-1.824-1.826c-.504-.504-.504-1.326 0-1.832l1.824-1.826-.905-.91a1.24 1.24 0 01.004-1.766zm-5.95 8.72c-.504-.506-.504-1.328 0-1.834l1.824-1.826-.905-.91a1.24 1.24 0 01.004-1.766c.495-.489 1.288-.484 1.778.008l1.824 1.826c.504.506.504 1.328 0 1.832l-1.824 1.826.905.91c.5.506.5 1.325 0 1.825-.495.496-1.283.5-1.778.008l-3.393-3.397z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* right section: image with enhanced animated border */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative">
        <div className="relative">
          {/* multi-layered animated gradient borders */}
          <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin-slow opacity-70 blur-sm"></div>
          <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow-reverse opacity-50 blur-sm" style={{transform: 'scale(1.05)'}}></div>
          
          {/* profile image with subtle shadow */}
          <div className="relative rounded-full bg-gradient-to-b from-gray-900 to-black p-3 shadow-2xl">
            <img
              src="/hemani3.png"
              alt="Hemani Alaparthi"
              className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover"
            />
            
            {/* decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-full opacity-60 blur-sm animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-purple-500 rounded-full opacity-60 blur-sm animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          </div>
        </div>
      </div>

      {/* add custom CSS classes for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 18s linear infinite;
        }
      `}</style>
    </section>
  );
};