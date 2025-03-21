import { RevealOnScroll } from "../RevealOnScreen";

export const About = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Python", "Java", "JavaScript", "C", "Django", "Node.js"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-32 bg-black relative overflow-hidden"
    >
      <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <h2 className="text-5xl font-bold mb-24 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* Top row: frontend and backend */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12 md:mb-16">
            {/* Frontend section */}
            <div className="rounded-2xl p-10 border border-white/5 backdrop-blur-sm bg-gray-800/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-blue-500/5 rounded-xl mr-5">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                  Frontend
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 mb-4">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/5 text-blue-400 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-lg transition-all duration-300 font-medium tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* backend section */}
            <div className="rounded-2xl p-10 border border-white/5 backdrop-blur-sm bg-gray-800/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-cyan-500/5 rounded-xl mr-5">
                  <svg
                    className="w-6 h-6 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  Backend
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 mb-4">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-cyan-500/5 text-cyan-400 py-2 px-4 rounded-full text-sm hover:bg-cyan-500/20 hover:shadow-lg transition-all duration-300 font-medium tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* bottom row: education and work experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* education section */}
            <div className="rounded-2xl p-10 border border-white/5 backdrop-blur-sm bg-gray-800/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-purple-500/5 rounded-xl mr-5">
                  <svg
                    className="w-6 h-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                  Education
                </h3>
              </div>
              <div className="space-y-6 text-gray-300">
                <div className="pl-4 border-l-2 border-purple-500/30 hover:border-purple-500 transition-colors">
                  <h4 className="font-bold text-lg text-white">
                    B.S. in Computer Science & Economics
                  </h4>
                  <p className="text-purple-300 mb-3">Allegheny College (2023-2027)</p>
                  <p className="text-gray-400 leading-relaxed">
                    <b>Relevant Coursework</b>: Data Structures, Algorithm Analysis, Web Development,
                    Software Engineering, Web Applications
                  </p>
                  <br />
                  <p className="text-gray-400 leading-relaxed">
                    <b>Certifications</b>: Software Development, Programming with Web Technologies, Certification of Design & Creativity
                  </p>
                  <br />
                  <p className="text-gray-400 leading-relaxed">
                    <b>Honors</b>: Lambda Sigma (Honors Society), Distinguished Alden Scholar (Dean's List), Emerging Leader Scholar
                  </p>
                  <br />
                  <p className="text-gray-400 leading-relaxed">
                    <b>Activities</b>: Technical Leader, Center for Economics & Business (CBE) Fellow, Resident Advisor, South Asian Student Society (SASS), International Club (IC), Honor Committee
                  </p>
                </div>
              </div>
            </div>

            {/* work experience section */}
            <div className="rounded-2xl p-10 border border-white/5 backdrop-blur-sm bg-gray-800/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <div className="flex items-center mb-8">
                <div className="p-4 bg-blue-500/5 rounded-xl mr-5">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                  Work Experience
                </h3>
              </div>
              <div className="space-y-6 text-gray-300">
                <div className="pl-4 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors">
                  <h4 className="font-bold text-lg text-white">Data Intern</h4>
                  <p className="text-blue-300 mb-3">Acutec Precision Aerospace (2024 - 2025)</p>
                  <p className="text-gray-400 leading-relaxed">
                    Developed a visual database to track defect material trends, improving
                    traceability and automating analysis for efficiency.
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors">
                  <h4 className="font-bold text-lg text-white">Website & Curriculum Developer</h4>
                  <p className="text-blue-300 mb-3">Summer Research (2024)</p>
                  <p className="text-gray-400 leading-relaxed">
                    Developed a website and coding curriculum to enhance computer literacy for K-6
                    students.
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors">
                  <h4 className="font-bold text-lg text-white">Technical Leader</h4>
                  <p className="text-blue-300 mb-3">Allegheny College (2023 - Present)</p>
                  <p className="text-gray-400 leading-relaxed">
                    Support students and faculty with interface issues, course concepts, and
                    curriculum development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};