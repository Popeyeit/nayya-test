
import React from 'react';
import cn from 'classnames'
import { TitleProps } from './Title.props';
import styles from './Title.module.css';

function Title({
    children,
    additional
}: TitleProps): JSX.Element {
  return (
    <h1 className={styles.title}>
          {children}
          {additional &&
              <span className={cn(styles.additional, {
        [styles.control]: additional === 'Control',
        [styles.confidence]: additional === 'Confidence',

      })}> {additional}
              </span>
           }
    </h1>
  );
}

export default Title;