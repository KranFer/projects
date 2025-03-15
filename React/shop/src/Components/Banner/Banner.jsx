import React from 'react';

import styles from '../../css/Newyear-sale.module.css'

import saleImg from '../../images/sale.png'
import saleIcon1 from '../../images/sale-01.png'
import saleIcon2 from '../../images/sale-02.png'

const Banner = () => {
  return (
    <div className='container'>
      <div className={styles['sale-banner']}>
        <div className={styles.content}>
          <div className={styles.subtitle}>NEW YEAR</div>
          <div className={styles.title}>SALE</div>
          <button className={'button' + ' ' + styles['sale-btn']}>See more</button>
          <img src={saleIcon1} className={styles['sale-icon1']} alt="" />
          <img src={saleIcon2} className={styles['sale-icon2']} alt="" />
        </div>
        <div className={styles.imagebox}>
          <img src={saleImg} alt="" />
          <div className={styles.desc}>save up to <span className={styles.accent}>50%</span> off</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
