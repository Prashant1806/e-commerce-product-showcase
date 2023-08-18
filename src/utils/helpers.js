// helpers.js

// Format a price to a user-friendly currency format
export function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

// Calculate the total price of items in the cart
export function calculateTotal(cartItems) {
  return cartItems.reduce((total, item) => total + item.price, 0);
}
