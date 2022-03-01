import React from 'react';
import cn from 'classnames';
import { ButtonProps } from './Paragraph.props';
import styles from './Paragraph.module.css';

function Button({
  children,
}: ButtonProps): JSX.Element {
  return (
    <p
      className={styles.paragraph}
    >
      {children}

    </p>
  );
}

export default Button;