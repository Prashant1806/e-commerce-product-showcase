import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css'; // You can create this CSS file for styling

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
