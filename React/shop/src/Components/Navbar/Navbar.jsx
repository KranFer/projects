import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import NavbarST from '../../css/Navbar.module.css'

import logo from '../../images/logo.svg'
import search_icon from '../../images/icon/search-icon.svg'
import cart_icon from '../../images/icon/cart-icon.svg'
import liked_icon from '../../images/icon/liked-icon.svg'
import profile_icon from '../../images/icon/profile.png'

import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import { useDispatch } from 'react-redux';
import { toggleForm } from '../../features/user/userSlice';
import useToggleForm from '../../utils/Hooks/UseToggleForm';

const Navbar = () => {
  const { user: { cart, currentUser } } = useSelector((state) => state)

  const [showForm, handleToggle] = useToggleForm();

  const handleClick = () => {
    if (!currentUser) handleToggle()
    else console.log('-')
  }

  const [values, setValues] = useState({ name: 'Guest', avatar: profile_icon })

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser])

  return (
    <div className={NavbarST.navbar}>
      <Link to={ROUTES.Home} className="header__logo"> <img src={logo} alt="logo" /></Link>
      <div onClick={handleClick} className={NavbarST['header__profile']}>
        <img src={values.avatar} alt="profile" />
        <div className={NavbarST['profile-name']}>{values.name}</div>
      </div>
      <label htmlFor="navsearch" className={NavbarST.searchplace}>
        <input name='navsearch' type="text" className={NavbarST['searchbar']} placeholder='Search for anything...' />
        <a href='#'><img src={search_icon} alt="" className={NavbarST['searchbar-icon']} /></a>
      </label>
      <ul className={NavbarST.btn_box}>
        <li className={NavbarST['btn_box-item']}>
          <Link to={`products/${132}`}><img src={liked_icon} alt="" />
            <div className={NavbarST.newInLiked}>1</div></Link>
        </li>
        <li className={NavbarST['btn_box-item']}>
          <Link to='cart'><img src={cart_icon} alt="" />
            <div className={NavbarST.newInCart}>{cart.length}</div></Link>
        </li>
      </ul>
    </div>//{cart.reduce((quantity, item) => quantity+item.quantity,0) }
  );
}

export default Navbar;
