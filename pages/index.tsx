import Swal from 'sweetalert2';

import Link from 'next/link';

import classes from '../styles/pages/index.module.scss';
import SpeedSVG from '../assets/svg/speed.svg';
import Businessman from '../assets/svg/businessman.svg';
import Rocket from '../assets/svg/rocket.svg';
import Windows from '../assets/svg/win.svg';
import Download from '../assets/svg/download.svg';

export default function Home() {
  const downloadHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    Swal.fire({
      title: 'Sorry!',
      text: 'The website is only a showcase, there is no real app to download',
      color: '#ff2323',
      background: '#191528',
      icon: 'info',
      scrollbarPadding: false,
      iconColor: '#caf0f8',
      confirmButtonText: 'Okay',
      confirmButtonColor: '#5C162E'
    });
  }

  return (
    <>
    <main>
      <section className={classes.section1}>
        <div className={classes.stars1}></div>
        <div className={classes.stars2}></div>
        <div className={classes.stars3}></div>
        <div className={classes.introBtnContainer}>
          <Link className={classes.introBtn} target="_blank" href='https://ostadportfolio.iran.liara.run/'>
            Visit: Our Resume
          </Link>
        </div>
        <div className={classes.introText}>
          <h1>
            The app you&apos;ve always needed!
          </h1>
          <h2>
            This is not an actual app, but a landing page for a fictional app.
            <br />
            But it can be your dream app here on display; <span className={classes.imagine}>Just Imagine!</span>
          </h2>
        </div>
        <div className={classes.introSecondButtonsContainer}>
          <Link className={classes.githubBtn} href={'#'} onClick={downloadHandler}>
            Source Code on Github
          </Link>
          <Link className={classes.downloadBtn} href={'#'} onClick={downloadHandler}>
            Download
          </Link>
        </div>
      </section>
      <section className={classes.section2}>
        <div className={`${classes.whyUs_container} row`}>
          <div className={`${classes.whyUs} col`}>
            <SpeedSVG />
            <h4>We&apos;re Fast</h4>
            <p>Our Application is the fastest there is</p>
          </div>
          <div className={`${classes.whyUs} col`}>
            <Businessman />
            <h4>We&apos;re Relieable</h4>
            <p>This app is maintained by a team of reliable professionals</p>
          </div>
          <div className={`${classes.whyUs} col`}>
            <Rocket />
            <h4>We&apos;re Modern</h4>
            <p>We&apos;re always staying in touch with modern and the most advanced technologies</p>
          </div>
        </div>
      </section>
      <section className={classes.section3}>
        <div className={`${classes.contact_container} row`}>
          <div className={`${classes.contactUs} col`}>
            <h3>
              Contact Us
            </h3>
            <p>
              <span>Cellphone:</span> +98-903-23-71-898
              <br />
              <span>Email:</span> sajjad.ostadebrahim@gmail.com
            </p>
            <Link href='mailto:sajjad.ostadebrahim@gmail.com'>Send Mail</Link>
          </div>
          <div className={`${classes.hireUs} col`}>
            <h3>
              Hire Us
            </h3>
            <p>
              You can visit our portfolio and hire us thereafter,
              <br />
              most of our notable projects can be found there.
            </p>
            <Link target='_blank' href='https://ostadportfolio.iran.liara.run/'>Portfolio</Link>
          </div>
        </div>
      </section>
      <section className={classes.section4}>
        <div className={`${classes.download_container} row`}>
          <div className={`${classes.download} offset-1 col-5`}>
            <Windows className={classes.winSVG} />
            <Link onClick={downloadHandler} href='#' className={classes.winDownloadBtn}>
              <Download className={classes.downloadSVG} /> Win 8, 10, 11
            </Link>
          </div>
          <div className={`${classes.downloadText} col`}>
            <h4>Download for Windows OS</h4>
            <p>
              You can download our application for Windows Operating Systems by clicking the link on the left.
            </p>
            <p>
            However this is a simple showcase website and there is no real app here, so it won&apos;t really work.
            </p>
          </div>
        </div>
      </section>
    </main>
    <footer className={classes.footer}>
      <p>Website by Sajjad Ostadebrahim | Stack: Next.js, SASS</p>
    </footer>
    </>
  );
}
