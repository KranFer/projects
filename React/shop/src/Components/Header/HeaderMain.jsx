import React from 'react';

import Header_mainST from '../../css/Header-main.module.css'

import mainImg from '../../images/tech-main.png'

const HeaderMain = () => {
  return (
    <div className={Header_mainST.content}>
      <div className={Header_mainST.backtitle}>BIG SALE 20%</div>
      <div className={Header_mainST.subtitle}>the bestseller of 2022 </div>
      <div className={Header_mainST.title}>LENNON r2d2 <br/>
        with NVIDIA 5090 TI</div>
      <button type='button' className='button'>Shop Now</button>
      <div className={Header_mainST['content-img']}>
        <img src={mainImg} alt="" />
      </div>
    </div>
  );
}

export default HeaderMain;
