import React from 'react';
import cn from 'classnames';
import { ButtonProps,SM,MD,XL,GHOST_BTN,PRIMARY_BTN } from './Button.props';

import styles from './Button.module.css';



function Button({
  children,
  appearance='primary',
  size = 'md',
  borderSide,
  className,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === PRIMARY_BTN,
        [styles.ghost]: appearance === GHOST_BTN,
        [styles.sm]: size === SM,
        [styles.md]: size === MD,
        [styles.xl]: size === XL,
        [styles.borderSide]: borderSide === 'left'
      })}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;