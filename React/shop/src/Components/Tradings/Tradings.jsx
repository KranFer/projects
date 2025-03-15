import React from 'react';

import styles from '../../css/Tradings.module.css'

import Prods from '../Prods/Prods';

const Tradings = () => {
  return (
    <div className='container'>
      <div className={styles.tredings}>
        <div className={styles['tredings-title']}>Trending</div>
        <ul className={styles.prodbox}>
          <li className={styles.prodbox_item}><Prods /></li>
          <li className={styles.prodbox_item}><Prods /></li>
          <li className={styles.prodbox_item}><Prods /></li>
          <li className={styles.prodbox_item}><Prods /></li>
        </ul>
        <button className={styles.tradings_btn + ' ' + "button"}>See more</button>
      </div>
    </div>
  );
}

export default Tradings;
