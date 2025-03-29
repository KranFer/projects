import React, { useState } from 'react';

import styles from '../../css/Header-cart.module.css'

import prodImg from '../../images/prodCart.png'
import closeIcon from '../../images/icon/closeIcon.png'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HeaderCart = () => {
  const [value, setValue] = useState(0)

  const { user: { cart } } = useSelector(( state ) => state)

  console.log(cart)

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
          {cart.length != 0 && (cart.map((item) => (
            <li className={styles['cartprods-item']}>
              <NavLink style={{display: 'flex'}} to={`/product/${item.id}`} >
                <div className={styles['prod-img']}>
                  <img src={item.images[0]} alt="" />
                </div>
                <div className={styles['prod-name']}>
                  <div className={styles.title}>{item.title}</div>
                  <div className={styles.subtitle}>{item.category.name}</div>
                </div>
              </NavLink>
              <div className={styles.pricing}>
                <div className={styles['price-one']}>{item.price}$</div>
                <div className={styles['value-box']}>
                  <div onClick={valueDec} className={styles['value-decrem']}></div>
                  <div className={styles['value-quant']}>{item.quantity}</div>
                  <div onClick={valueInc} className={styles['value-increm']}></div>
                </div>
                <div className={styles['price-sum']}>{item.price * value}$</div>
              </div>
              <div className={styles.closebtn}><img src={closeIcon} alt="" /></div>
            </li>
          )))}
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
