export const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 md:py-0 md:min-h-screen relative overflow-hidden bg-black"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>

      {/* Left Section: Text */}
      <div className="text-left z-10 max-w-xl">
        <div className="flex items-center mb-4">
          <div className="h-10 w-1 bg-gradient-to-b from-purple-500 to-pink-500 mr-4"></div>
          <p className="text-gray-300 font-medium">Full Stack Developer</p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent leading-right">
            Hemani Alaparthi
          </span>
        </h1>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen
          book.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            href="#projects"
            className="bg-[#7004F4] text-white py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(112,4,244,0.4)] flex items-center justify-center group"
          >
            View Projects
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>

          <a
            href="#contact"
            className="border border-[#B296DC] text-[#B296DC] py-3 px-8 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(178,150,220,0.2)] hover:bg-[#B296DC]/10 flex items-center justify-center group"
          >
            Contact Me
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 items-center">
          <p className="text-gray-400 text-sm mr-2">Connect with me:</p>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Right Section: Image with animated border */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
        <div className="relative">
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-spin-slow opacity-70 blur-sm"></div>
          
          {/* Profile image */}
          <div className="relative rounded-full bg-white p-2 shadow-xl">
            <img
              src="/api/placeholder/400/400"
              alt="Hemani Alaparthi"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Add a custom CSS class for the slow spin animation */}
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
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
};