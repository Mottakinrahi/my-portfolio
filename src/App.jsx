import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Competitive from "./Competitive";
import Education from "./Education";
import Courses from "./Course";
import Contact from "./Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Competitive/>
      <Education/>
      <Courses/>
      <Contact/>
    </>
  );
}

