import React from 'react';
import { LogoProps } from './Logo.props';
import LogoImg from './logo.svg';
import Link from 'next/link';
import styles from './Logo.module.css';

function Logo({
}: LogoProps): JSX.Element {
  return (
      <Link href='/'>
        <a>
      <LogoImg/>
        </a>
      </Link>
  );
}

export default Logo;