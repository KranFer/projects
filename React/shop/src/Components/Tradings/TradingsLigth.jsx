import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../../css/Tradings-ligth.module.css'

import ProdsLigth from '../Prods/ProdsLigth';

const TradingsLigth = ({ title, categories = [], amount }) => {
  const list = categories.filter((_, i) => i < amount)

  return (
    <div className='container'>
      <div className={styles['tredings-light']}>
        <div className={styles['tredings-title']}>{title}</div>
        <ul className={styles.tredings_box}>
          {list.map((el) => (
            <li className={styles['tredings_box-item']} key={el.id}><NavLink to={`/categories/${el.id}`}><ProdsLigth cat={el}/></NavLink></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TradingsLigth;
