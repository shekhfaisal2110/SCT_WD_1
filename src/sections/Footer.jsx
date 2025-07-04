import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Left Side */}
        <div>
          <h2 className="text-xl font-semibold">👨‍💻 Faisal Shaikh</h2>
          <p className="text-gray-400 text-sm">Frontend Developer • React.js • Tailwind CSS</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-cyan-400 text-xl">
          <a
            href="https://github.com/shekhfaisal2110"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/faisal-shaikh-3064582a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&original_referer=https%3A%2F%2Fshekhfaisal2110.github.io%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:shekhfaisal.2110@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} SkillCraft Internship Task • Built with ❤️ by Faisal
      </div>
    </footer>
  );
};

export default Footer;
