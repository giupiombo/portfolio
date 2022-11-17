import classes from './Home.module.css';
import me from '../../images/me.png';
import { forwardRef } from 'react';

const Home = forwardRef((props, ref) => {
  return (
    <div className={classes.home} ref={ref}>
      <h2>Hey there, my name is</h2>
      <h1>Giulia Piombo</h1>
      <p>
        I am pursuing a bachelor's degree in Computer Engineering with expected
        graduation of December 2022.
      </p>
      <p>
        I am actively looking for a full time Software Engineering position.
      </p>
      <img src={me} alt="me" />
    </div>
  );
});

export default Home;
