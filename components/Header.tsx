import classes from '../styles/components/Header.module.scss';

export default function Home() {
  return (
    <header>
      <nav className={classes.nav}>
        <ul className={classes.navItemsContainer}>
          <li>test 1</li>
          <li>test 1</li>
          <li>test 1</li>
        </ul>
      </nav>
    </header>
  );
}