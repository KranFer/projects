import React, { useEffect, useState } from 'react';
import AppRoutes from '../Routes/Routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import UserForm from '../Modal/UserForm';

import '../../css/global.css'
import { useDispatch } from 'react-redux';
import { getCategories } from '../../features/categories/categoriesSlice';
import { getProducts } from '../../features/products/productsSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [dispatch])



  return (
    <div className='app'>
      <UserForm />
      <Header />

      <AppRoutes />

      <Footer />
    </div>
  );
}

export default App;
