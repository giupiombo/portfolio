import classes from './About.module.css';

const About = () => {
  return (
    <div className={classes.about}>
      <h1>About Me</h1>
      <div className={classes.row}>
        <div className={classes.column}>
          <h2>A little bit about myself!</h2>
          <p>
            I am originally from <strong>São Paulo, Brazil</strong>. I moved to
            the United States in 2019 to pursue my bachelor's degree in{' '}
            <strong>Computer Engineering</strong> at{' '}
            <strong>Texas Tech University</strong>. I am currently the
            co-founder and president of <strong>BRASA at Tech</strong>, a
            Brazilian student organization at the university. Our goal is to
            connect Brazilian students, promote our culture, and support
            volunteering activities to help our local community.
          </p>
          <p>
            Proactive <strong>Software Engineer</strong> passionate about
            applying my academic knowledge in a practical and efficient way to
            develop purposeful software. Eager to learn new industry best
            practices to improve software development.
          </p>
        </div>
        <div className={classes.column}>
          <h2>Technical Skills</h2>
          <h3>Programming</h3>
          <button>JavaScript</button>
          <button>React.js</button>
          <button>HTML</button>
          <button>CSS</button>
          <button>Java</button>
          <button>Python</button>
          <h3>Database</h3>
          <button>Snowflake</button>
          <button>Firebase</button>
          <h3>Software</h3>
          <button>Git</button>
          <button>GitHub</button>
          <button>AWS</button>
          <button>Figma</button>
        </div>
      </div>
    </div>
  );
};

export default About;