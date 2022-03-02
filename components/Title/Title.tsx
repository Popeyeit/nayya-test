
import React,{useEffect,useState} from 'react';
import Typical from 'react-typical'
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
  }, 2000);

  return () => clearInterval(interval);

    }
       
    },[additional])

  return (
    <h1 className={styles.title}>
          {children}
          {additional && counter ===0 &&
    //           <Typical
    //               steps={steps}
    //               loop={Infinity}
    //               wrapper="span"
    //               className={cn(styles.additional, {
    //     [styles.control]: additional === 'Control' && counter === 0,
    //     [styles.confidence]: additional === 'Control' && counter === 1,
    //     [styles.understanding]: additional === 'Control' && counter === 2,
    //     [styles.peace]: additional === 'Control' && counter === 3,

    //   })}
    //           />
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