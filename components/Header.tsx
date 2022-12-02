import Link from 'next/link';
import classes from '../styles/components/Header.module.scss';

export default function Home() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.navItemsContainer}>
          <li>
            <Link className={classes.headerLink} href="#">
              Link 1
            </Link>
          </li>
          <li>
            <Link className={classes.headerLink} href="#">
              Link 2
            </Link>
          </li>
          <li>
            <Link className={classes.headerLink} href="#">
              Link 3
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}