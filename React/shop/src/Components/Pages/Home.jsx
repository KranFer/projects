import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Tradings from '../Tradings/Tradings';
import TradingsLigth from '../Tradings/TradingsLigth';
import Banner from '../Banner/Banner';
import { queries } from '@testing-library/dom';

import { filterByPrice } from '../../features/products/productsSlice';

const Home = ({ full }) => {
  const dispatch = useDispatch();
  const { products: { list, filtered, related }, categories } = useSelector((state) => state)

  useEffect(() => {
    if (!list.length) return;

    dispatch(filterByPrice(100))
  }, [dispatch, list.length])




  return (
    <>
      {full
      ?<Tradings title="Tredings" products={list} amount={4} />
      :<Tradings title="Related products" products={related} amount={4} />}
      {full &&
        <>
          <TradingsLigth title="New Categories" categories={categories.list} amount={4} />
          <Banner />
          <Tradings title="Less then 100$" products={filtered} amount={4} />
        </>
      }
    </>
  );
}

export default Home;
