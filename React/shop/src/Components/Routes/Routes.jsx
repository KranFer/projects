import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import Home from '../Pages/Home';
import SingleCategory from '../Categories/SingleCategory'

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home full={true} />} />
      <Route path={ROUTES.PRODUCTS} element={<Home full={false} />} />
      <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
      <Route path={ROUTES.CART} element={<></>} />
      <Route path='*' element={<></>} />
    </Routes>
  );
}

export default AppRoutes;
