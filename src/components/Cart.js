import React from 'react';
import './Cart.css'; // You can create this CSS file for styling

function Cart({ cartItems }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <p className="cart-total">Total: ${calculateTotal()}</p>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
5555555555555555555555555555555555555555555555555
