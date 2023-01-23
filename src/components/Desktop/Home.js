import classes from './Home.module.css';
import me from '../../images/me.png';
import { forwardRef } from 'react';

const Home = forwardRef((props, ref) => {
  return (
    <div className={classes.home} ref={ref}>
      <div className={classes.row}>
        <div className={classes.column}>
          <h2>Hey there, my name is</h2>
          <h1>Giulia Piombo</h1>
          <p>
            I graduated with a bachelor’s degree in Computer Engineering with
            minors in Mathematics and Computer Science, and honors from the
            Honors College from Texas Tech University on December 2022.
          </p>
        </div>
        <div className={classes.column}>
          <img src={me} alt="me" />
        </div>
      </div>
    </div>
  );
});

export default Home;
