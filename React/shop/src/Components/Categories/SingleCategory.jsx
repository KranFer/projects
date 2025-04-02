import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import styles from '../../css/Searchprod.module.css'
import prod from '../../css/Tradings.module.css'

import { useGetProductsQuery } from '../../features/api/apiSlice';
import Prods from '../Prods/Prods';

const SingleCategory = () => {
  const { id } = useParams();

  const [values, setValues] = useState({
    title: "",
    price: 0,
    categoryId: id,
  })


  const DOTS = [1, 2, 3, 4]
  const [isActiveDot, setActiveDot] = useState(0);

  useEffect(() => {
    if (!id) return;

    setValues({ ...values, categoryId: id });
    setActiveDot(0)
  }, [id]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value })
    setActiveDot(0)
  }

  const { data, isLoading } = useGetProductsQuery({ ...values, price: 0 });
  const list = data?.filter(({ price }) => price >= values.price).filter((_, i) => i < 8 * DOTS[isActiveDot] && i >= 8 * (DOTS[isActiveDot] - 1))

  return (
    <div className='container'>
      <div className={styles.searchprod}>
        <div className={styles["searchprod-title"]}>Sneakers</div>
        <div className={styles.search_field}>
          <input
            type="text"
            className={styles.search_input + ' ' + styles.prodname}
            value={values.title}
            name='title'
            onChange={handleChange}
            placeholder='Product name' />
          <input
            type="text"
            className={styles.search_input + ' ' + styles.priceprod}
            name='price'
            value={values.price}
            onChange={handleChange}
            placeholder='Price from' />
        </div>
        <div className={styles['dots-box']}>
          {DOTS.map((quant, index) => (
            <button onClick={() => setActiveDot(index)} className={(isActiveDot == index ? styles['dots-item--active'] : '') + ' ' + styles['dots-item']}>{quant}</button>
          ))}
        </div>
        <ul className={prod.prodbox}>
          {list && list.map((el) => (
            <li className={prod.prodbox_item} key={el.id}><NavLink to={`/product/${el.id}`}><Prods prod={el} /></NavLink></li>
          ))}
          {list && Array(4 - list.length % 4).fill(null).map((_, index) => (<li className={prod.null_item} key={Math.floor(Math.random)}></li>))}
        </ul>
      </div>
    </div>
  );
}

export default SingleCategory;
