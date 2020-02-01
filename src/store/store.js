import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';

import cart from './reducers';

const persist = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  persistState()
);

const store = createStore(cart, persist);

export default store;
