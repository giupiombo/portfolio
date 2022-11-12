import classes from './Projects.module.css';
import learnly from '../images/learnly.png';

const Projects = () => {
  return (
    <div className={classes.projects}>
      <h1>Projects</h1>
      <div className={classes.row}>
        <div className={classes.column}>
          <img src={learnly} alt="me" />{' '}
        </div>
        <div className={classes.column}>
          <h2>Learnly</h2>
          <p>
            Learnly is a <strong>e-learning platform</strong> that hosts several
            courses from a variety of disciplines. It was developed for a class
            project. I am currently working on the{' '}
            <strong>front-end development</strong> of this website.
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
          <a href="https://github.com/giupiombo/Learnly" target="_blank">
            <button>GitHub Repository</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
