import classes from './Projects.module.css';
import learnly from '../../images/learnly.png';
import { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
  return (
    <div className={classes.projects} ref={ref}>
      <h1>Projects</h1>
      <img src={learnly} alt="learnly" />
      <h2>Learnly</h2>
      <p>
        Learnly is a <strong>e-learning platform</strong> that hosts several
        courses from a variety of disciplines. It was developed for a class
        project. I worked on the <strong>front-end development</strong> of this
        website.
      </p>
      <h3>Tools</h3>
      <div className={classes.tools}>
        <button>JavaScript</button>
        <button>React.js</button>
        <button>CSS</button>
        <button>Node.js</button>
        <button>Firebase</button>
      </div>
      <span></span>
      <a href="https://projectlab4-89008.web.app" target="_blank">
        <button>Website</button>
      </a>
      <a href="https://github.com/giupiombo/Learnly" target="_blank">
        <button>GitHub Repository</button>
      </a>
    </div>
  );
});

export default Projects;
