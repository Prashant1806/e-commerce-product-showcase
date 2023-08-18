// api.js

// Simulated product data
const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: '/images/product1.jpg', description: 'Lorem ipsum dolor sit amet.' },
  { id: 2, name: 'Product 2', price: 24.99, image: '/images/product2.jpg', description: 'Consectetur adipiscing elit.' },
  // Add more mock products here
];

// Simulate fetching products from an API
export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000); // Simulate a delay of 1 second
  });
}
