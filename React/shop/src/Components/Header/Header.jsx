import React from 'react';

import Navbar from '../Navbar/Navbar'
import HeaderMain from '../Header/HeaderMain'

import HeaderST from '../../css/Header.module.css'
import Header_cartST from '../../css/Header-cart.module.css'
import Header_viewerST from '../../css/Header-viewer.module.css'

const Header = () => {
  return (
    <>
      <nav className='container'>
        <Navbar />
      </nav>
      <div className='container'>
        <header className={HeaderST.header}>
          <aside className={HeaderST.aside_menu}>
            <div className={HeaderST.aside_title}>CATEGORIES</div>
            <ul className={HeaderST.aside_box}>
              <li className={HeaderST.aside_item + ' ' + HeaderST['aside_item--active']}><a href='#'>Computers</a></li>
              <li className={HeaderST.aside_item}><a href='#'>Clothes</a></li>
              <li className={HeaderST.aside_item}><a href='#'>Shoes</a></li>
              <li className={HeaderST.aside_item}><a href='#'>Furniture</a></li>
              <li className={HeaderST.aside_item}><a href='#'>Cosmetics</a></li>
              <li className={HeaderST.aside_item}><a href='#'>Travel</a></li>
              <li className={HeaderST.aside_item}><a href='#'>Automotive</a></li>
            </ul>
            <div className={HeaderST['aside_btn-box']}>
              <div className={HeaderST['help-btn']}><a href='#'>Help</a></div>
              <div className={HeaderST['terms-btn']}><a href='#'>Terms & Conditions</a></div>
            </div>
          </aside>
          <HeaderMain />
        </header>
      </div>
    </ >
  );
}

export default Header;
