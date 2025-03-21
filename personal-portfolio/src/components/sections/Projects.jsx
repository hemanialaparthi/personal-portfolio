import { RevealOnScroll } from "../RevealOnScreen";

export const Projects = () => {
  const projects = [
    {
      title: "Recipe Generator + Calorie Counter",
      description: "Utilizing APIs, this project offers college students easy recipes and automatic calorie calculations, making meal planning effortless.",
      technologies: ["Python", "APIs", "React", "Node.js", "Tailwind CSS"],
      icon: (
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
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          ></path>
        </svg>
      ),
      color: "blue",
      link: "https://github.com/hemanialaparthi/RecipeGenerator",
    },
    {
      title: "AI Health Care Bot",
      description: "With the help of APIs, this project gives a quick diagnosis of the disease based on the symptoms of the user and also provides the nearest hospital information and contact details.",
      technologies: ["Python", "OpenRouter API", "React", "Material UI", "Next.js"],
      icon: (
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
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      color: "cyan",
      link: "https://github.com/hemanialaparthi/ai-healthcare-bot",
    },
    {
      title: "NoDrunkText iMessage App + Extension",
      description: "iMessage App & Extension that helps users avoid regrettable messages by warning them when texting low-rated contacts. Syncs contact ratings and provides real-time alerts within the app for better decision-making.",
      technologies: ["Swift", "Xcode", "UserDefaults", "App Groups"],
      icon: (
        <svg
          className="w-6 h-6 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          ></path>
        </svg>
      ),
      color: "purple",
      link: "https://github.com/Danniyb/cookery",
    },
    {
      title: "Flappy Bird Mod",
      description: "A fun flappy bird game clone but with an addition of a mod which involves potions (like Minecraft).",
      technologies: ["Python", "PyGame"],
      icon: (
        <svg
          className="w-6 h-6 text-pink-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          ></path>
        </svg>
      ),
      color: "pink",
      link: "https://github.com/hemanialaparthi/FlappyBirdMod",
    },
  ];

  // Function to get the appropriate color classes based on project color
  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bgLight: "bg-blue-500/5",
        textColor: "text-blue-400",
        hoverBg: "hover:bg-blue-500/20",
        hoverShadow: "hover:shadow-blue-500/10",
        borderHover: "hover:border-blue-500/50",
        hoverText: "group-hover:text-blue-300",
      },
      cyan: {
        bgLight: "bg-cyan-500/5",
        textColor: "text-cyan-400",
        hoverBg: "hover:bg-cyan-500/20",
        hoverShadow: "hover:shadow-cyan-500/10",
        borderHover: "hover:border-cyan-500/50",
        hoverText: "group-hover:text-cyan-300",
      },
      purple: {
        bgLight: "bg-purple-500/5",
        textColor: "text-purple-400",
        hoverBg: "hover:bg-purple-500/20",
        hoverShadow: "hover:shadow-purple-500/10",
        borderHover: "hover:border-purple-500/50",
        hoverText: "group-hover:text-purple-300",
      },
      pink: {
        bgLight: "bg-pink-500/5",
        textColor: "text-pink-400",
        hoverBg: "hover:bg-pink-500/20",
        hoverShadow: "hover:shadow-pink-500/10",
        borderHover: "hover:border-pink-500/50",
        hoverText: "group-hover:text-pink-300",
      },
    };
    return colorMap[color];
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-32 bg-black relative overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <h2 className="text-5xl font-bold mb-24 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <RevealOnScroll key={index}>
                <div
                  className="rounded-2xl p-10 border border-white/5 backdrop-blur-sm bg-gray-800/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-8">
                    <div className={`p-4 ${colors.bgLight} rounded-xl mr-5`}>
                      {project.icon}
                    </div>
                    <h3
                      className={`text-2xl font-bold ${colors.textColor} ${colors.hoverText} transition-colors`}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`${colors.bgLight} ${colors.textColor} py-2 px-4 rounded-full text-sm ${colors.hoverBg} hover:shadow-lg transition-all duration-300 font-medium tracking-wide`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-start pt-2">
                    <a
                      href={project.link} // Use the link property here
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${colors.textColor} hover:${colors.hoverText.replace(
                        "group-hover:",
                        ""
                      )} transition-colors flex items-center group text-lg`}
                    >
                      <span>View Project</span>
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};