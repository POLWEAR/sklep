import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage';

import cart from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persist = composeEnhancers(persistState());

const store = createStore(cart, persist);

export default store;
