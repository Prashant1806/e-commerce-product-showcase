import React from 'react';
import Cart from '../components/Cart';
import './CartPage.css'; // You can create this CSS file for styling

function CartPage({ cartItems }) {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default CartPage;
