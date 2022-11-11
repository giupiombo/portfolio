import classes from './Home.module.css';
import me from '../images/me.jpg';
import background from '../images/background2.jpg';

const Home = () => {
  return (
    <div
      className={classes.home}
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1>Hey there, I'm Giulia</h1>
      <img src={me} alt="me" />
      <p>
        I am pursuing a bachelor's degree in Computer Engineering with expected
        graduation of December 2022.
      </p>
      <p>
        I am actively looking for a full time Software Engineering position.
      </p>
      {/* <div className={classes.row}>
        <a href="https://linkedin.com/in/giulia-piombo" target="_blank">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg"
            alt="linkedin"
          />
        </a>
        <a href="https://github.com/giupiombo" target="_blank">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg"
            alt="github"
          />
        </a>
      </div> */}
    </div>
  );
};

export default Home;
