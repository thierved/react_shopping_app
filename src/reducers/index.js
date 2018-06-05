import { combineReducers } from 'redux';

import shoppingBag from './shoppingBag_reducer';
import grocery from './grocery_reducer';


const rootReducers = combineReducers({
    grocery,
    shoppingBag
});

export default rootReducers;