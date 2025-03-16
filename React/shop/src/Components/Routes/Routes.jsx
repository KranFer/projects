import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import Single from '../Pages/Single';
const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />}/>
      <Route path="/:prod_id" element={<Single />} />
      <Route path="/cart" element={<></>} />
      <Route path='*' element={<></>}/>
    </Routes>
  );
}

export default AppRoutes;
