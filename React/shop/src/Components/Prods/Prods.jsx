import React from 'react';

import imgProd from '../../images/prod1.png'

import styles from '../../css/Tradings.module.css'

const Prods = () => {
  return (
    <>
      <div className={styles['prodbox_item-image']} ><img src={imgProd} alt="prod" /></div>
      <div className={styles['prodbox_item-content']}>
        <div className={styles.title}>Nike ZoomX 2023</div>
        <div className={styles.subtitle}>Sneakers</div>
        <div className={styles.prodinfo}>
          <div className={styles.price}>
            <div className={styles['price-main']}>99$</div>
            <div className={styles['price-sec']}>79$</div>
          </div>
          <div className={styles.purch}>19 people purchased</div>
        </div>
      </div>
    </>
  );
}

export default Prods;
