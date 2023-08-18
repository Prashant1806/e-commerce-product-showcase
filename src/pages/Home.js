import React, { useState } from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import './Home.css'; // You can create this CSS file for styling

function Home() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="home">
      <div className="product-list-container">
        <h2>Product List</h2>
        <ProductList products={dummyProductData} onAddToCart={addToCart} />
      </div>
      <div className="cart-container">
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

const dummyProductData = [
  { id: 1, name: 'Product 1', price: 19.99, image: '/images/product1.jpg' },
  { id: 2, name: 'Product 2', price: 24.99, image: '/images/product2.jpg' },
  // Add more products here
];

export default Home;
5555555555
