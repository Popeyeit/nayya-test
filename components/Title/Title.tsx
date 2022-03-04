
import React,{useEffect,useState} from 'react';
import cn from 'classnames'
import { TitleProps } from './Title.props';
import styles from './Title.module.css';

const steps = ['Control', 2000, 'Confidence', 2000,'Understanding', 2000, 'Peace', 2000]


function Title({
    children,
    additional,
}: TitleProps): JSX.Element {

    const [counter, setCounter] = useState(0);
    useEffect(() => {

let interval

        if (additional)
        {
 interval = setInterval(() => {
    setCounter((prev) => {
        if (prev === 3){
        return 0
    } else {
        return prev+=1
        }
    })
  }, 3000);

  return () => clearInterval(interval);

    }
       
    },[additional])

  return (
    <h1 className={cn(styles.title, {
        [styles.welcome]: additional === 'Welcome',
        [styles.stayControl]: additional === 'Control',
              })}>
          {children}

          {additional=== 'Control' && counter ===0 &&

              <span className={cn(styles.additional, {
       [styles.control]: additional === 'Control',
              })}>
              Control
              </span>
              
          }
          {
              additional && counter === 1 && <span className={cn(styles.additional, {
       [styles.confidence]: additional === 'Control',
                      })}>Confidence</span>
          }

          {
               additional && counter === 2 && <span className={cn(styles.additional, {
       [styles.understanding]: additional === 'Control',
                      })}>Understanding</span>
          }

          {

               additional && counter === 3 && <span className={cn(styles.additional, {
       [styles.peace]: additional === 'Control',
                      })}>Peace</span>
          }       
  
    </h1>
  );
}

export default Title;