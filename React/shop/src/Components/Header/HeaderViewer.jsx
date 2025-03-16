import React from 'react';

import styles from '../../css/Header-viewer.module.css'
import selectedProd from '../../images/viewer1.png'
import otherProd from '../../images/viewer2.png'

const HeaderViewer = ({func}) => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles['image-box']}>
          <img src={selectedProd} className={styles['chosen-image']} alt="" />
          <img src={otherProd} className={''} alt="" />
          <img src={otherProd} className={''} alt="" />
          <img src={otherProd} className={''} alt="" />
          <img src={otherProd} className={''} alt="" />
        </div>
        <div className={styles['text-box']}>
          <div className={styles.title}>Bouncing sneaker Hermès</div>
          <div className={styles['price']}>599$</div>
          <div className={styles['price-param']}>Color:
            <span className={styles['price-value']}>Blanc</span>
          </div>
          <div className={styles['size-param']}>Sizes:
            <ul className={styles['size-value']}>
              <li className={styles['size-value-item']}>4.5</li>
              <li className={styles['size-value-item'] + ' ' + styles['size-value-item--active']}>5</li>
              <li className={styles['size-value-item']}>5.5</li>
            </ul>
          </div>
          <div className={styles.desc}>Sneaker in air mesh and suede goatskin.<br />
            Light sole with contrasting design for a versatile and modern look.</div>
          <div className={styles.buttonbox}>
            <button onClick={func} className={'button' + ' ' + styles.tocart}>Add to cart</button>
            <button className={'button' + ' ' + styles.tofav}>Add to favorites</button>
          </div>
          <div className={styles.otherbox}>
            <div className={styles.purch}>19 people purchased</div>
            <div className={styles.find}>Find in a store</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderViewer;
