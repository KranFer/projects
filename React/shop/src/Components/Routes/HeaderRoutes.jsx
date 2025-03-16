import React from 'react';

import { Route, Routes } from 'react-router-dom'

import HeaderMain from '../Header/HeaderMain';
import HeaderCart from '../Header/HeaderCart';
import HeaderViewer from '../Header/HeaderViewer';

const HeaderRoutes = ({func}) => {
  return (
    <Routes>
      <Route index element={<HeaderMain />} />
      <Route path="/cart" element={<HeaderCart />} />
      <Route path="/:prod_id" element={<HeaderViewer func={func}/>} />
    </Routes>
  );
}

export default HeaderRoutes;
