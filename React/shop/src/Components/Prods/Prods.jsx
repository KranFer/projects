import React from 'react';

import imgProd from '../../images/prod1.png'

import styles from '../../css/Tradings.module.css'

const   Prods = ({ prod }) => {

  return (
    <>
      <div className={styles['prodbox_item-image']} ><img src={prod.images[0]} alt="prod" /></div>
      <div className={styles['prodbox_item-content']}>
        <div className={styles.title}>{prod.title}</div>
        <div className={styles.subtitle}>{prod.name}</div>
        <div className={styles.prodinfo}>
          <div className={styles.price}>
            <div className={styles['price-main']}>{prod.price}</div>
            <div className={styles['price-sec']}>{Math.floor(prod.price*0.8)}</div>
          </div>
          <div className={styles.purch}>{Math.floor(Math.random(1, 2) * 30)} people purchased</div>
        </div>
      </div>
    </>
  );
}

export default Prods;
