import Link from 'next/link';

import classes from '../styles/pages/index.module.scss';
import SpeedSVG from '../assets/svg/speed.svg';
import Businessman from '../assets/svg/businessman.svg';
import Rocket from '../assets/svg/rocket.svg';

export default function Home() {
  return (
    <main>
      <section className={classes.section1}>
      <div className={classes.stars1}></div>
      <div className={classes.stars2}></div>
      <div className={classes.stars3}></div>
        
        <div className={classes.introBtnContainer}>
          <Link className={classes.introBtn} href={'#'}>
            Visit: the main portfolio
          </Link>
        </div>
        <div className={classes.introText}>
          <h1>
            The app you've always needed!
          </h1>
          <h2>
            This is not an actual app, but a landing page for a fictional app.
            <br />
            But it can be your dream app here on display; <span>Just Imagine!</span>
          </h2>
        </div>
        <div className={classes.introSecondButtonsContainer}>
          <Link className={classes.githubBtn} href={'#'}>
            Source Code on Github
          </Link>
          <Link className={classes.downloadBtn} href={'#'}>
            Download
          </Link>
        </div>
      </section>
      <section className={classes.section2}>
        <div className={`${classes.whyUs_container} row`}>
          <div className={`${classes.whyUs} col`}>
            <SpeedSVG />
            <h4>We're Fast</h4>
            <p>Our Application is the fastest there is</p>
          </div>
          <div className={`${classes.whyUs} col`}>
            <Businessman />
            <h4>We're Relieable</h4>
            <p>This app is maintained by a team of reliable professionals</p>
          </div>
          <div className={`${classes.whyUs} col`}>
            <Rocket />
            <h4>We're Modern</h4>
            <p>We're always staying in touch with modern and the most advanced technologies</p>
          </div>
        </div>
      </section>
    </main>
  );
}
