import Link from 'next/link';

import classes from '../styles/pages/index.module.scss';

export default function Home() {
  return (
    <main>
      <section className={classes.section1}>
        <Link className={classes.introBtn} href={'#'}>
          Project's GitHub
        </Link>
      </section>
    </main>
  );
}
