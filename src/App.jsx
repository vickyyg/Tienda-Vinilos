import React from 'react';
import Navbar from './components/Nav/Nav';
import Product from './components/Item/Item';
/* import CartCounter from './components/CartCounter'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; */



function App() {

  return (
    <div className="App">
      
      <Navbar />
      <Product />
      

      {/* <Route path="/item-count" element={<CartCounter />} /> */}
      
    </div>
  );
}

export default App;

