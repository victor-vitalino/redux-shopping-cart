import {combineReducers} from 'redux';

import cart from './cart/reducer';

// combinando varios reducers
export default combineReducers({
    cart,
})