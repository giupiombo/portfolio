import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useRef } from 'react';

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();

  return (
    <>
      <Header homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} />
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Footer />
    </>
  );
}

export default App;
