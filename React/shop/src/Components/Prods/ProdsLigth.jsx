import React from 'react';

import imgProd from '../../images/prod2.png'

import styles from '../../css/Tradings-ligth.module.css'

const ProdsLigth = ({cat}) => {
  return (
    <>
      <div className={styles['tredings__item-image']}><img src={cat.image} alt="prod" /></div>
      <div className={styles.title}>{cat.name}</div>
    </>
  );
}

export default ProdsLigth;
