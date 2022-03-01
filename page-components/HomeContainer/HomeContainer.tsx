import React,{useState,useEffect} from 'react';
import Image from 'next/image'
import { HomeContainerProps, } from './HomeContainer.props';
import Title from '../../components/Title/Title'
import Paragraph from '../../components/Paragraph/Paragraph'
import SubscribeForm from '../../components/SubscribeForm/SubscribeForm';
import Play from './Play/Play'
import imgSrc from '../../assets/person.png'
import StarIcon from '../../assets/star.svg'
import styles from './HomeContainer.module.css';

function HomeContainer({
}: HomeContainerProps): JSX.Element {
  const [showTitle, setShowTitle] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
    
      setShowTitle((prev) => {
        if (prev === 2) {
          return 0
        } else {
          return prev+=1
        }
        })

    }, 2000);
    
    return ()=>clearInterval(interval)
  },[])
  return (
    <div className={styles.wrapper}>
      
      <div className={styles.leftSectionWrapper}>
        {showTitle===0&&<Title >Welcome to Nayya</Title>}
        {showTitle===1&&<Title additional='Control'>Giving Consumers 
</Title>}
        {showTitle===2&&<Title additional='Confidence'>Giving Consumers </Title>}
        
        <Paragraph>
          We’re approaching the incoherent moments of benefits selection and utilization by harnessing the world’s data. Welcome to the benefit experience your employees deserve.
          </Paragraph>
        <SubscribeForm />
       <Play/>

      </div>
      

      <div className={styles.rightSectionWrapper}>
        <div className={styles.imgWrapper}>
          <Image layout='fixed' width={441} height={556} src={imgSrc} alt='person' />
          <div className={styles.hook}/>
        </div>
        
        <div className={styles.card}>
          <p>Here are recommended medical plans based on your life details, Jane.</p>
          
          <ul>

            <li>
              
              You are 28 years old
            </li>
               <li>
              
              Enrolling with your spouse and kids in San Francisco, CA (where average income is $122,033).
            </li>
               <li>
              
              You ride a bike to work.
            </li>
               <li>
              
              This year, you had 4 doctor visits, 2 specialist
            </li>
          </ul>
        </div>
        <div className={styles.bottomCursive} />
        <div className={styles.topCursive} />
        <StarIcon className={styles.star}/>
        <div className={styles.circle} />

        <div className={styles.spotlightCard}/>

      </div>


      </div>
  );
}

export default HomeContainer;