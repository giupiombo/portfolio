import Home from './Home';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import { useRef } from 'react';
import Experience from './Experience';

function DesktopView() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const projectsRef = useRef();

  return (
    <>
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        experienceRef={experienceRef}
        projectsRef={projectsRef}
      />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Experience ref={experienceRef} />
      <Projects ref={projectsRef} />
      <Footer />
    </>
  );
}

export default DesktopView;
