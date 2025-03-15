import React from 'react';

import styles from '../../css/Tradings-ligth.module.css'

import ProdsLigth from '../Prods/ProdsLigth';

const TradingsLigth = () => {
  return (
    <div className='container'>
      <div className={styles['tredings-light']}>
        <div className={styles['tredings-title']}>Worth seeing</div>
        <ul className={styles.tredings_box}>
          <li className={styles['tredings_box-item']}><ProdsLigth /></li>
          <li className={styles['tredings_box-item']}><ProdsLigth /></li>
          <li className={styles['tredings_box-item']}><ProdsLigth /></li>
          <li className={styles['tredings_box-item']}><ProdsLigth /></li>
          <li className={styles['tredings_box-item']}><ProdsLigth /></li>
        </ul>
      </div>
    </div>
  );
}

export default TradingsLigth;
