import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import { ROUTES } from '../../utils/routes';
const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home full={true}/>}/>
      <Route path={ROUTES.PRODUCTS} element={<Home full={false}/>} />
      <Route path={ROUTES.CATEGORY} element={<></>} />
      <Route path={ROUTES.Cart} element={<></>} />
      <Route path='*' element={<></>}/>
    </Routes>
  );
}

export default AppRoutes;
