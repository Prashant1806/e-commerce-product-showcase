import React from 'react';
import './ProductCard.css'; // You can create this CSS file for styling

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price}</p>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
