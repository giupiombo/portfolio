import classes from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <div className={classes.footer}>
        <section className={classes.margin1}>
          <h1>Giulia Piombo</h1>
        </section>
        <section className={classes.margin2}>
          <h1>Social</h1>
          <div className={classes.row}>
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
            <a href="mailto:giulia.piombo01@gmail.com">
              <img src="https://cdn-icons-png.flaticon.com/512/60/60543.png" />
            </a>
          </div>
        </section>
      </div>
      <footer className={classes.copy}>
        <p>© Copyright 2022. Made by Giulia Piombo.</p>
      </footer>
    </>
  );
};

export default Footer;
