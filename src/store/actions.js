export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (productId) => ({ type: ADD_TO_CART, productId });

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  productId,
});
