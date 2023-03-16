import classes from './About.module.css';
import { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  return (
    <div className={classes.about} ref={ref}>
      <h1>About Me</h1>
      <div className={classes.row}>
        <div className={classes.column}>
          <div className={classes.margin}>
            <h2>A little bit about myself!</h2>
            <p>
              I am originally from <strong>São Paulo, Brazil</strong>. I moved
              to the United States in 2019 to pursue my bachelor's degree in{' '}
              <strong>Computer Engineering</strong> at{' '}
              <strong>Texas Tech University</strong>. I am the co-founder and
              former president of <strong>BRASA at Tech</strong>, a Brazilian
              student organization at the university. The organization's goal is
              to connect Brazilian students, promote our culture, and support
              volunteering activities to help our local community.
            </p>
            <p>
              Proactive <strong>Software Engineer</strong> passionate about
              applying my academic knowledge in a practical and efficient way to
              develop purposeful software. Eager to learn new industry best
              practices to improve software development.
            </p>
            <h3 className={classes.facts}>Fun facts</h3>
            <li>
              I have a 1 year old cat called Stella. I adopted her when she was
              5 weeks old at the shelter.
            </li>
            <li>
              When I was younger I used to draw and paint. I still like to do it
              when I have some spare time.
            </li>
            <li>
              Sports have always been part of my life. Every since I was young I
              used to swim and play soccer. Nowadays I like hiking, boxing and
              muay-thai.
            </li>
          </div>
        </div>
        <div className={classes.column}>
          <h2>Technical Skills</h2>
          <h3>Programming</h3>
          <button>JavaScript</button>
          <button>TypeScript</button>
          <button>React.js</button>
          <button>Next.js</button>
          <button>HTML</button>
          <button>CSS</button>
          <button>Java</button>
          <button>Python</button>
          <h3>Database</h3>
          <button>Snowflake</button>
          <button>Firebase</button>
          <button>MongoDB</button>
          <h3>Software</h3>
          <button>Git</button>
          <button>GitHub</button>
          <button>AWS</button>
          <button>Figma</button>
          <button>Vercel</button>
          <button>Canva</button>
          <button>Visual Studio Code</button>
        </div>
      </div>
    </div>
  );
});

export default About;
