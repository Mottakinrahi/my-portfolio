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
        <section id="skills">
          <Skills />
        </section>
<section id="competitive">
   <Competitive/> </section>

      <section id="education">
          <Education />
        </section>
        <section id="courses">
          <Courses />
        </section>
       <section id="contact">
          <Contact />
        </section>
    </>
  );
}

