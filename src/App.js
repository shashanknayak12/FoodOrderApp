import React, { useState } from 'react'
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false)

  const showCartHandler = () => {
    setIsCartOpen(true)
    console.log(isCartOpen)
  }

  const hideCartHandler = () => {
    setIsCartOpen(false)
  }
  return (
    <React.Fragment>
      {isCartOpen && <Cart onCloseCart={hideCartHandler} />}

      <Header onCartClick={showCartHandler} />

      <main>
        <Meals />
      </main>

    </React.Fragment>

  );
}

export default App;
