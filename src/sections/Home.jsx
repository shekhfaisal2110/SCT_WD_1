const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-[#0f0f0f] via-[#1b1b2f] to-[#121212] text-white"
    >
      <div className="max-w-3xl w-full">
        {/* Task Badge */}
        <div className="border border-red-500 rounded-full px-6 py-2 inline-block mb-4">
          <span className="text-red-400 font-semibold tracking-wider">
            TASK 01 • RESPONSIVE LANDING PAGE
          </span>
        </div>

        {/* Developer Intro */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Hi, I'm <span className="text-cyan-400">Faisal</span> — Frontend Developer
        </h1>

        {/* Task Description */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          As part of the <span className="text-cyan-400 font-medium">SkillCraft Internship</span>, I built a fully responsive landing page
          featuring a fixed navigation menu that adapts on scroll and hover using <span className="text-cyan-400 font-medium">React.js</span> and <span className="text-cyan-400 font-medium">Tailwind CSS</span>.
        </p>

        {/* Tagline / Goal */}
        <p className="text-sm text-gray-500 mt-10">
          🚀 Crafting modern UI experiences with clean, performant code.
        </p>
      </div>
    </section>
  );
};

export default Home;
