import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScreen";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch(() => {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-32 bg-black relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full opacity-15 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full opacity-15 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <RevealOnScroll>
        <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-20 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information */}
            <div className="rounded-2xl p-12 border border-white/5 backdrop-blur-sm bg-gray-800/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group">
              <div className="flex items-center mb-10">
                <div className="p-5 bg-purple-500/5 rounded-xl mr-5">
                  <svg
                    className="w-8 h-8 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">
                  Contact Information
                </h3>
              </div>

              <div className="space-y-10 text-gray-300 mb-12">
                <div className="flex items-start">
                  <div className="p-3 bg-purple-500/5 rounded-lg mr-5">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-xl mb-2">
                      Email
                    </h4>
                    <p className="text-purple-300 text-lg">
                      <a href="mailto:hemanialaparthi@gmail.com">
                        hemanialaparthi@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-purple-500/5 rounded-lg mr-5">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-xl mb-2">
                      Location
                    </h4>
                    <p className="text-purple-300 text-lg">
                      Pittsburgh, PA, USA
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-purple-500/5 rounded-lg mr-5">
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
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-xl mb-2">
                      Work Status
                    </h4>
                    <p className="text-purple-300 text-lg">
                      Open to Opportunities!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl p-12 border border-white/5 backdrop-blur-sm bg-gray-800/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <div className="flex items-center mb-10">
                <div className="p-5 bg-blue-500/5 rounded-xl mr-5">
                  <svg
                    className="w-8 h-8 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                  Send a Message
                </h3>
              </div>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="Your Name"
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="Your Email"
                  />
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="7"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-white text-lg transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-5 px-8 rounded-lg font-medium text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(59,130,246,0.4)] flex items-center justify-center group"
                >
                  {isSubmitting ? (
                    <svg
                      className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform"
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
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="mt-6 py-4 px-5 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-lg">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mt-6 py-4 px-5 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-lg">
                    Oops! Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};