import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <button>Giulia Piombo</button>
      <span></span>
      <button>Home</button>
      <button>About</button>
      <button>Projects</button>
    </header>
  );
};

export default Header;
