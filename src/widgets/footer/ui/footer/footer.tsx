import { memo } from 'react';
import classes from './footer.module.scss';

export const Footer = memo(function Footer() {
  return <footer className={classes.footer}>Какой текст</footer>;
});
