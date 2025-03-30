import React, { useEffect, useState } from 'react';

import styles from '../../css/Header-cart.module.css'

import prodImg from '../../images/prodCart.png'
import closeIcon from '../../images/icon/closeIcon.png'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decItem, incItem, deleteItem } from '../../features/user/userSlice';

const HeaderCart = () => {
  const dispatch = useDispatch()

  const { user: { cart } } = useSelector((state) => state)

  const valueInc = (item) => {
    dispatch(incItem(item))
  }
  const valueDec = (item) => {
    dispatch(decItem(item))
  }
  const itemDel = (item) => {
    dispatch(deleteItem(item))
  }

  const [sumCost, setSumCost] = useState(0)

  useEffect(() => {
    if (!cart) return;
    const sum = cart.reduce((sum, item) => sum + item.price*item.quantity,0);
    setSumCost(sum);
  }, [cart])

  return (
    <>
      <div className={styles.cartbox}>
        <div className={styles.title}>Your cart</div>
        <ul className={styles.cartprods}>
          {cart.length != 0 && (cart.map((item) => (
            <li className={styles['cartprods-item']}>
              <NavLink style={{ display: 'flex' }} to={`/product/${item.id}`} >
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
                  <div onClick={() => valueDec(item)} className={styles['value-decrem']}></div>
                  <div className={styles['value-quant']}>{item.quantity}</div>
                  <div onClick={() => valueInc(item)} className={styles['value-increm']}></div>
                </div>
                <div className={styles['price-sum']}>{item.price * item.quantity}$</div>
              </div>
              <div onClick={() => itemDel(item)} className={styles.deletebtn}><img src={closeIcon} alt="" /></div>
            </li>
          )))}
        </ul>
        <div className={styles.completebox}>
          <div className={styles['total-price']}>TOTAL PRICE: <span className={styles['price-value']}>{sumCost}$</span></div>
          <button className={'button' + ' ' + styles.button}>Proceed to checkout</button>
        </div>
      </div>
    </>
  );
}

export default HeaderCart;
