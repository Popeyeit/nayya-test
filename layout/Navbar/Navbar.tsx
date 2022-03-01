import React from 'react';
import cn from 'classnames';
import { NavbarProps } from './Navbar.props';
import NavItem from '../../components/NavItem/NavItem'
import {routes} from '../../routes'
import styles from './Navbar.module.css'

function Navbar({
...props
}: NavbarProps): JSX.Element {
  return (
    <ul className={styles.menu}>
      {routes.map(item => <NavItem arrow={item.arrow} route={item.route.replace(/\s/g, '')}>{item.route}</NavItem>)}
    </ul>
  );
}

export default Navbar;