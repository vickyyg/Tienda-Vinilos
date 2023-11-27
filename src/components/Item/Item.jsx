import React from 'react';
import "./Item.css";
import Cart from '../Cart/Cart';
import CartCounter from '../CartCounter/CartCounter';
import { useState } from 'react';

const Product = () => {

  const [category, setCategory] = useState('all')
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product, quantity) => {
    // Agrega el producto al carrito con la cantidad seleccionada
    setCartItems([...cartItems, { id: product.id, name: product.name, quantity }]);
  };
    
 
   const products = [
     {
       id: 1,
       image: '/aliceinchains.webp',
       name: 'Alice In Chains - Dirt',
       description: 'Vinyl',
       price: '36.00',
       category: 'metal'
       
     },
     {
      id: 2,
      image: '/aerosmith.webp',
      name: 'Alice In Chains - Dirt',
      description: 'Vinyl',
      price: '36.00',
      category: 'rock'
      
    },
    {
      id: 3,
      image: '/badreligion.webp',
      name: 'Alice In Chains - Dirt',
      description: 'Vinyl',
      price: '36.00',
      category: 'puck'
      
    },
    {
      id: 4,
      image: '/blackflag.jpg',
      name: 'Alice In Chains - Dirt',
      description: 'Vinyl',
      price: '36.00',
      category: 'punk'
      
    },
    {
      id: 5,
      image: '/bowie.webp',
      name: 'Alice In Chains - Dirt',
      description: 'Vinyl',
      price: '36.00',
      category: 'rock'
      
    },
    {
      id: 6,
      image: '/deadkennedys.webp',
      name: 'Alice In Chains - Dirt',
      description: 'Vinyl',
      price: '36.00',
      category: 'punk'
      
    },
    {
      id: 7,
      image: '/guns.webp',
      name: 'Alice In Chains - Dirt',
      description: 'Vinyl',
      price: '36.00',
      category: 'rock'
      
    },
    {
      id: 8,
      image: '/misfits.webp',
      name: 'Alice In Chains - Dirt',
      description: 'Vinyl',
      price: '36.00',
      category: 'punk'
      
    },
    {
      id: 9,
      image: '/queen.jpg',
      name: 'Alice In Chains - Dirt',
      description: 'Vinyl',
      price: '36.00',
      category: 'rock'
      
    },
    {
      id: 10,
      image: '/ramones.webp',
      name: 'Alice In Chains - Dirt',
      description: 'Vinyl',
      price: '36.00',
      category: 'punk'
      
    },
    {
      id: 11,
      image: '/skidrow.jpg',
      name: 'Alice In Chains - Dirt',
      description: 'Vinyl',
      price: '36.00',
      category: 'rock'
      
    },
    {
      id: 12,
      image: '/sexpistols.webp',
      name: 'Alice In Chains - Dirt',
      description: 'Vinyl',
      price: '36.00',
      category: 'punk'
      
    },
     {
       id: 13,
       image: '/death.jpg',
       name: 'Death - The Sound of Perseverance',
       description: 'Vinyl',
       price: '29.99',
       category: 'metal',
     },
     {
       id: 14,
       image: '/megadeth.png',
       name: 'Megadeth - Unplagged in Boston',
       description: 'Vinyl',
       price: '28.00',
       category: 'metal'
     },
     {
       id: 15,
       image: '/metallica.webp',
       name: 'Metallica - Black Album',
       description: 'Vinyl',
       price: '38.75',
       category: 'metal'
     },
     {
       id: 16,
       image: '/pantera.jpg',
       name: 'Pantera - Vulgar Display of Power',
       description: 'Vinyl',
       price: '36.00',
       category: 'metal',
     },
     {
       id: 17,
       image: '/sepultura.jpg',
       name: 'Sepultura - Roots',
       description: 'Vinyl',
       price: '30.00',
       category: 'metal'
     },
     {
       id: 18,
       image: '/slayer.webp',
       name: 'Slayer - Show no Mercy',
       description: 'Vinyl',
       price: '25.50',
       category: 'metal',
     },
     {
       id: 19,
       image: '/slipknot.webp',
       name: 'Slipknot - We are no you kind',
       description: 'Vinyl',
       price: '35.95',
       category: 'metal',
     },
     {
       id: 20,
       image: '/suicidal.webp',
       name: 'Suicidal Tendencies - Suicidal Tendencies',
       description: 'Vinyl',
       price: '31.00',
       category: 'metal'
     },
     
   ];

   const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);




  
   
    return (
    <div>
      {/* Paso 3: Agrega un selector de categoría en tu JSX */}
      <div className="category-selector">
        <label className='cat' htmlFor="category">Musical genre: </label>
        <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="rock">Rock</option>
          <option value="metal">Metal</option>
          <option value="punk">Punk</option>
        </select>
      </div>

      {/* Paso 4: Utiliza filteredProducts en el mapeo */}
      <div className="product-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <img
              style={{ width: '300px', height: '200px', objectFit: 'cover' }}
              src={product.image}
              alt={product.name}
              className="card-image"
            />
            <div className="card-details">
              <div className="name">{product.name}</div>
              <div className="description">{product.description}</div>
              <div className="price">${product.price}</div>
              <CartCounter onAddToCart={(quantity) => handleAddToCart(product, quantity)} />
            </div>
          </div>
        ))}
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
};
export default Product;