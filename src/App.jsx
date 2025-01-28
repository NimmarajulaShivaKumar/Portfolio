import "./App.css";
import Header from "./Components/Header/Header";
import Cover from "./Components/Cover/Cover";
import Skills from "./Components/Skills/Skills";
import AboutMe from "./Components/AboutMe/AboutMe";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section id="home">
          <Cover />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
