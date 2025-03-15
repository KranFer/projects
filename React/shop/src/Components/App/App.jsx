import React from 'react';
import AppRoutes from '../Routes/Routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';


import Tradings from '../Tradings/Tradings';
import TradingsLigth from '../Tradings/TradingsLigth';
import Banner from '../Banner/Banner';

import '../../css/global.css'

const App = () => {
  return (
    <div className='app'>
      <Header />

      <Tradings />
      <TradingsLigth />
      <Banner />
      <Tradings />

      <Footer />
    </div>
  );
}

export default App;
