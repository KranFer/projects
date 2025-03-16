import React from 'react';

import Tradings from '../Tradings/Tradings';
import TradingsLigth from '../Tradings/TradingsLigth';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <>
      <Tradings />
      <TradingsLigth />
      <Banner />
      <Tradings />
    </>
  );
}

export default Home;
