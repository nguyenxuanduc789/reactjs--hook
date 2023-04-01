import { combineReducers } from 'redux';
import products from './products';
import itemEditing from './itemEditing';
import cart from './cart';
import message from './message';

const appReducers = combineReducers({
    products,
    itemEditing,
    cart,
    message,
});

export default appReducers;
