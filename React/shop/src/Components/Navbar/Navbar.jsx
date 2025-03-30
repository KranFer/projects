import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import NavbarST from '../../css/Navbar.module.css'

import logo from '../../images/logo.svg'
import search_icon from '../../images/icon/search-icon.svg'
import clean_icon from '../../images/icon/cross-icon.png'
import cart_icon from '../../images/icon/cart-icon.svg'
import liked_icon from '../../images/icon/liked-icon.svg'
import profile_icon from '../../images/icon/profile.png'

import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import { useDispatch } from 'react-redux';
import { refreshUser, toggleForm } from '../../features/user/userSlice';
import useToggleForm from '../../utils/Hooks/UseToggleForm';
import { useGetProductsQuery } from '../../features/api/apiSlice';
import { RiAlignItemBottomFill } from 'react-icons/ri';

const Navbar = () => {
  const { user: { cart, currentUser } } = useSelector((state) => state)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [showForm, handleToggle] = useToggleForm();
  const [searchValue, setSearchValue] = useState("")

  const { data, isLoading } = useGetProductsQuery({ title: searchValue });
  const list = data?.filter((_, i) => i < 5)



  const handleSearch = ({ target: { value } }) => {
    setSearchValue(value)
  }

  const handleClick = () => {
    const Token = localStorage.getItem('refresh_token');

    if (!currentUser) {
      if (Token) dispatch(refreshUser({ refreshToken: Token }))
      else handleToggle();
    }
    else navigate(ROUTES.PROFILE);
  }

  const [values, setValues] = useState({ name: 'Guest', avatar: profile_icon })

  useEffect(() => {
    if (!currentUser) return;

    setValues(currentUser);
  }, [currentUser])

  return (
    <div className={NavbarST.navbar}>
      <Link to={ROUTES.HOME} className="header__logo"> <img src={logo} alt="logo" /></Link>
      <div onClick={handleClick} className={NavbarST['header__profile']}>
        <div className={NavbarST['profile-icon']}><img src={values.avatar} alt="profile" /></div>
        <div className={NavbarST['profile-name']}>{values.name}</div>
      </div>
      <label htmlFor="navsearch" className={NavbarST.searchplace}>
        <a href='#'><img src={search_icon} alt="" className={NavbarST['searchbar-icon']} /></a>
        <input
          name='navsearch'
          type="text"
          onChange={handleSearch}
          value={searchValue}
          className={NavbarST['searchbar'] + ' ' + (searchValue && NavbarST['borad'])}
          placeholder='Search for anything...' />
        <a href='#' onClick={() => setSearchValue("")} ><img src={clean_icon} alt="" className={NavbarST['searchbar-close-icon']} /></a>
        {searchValue && (
          <div className={NavbarST['searchbox']}>
            {isLoading ? 'Loading' : (
              list.map((item) => (
                <li key={item.id} className={NavbarST["search__item"]}>
                  <Link className={NavbarST["search__item"]} onClick={() => setSearchValue("")} to={`/product/${item.id}`}>
                    <div className={NavbarST["search__item-icon"]}><img src={item.images[0]} alt="" /></div>
                    <div className={NavbarST['search__item-desc']}>
                      <div className={NavbarST["search__item-title"]}>{item.title}</div>
                      <div className={NavbarST["search__item-cat"]}>{item.category.name}</div>
                    </div>
                  </Link>
                </li>
              ))
            )}
          </div>
        )}
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
