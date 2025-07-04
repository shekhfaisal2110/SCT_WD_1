import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="bg-[#0f0f0f] text-white scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
