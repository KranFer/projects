import React from 'react';

import HeaderST from '../../css/Header.module.css'

import Navbar from '../Navbar/Navbar'
import AsideNav from './AsideNav';
import HeaderRoutes from '../Routes/HeaderRoutes';

const Header = () => {
  return (
    <>
      <nav className='container'>
        <Navbar />
      </nav>
      <div className='container'>
        <header className={HeaderST.header}>
          <AsideNav />
          <HeaderRoutes />
        </header>
      </div>
    </ >
  );
}

export default Header;
