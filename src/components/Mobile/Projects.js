import classes from './Projects.module.css';
import learnly from '../../images/learnlypage.png';
import travelstory from '../../images/travelstory.png';
import travelstory_ios from '../../images/travelstory_ios.png';
import travelstory_android from '../../images/travelstory_android.png';
import { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
  return (
    <div className={classes.projects} ref={ref}>
      <h1>Projects</h1>
      <h2>Learnly</h2>
      <img src={learnly} alt="learnly" />
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
      <hr className={classes.divider} />
      <h2>TravelStory</h2>
      <img src={travelstory} alt="travelstory" />
      <p>
        TravelStory is a <strong>blog</strong> where people can add their
        personal travel stories.
      </p>
      <h3>Tools</h3>
      <div className={classes.tools}>
        <button>TypeScript</button>
        <button>React.js</button>
        <button>Next.js</button>
        <button>CSS</button>
        <button>MongoDB</button>
        <button>Vercel</button>
      </div>
      <span></span>
      <a href="https://travel-story.vercel.app" target="_blank">
        <button>Website</button>
      </a>
      <a href="https://github.com/giupiombo/TravelStory" target="_blank">
        <button>GitHub Repository</button>
      </a>
      <hr className={classes.divider} />
      <h2>TravelStory Mobile App</h2>
      <div className={classes.row2}>
        <img src={travelstory_ios} alt="travelstory_ios" />
        <img src={travelstory_android} alt="travelstory_android" />
      </div>
      <p>
        TravelStory is a <strong>blog</strong> where people can add their
        personal travel stories.
      </p>
      <h3>Tools</h3>
      <div className={classes.tools}>
        <button>JavaScript</button>
        <button>React Native</button>
        <button>Firebase</button>
      </div>
      <span></span>
      <a href="https://github.com/giupiombo/TravelStoryApp" target="_blank">
        <button>GitHub Repository</button>
      </a>
    </div>
  );
});

export default Projects;
