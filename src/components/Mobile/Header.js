import { slide as Menu } from 'react-burger-menu';
import './Header.css';

const Header = ({ homeRef, aboutRef, experienceRef, projectsRef }) => {
  const onHomeClick = (e) => {
    e.preventDefault();
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const onAboutClick = (e) => {
    e.preventDefault();
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const onExperienceClick = (e) => {
    e.preventDefault();
    experienceRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const onProjectsClick = (e) => {
    e.preventDefault();
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Menu>
      <button onClick={onHomeClick}>Home</button>
      <button onClick={onAboutClick}>About</button>
      <button onClick={onExperienceClick}>Experience</button>
      <button onClick={onProjectsClick}>Projects</button>
    </Menu>
  );
};

export default Header;
