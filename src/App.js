import React, { useState } from 'react'
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

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
    <CartProvider>
      {isCartOpen && <Cart onCloseCart={hideCartHandler} />}

      <Header onCartClick={showCartHandler} />

      <main>
        <Meals />
      </main>

    </CartProvider>

  );
}

export default App;
