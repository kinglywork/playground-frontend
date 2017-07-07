import React from 'react';
import {Link} from 'react-router';
import styles from './Page2.css';

export default () => (
  <div className={styles.container}>
    {'this is page2.'}
    <br />
    <Link to="/">{'return to home'}</Link>
  </div>
)
