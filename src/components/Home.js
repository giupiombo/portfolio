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
    </div>
  );
};

export default Home;
