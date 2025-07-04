const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#181818] text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-300 mb-6">
          Have a project in mind or just want to connect? Let's build something great together!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full font-semibold transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
