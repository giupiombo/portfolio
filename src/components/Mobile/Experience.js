import classes from './Experience.module.css';
import { forwardRef } from 'react';

const Experience = forwardRef((props, ref) => {
  return (
    <div className={classes.experience} ref={ref}>
      <h1>Experience</h1>
      <h2>Stefanini</h2>
      <h3>Software Developer - 2023</h3>
      <p>
        Developing an UI to visualize the system health of AWS Lambda Functions.
      </p>
      <button>AWS</button>
      <button>Postman</button>
      <button>React.js</button>
      <button>CSS</button>
      <h2>Tableau</h2>
      <h3>Software Engineer Intern - 2022</h3>
      <p>
        Created several custom dashboards with graphs and tables that allows the
        team to easily track down email notifications and quickly identify
        potential issues.
      </p>
      <button>AWS S3 bucket</button>
      <button>Snowflake</button>
      <button>Tableau Cloud</button>
      <h2>Texas Tech University</h2>
      <h3>Undergraduate Student Researcher - 2020-2022</h3>
      <p>
        Developed a cost-efficient hand prosthetics controlled by voice commands
        together with a Ph.D student.
      </p>
      <button>Arduino Uno</button>
      <button>Servo Motor</button>
      <button>Google AMR Voice Command App</button>
      <h2>Resource IT Solutions</h2>
      <h3>Intern - 2019</h3>
      <p>
        Improved code quality for the APIs from Movida Car Rental by extensively
        debugging in pair programming, and expanded the project documentation.
      </p>
      <button>Java</button>
      <button>HTML</button>
      <button>CSS</button>
    </div>
  );
});

export default Experience;
