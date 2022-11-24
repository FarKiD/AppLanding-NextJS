import Link from 'next/link';

import classes from '../styles/pages/index.module.scss';

export default function Home() {
  return (
    <main>
      <section className={classes.section1}>
        <div className={classes.introBtnContainer}>
          <Link className={classes.introBtn} href={'#'}>
            Visit: the main portfolio
          </Link>
        </div>
        <div className={classes.introText}>
          <h1>
            The app you've always needed
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
    </main>
  );
}
