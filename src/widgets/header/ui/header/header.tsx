import { memo } from 'react';
import { Navbar } from '../navbar/navbar';
import classes from './header.module.scss';

export const Header = memo(function Header() {
  return (
    <header className={classes.header}>
      <Navbar />
    </header>
  );
});
