import React from 'react';

import { Route, Routes } from 'react-router-dom'

import HeaderMain from '../Header/HeaderMain';
import HeaderCart from '../Header/HeaderCart';
import HeaderViewer from '../Header/HeaderViewer';
import { ROUTES } from '../../utils/routes';
import Profile from '../Profile/Profile';

const HeaderRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HeaderMain />} />
      <Route path={ROUTES.CART} element={<HeaderCart />} />
      <Route path={ROUTES.CATEGORY} element={<HeaderMain />} />
      <Route path={ROUTES.PRODUCTS} element={<HeaderViewer />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
    </Routes>
  );
}

export default HeaderRoutes;
