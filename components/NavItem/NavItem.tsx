import React from 'react';
import Link from 'next/link'
import ArrowIcon from './arrow.svg';
import { NavItemProps,} from './NavItem.props';

import styles from './NavItem.module.css';

function NavItem({
  children,
  route,
  arrow,
}: NavItemProps): JSX.Element {
  return (
     <li>
        <Link href={`/${route}`}>
        <a className={styles.link}>{children}
            {arrow && (
        <ArrowIcon
          className={styles.arrow}
        />
      )}</a>
      </Link>
  
      </li>
  );
}

export default NavItem;