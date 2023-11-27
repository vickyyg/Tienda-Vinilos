import React, { useState } from 'react';
import './CartCounter.css';

const CartCounter = ({ onAddToCart }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    onAddToCart(count);
    setCount(0); // Reset count after adding to cart
  };

  return (
    <div>
      <p className='prodCount'>Product Count: {count}</p>
      <button className='btncount' onClick={increment}>+</button>
      <button className='btncount' onClick={decrement}>-</button>
      <button className='btncount' onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default CartCounter;
