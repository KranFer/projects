import React from 'react';

import Navbar from '../Navbar/Navbar'
import HeaderMain from '../Header/HeaderMain'

import HeaderST from '../../css/Header.module.css'
import AsideNav from './AsideNav';
import HeaderRoutes from '../Routes/HeaderRoutes';

const Header = ({func}) => {
  return (
    <>
      <nav className='container'>
        <Navbar />
      </nav>
      <div className='container'>
        <header className={HeaderST.header}>
          <AsideNav />
          <HeaderRoutes func={func}/>
        </header>
      </div>
    </ >
  );
}

export default Header;
