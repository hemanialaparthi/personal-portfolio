export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent leading-right">
                        Hemani Alaparthi
                    </span>
                </h1>

                <p className="text-black text-lg mb-8 max-w-lg mx-auto">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book.
                </p>

                <div className="flex justify-center space-x-4">
                    <a
                        href="#projects"
                        className="bg-[#7004F4] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(112,4,244,0.4)]"
                    >
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="border border-[#47049B]/50 text-[#47049B] py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(71,4,155,0.2)] hover:bg-[#47049B]/10"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
};