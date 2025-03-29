import React from 'react';

import HeaderST from '../../css/Header.module.css'
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const AsideNav = () => {
  const { list } = useSelector(({ categories }) => categories)

  return (
    <>
      <aside className={HeaderST.aside_menu}>
        <div className={HeaderST.aside_title}>CATEGORIES</div>
        <ul className={HeaderST.aside_box}>
          {list.map(({ id, name }) => (
            <li className={HeaderST.aside_item} key={id}><NavLink to={`/categories/${id}`} className={({ isActive }) => `${isActive ? HeaderST['aside_item--active'] : ''}`}>{name}</NavLink></li>
          ))}
        </ul>
        <div className={HeaderST['aside_btn-box']}>
          <div className={HeaderST['help-btn']}><a href='#'>Help</a></div>
          <div className={HeaderST['terms-btn']}><a href='#'>Terms & Conditions</a></div>
        </div>
      </aside>
    </>
  );
}

export default AsideNav;
