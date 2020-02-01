import products from '../products';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const initialState = {
  cart: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(action);
      return Object.assign({}, state, {
        cart: [...state.cart, products[action.productId]],
      });
    case REMOVE_FROM_CART:
      return Object.assign({}, state, {
        cart: state.cart.filter((_, index) => index !== action.productId),
      });
    default:
      return state;
  }
};

export default cart;
