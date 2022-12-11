import Link from 'next/link';
import classes from '../styles/components/Header.module.scss';

export default function Home() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.navItemsContainer}>
          <li>
            <Link className={classes.headerLink} href="#">
              Home
            </Link>
          </li>
          <li>
            <Link className={classes.headerLink} href="#">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className={classes.headerLink} href="#">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}