import {
  FaReact,
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaReact size={40} />,
    title: 'React.js Development',
    desc: 'Building fast, scalable Single Page Applications (SPAs) with component-driven architecture.',
  },
  {
    icon: <FaLaptopCode size={40} />,
    title: 'Frontend Development',
    desc: 'Crafting modern, clean user interfaces using HTML, CSS, JavaScript, and Tailwind CSS.',
  },
  {
    icon: <FaPaintBrush size={40} />,
    title: 'UI/UX Design',
    desc: 'Translating design ideas into intuitive and responsive interfaces with pixel-perfect precision.',
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: 'Mobile Responsive Design',
    desc: 'Creating layouts that adapt seamlessly across all screen sizes and devices.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-[#101010] text-white">
      <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">My Services</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          As a skilled <span className="text-cyan-400 font-semibold">React.js Frontend Developer</span>,
          I offer comprehensive frontend solutions focused on performance, clean UI, and user experience.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-[#1c1c1c] p-6 rounded-2xl shadow-md hover:shadow-cyan-500/30 transition duration-300 transform hover:-translate-y-1"
            >
              <div className="text-cyan-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
