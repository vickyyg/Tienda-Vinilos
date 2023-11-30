import React from 'react';
import Navbar from './components/Nav/Nav';
import Product from './components/Item/Item';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
/* import CartCounter from './components/CartCounter'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; */



function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Product />
      <Routes>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>

      {/* <Route path="/item-count" element={<CartCounter />} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

