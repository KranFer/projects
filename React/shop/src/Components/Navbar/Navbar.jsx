import React from 'react';

import NavbarST from '../../css/Navbar.module.css'

import logo from '../../images/logo.svg'
import search_icon from '../../images/icon/search-icon.svg'
import cart_icon from '../../images/icon/cart-icon.svg'
import liked_icon from '../../images/icon/liked-icon.svg'

const Navbar = () => {
  return (
    <div className={NavbarST.navbar}>
      <a href='/' className="header__logo"><img src={logo} alt="logo" /></a>
      <label htmlFor="navsearch" className={NavbarST.searchplace}>
        <input name='navsearch' type="text" className={NavbarST['searchbar']} placeholder='Search for anything...' />
        <a href='#'><img src={search_icon} alt="" className={NavbarST['searchbar-icon']} /></a>
      </label>
      <ul className={NavbarST.btn_box}>
        <li className={NavbarST['btn_box-item']}>
          <a href='#'><img src={cart_icon} alt="" /></a>
          <div className={NavbarST.newInLiked}>1</div>
        </li>
        <li className={NavbarST['btn_box-item']}>
          <a href='#'><img src={liked_icon} alt="" /></a>
          <div className={NavbarST.newInCart}>12</div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
