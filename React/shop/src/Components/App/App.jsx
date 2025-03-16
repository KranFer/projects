import React, { useState } from 'react';
import AppRoutes from '../Routes/Routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Register from '../Modal/Register';

import '../../css/global.css'

const App = () => {
  const [blackout, setblackout] = useState(false)

  const useBlackuot = () => {
    setblackout(!blackout)
  }

  return (
    <div className='app'>
      <Register isBlakout={blackout} setBlack={useBlackuot}/>
      <Header func={useBlackuot}/>

      <AppRoutes />

      <Footer />
    </div>
  );
}

export default App;
