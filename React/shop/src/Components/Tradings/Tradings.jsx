import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../../css/Tradings.module.css'

import Prods from '../Prods/Prods';


const Tradings = ({ title, products = [], amount }) => {
  const list = products.filter((_, i) => i < amount)


  return (
    <div className='container'>
      <div className={styles.tredings}>
        <div className={styles['tredings-title']}>{title}</div>
        <ul className={styles.prodbox}>
          {list.map((el) => (
            <li className={styles.prodbox_item} key={el.id}><NavLink to={`/product/${el.id}`}><Prods prod={el} /></NavLink></li>
          ))}
        </ul>
        <button className={styles.tradings_btn + ' ' + "button"}>See more</button>
      </div>
    </div>
  );
}

export default Tradings;
