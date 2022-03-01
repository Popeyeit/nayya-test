import React from 'react';
import cn from 'classnames';
import Navbar from './Navbar/Navbar';
import Logo from './Logo/Logo';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css'
import { Button } from '../components';

function Layout({
  children,

}: LayoutProps): JSX.Element {
  return (
    <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.header}>
        <Logo/>
        <Navbar />
      <div className={styles.btnWrapper}>
        <Button appearance='ghost' size='sm'>Log in</Button>
        <Button appearance='primary' size='md'>Get Demo</Button>
      </div>
      </div>
        {children}
</div>
    </section>

  );
}

export default Layout;