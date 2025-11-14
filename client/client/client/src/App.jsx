import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiances from "./sections/Experiances";
import Contact from "./sections/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="overflow-x-hidden w-full">
      <Toaster />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Experiances />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
