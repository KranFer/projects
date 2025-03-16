import React, { useState } from 'react';

import styles from '../../css/Header-cart.module.css'

import prodImg from '../../images/prodCart.png'
import closeIcon from '../../images/icon/closeIcon.png'

const HeaderCart = () => {
  const [value, setValue] = useState(0)

  const valueInc = () => {
    setValue(value + 1)
  }
  const valueDec = () => {
    if (value) setValue(value - 1)
  }

  return (
    <>
      <div className={styles.cartbox}>
        <div className={styles.title}>Your cart</div>
        <ul className={styles.cartprods}>
          <li className={styles['cartprods-item']}>
            <div className={styles['prod-img']}>
              <img src={prodImg} alt="" />
            </div>
            <div className={styles['prod-name']}>
              <div className={styles.title}>Nike ZoomX 2023</div>
              <div className={styles.subtitle}>Sneakers</div>
            </div>
            <div className={styles.pricing}>
              <div className={styles['price-one']}>99$</div>
              <div className={styles['value-box']}>
                <div onClick={valueDec} className={styles['value-decrem']}></div>
                <div className={styles['value-quant']}>{value}</div>
                <div onClick={valueInc} className={styles['value-increm']}></div>
              </div>
              <div className={styles['price-sum']}>{99 * value}$</div>
            </div>
            <div className={styles.closebtn}><img src={closeIcon} alt="" /></div>
          </li>
        </ul>
        <div className={styles.completebox}>
          <div className={styles['total-price']}>TOTAL PRICE: <span className={styles['price-value']}>198$</span></div>
          <button className={'button' + ' ' + styles.button}>Proceed to checkout</button>
        </div>
      </div>
    </>
  );
}

export default HeaderCart;
