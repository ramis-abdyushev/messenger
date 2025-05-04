import { memo, ReactNode } from 'react';
import classes from './layout.module.scss';
import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = memo(function Layout({ children }: LayoutProps) {
  return (
    <div className={classes.layout}>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
});
