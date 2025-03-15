import React from 'react';

import imgProd from '../../images/prod2.png'

import styles from '../../css/Tradings-ligth.module.css'

const ProdsLigth = () => {
  return (
    <>
      <div className={styles['tredings__item-image']}><img src={imgProd} alt="prod" /></div>
      <div className={styles.title}>Sneakers</div>
    </>
  );
}

export default ProdsLigth;
