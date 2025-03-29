import React from 'react';

import { Route, Routes } from 'react-router-dom'

import HeaderMain from '../Header/HeaderMain';
import HeaderCart from '../Header/HeaderCart';
import HeaderViewer from '../Header/HeaderViewer';
import { ROUTES } from '../../utils/routes';

const HeaderRoutes = ({ func }) => {
  return (
    <Routes>
      <Route index element={<HeaderMain />} />
      <Route path={ROUTES.Cart} element={<HeaderCart />} />
      <Route path={ROUTES.PRODUCTS} element={<HeaderViewer func={func} />} />
      <Route path={ROUTES.CATEGORY} element={<></>} />
    </Routes>
  );
}

export default HeaderRoutes;
