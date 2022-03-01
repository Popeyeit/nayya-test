import React from 'react';
import { SubscribeFormProps } from './SubscribeForm.props';
import styles from './SubscribeForm.module.css';
import Button from '../Button/Button';

function SubscribeForm({
}: SubscribeFormProps): JSX.Element {
  return (
    <form
      className={styles.form}
    >
      < input placeholder="Enter your email" type='email' className={styles.input}/>
            
<Button size='xl' appearance='primary' borderSide='left'>Get Started</Button>
    </form>
  );
}

export default SubscribeForm;