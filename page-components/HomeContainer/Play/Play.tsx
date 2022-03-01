import React from 'react';
import { PlayProps, } from './Play.props';
import PlayIcon from '../../../assets/play.svg'
import styles from './Play.module.css';

function Play({
}: PlayProps): JSX.Element {

  return (
       <div className={styles.play}>
          <PlayIcon className={styles.playIcon}/>
          Watch video
        </div>
  );
}

export default Play;