import { combineReducers } from 'redux';

import shoppingBag from './shoppingBag_reducer';
import grocery from './grocery_reducer';
import pocket from './pocket_reducer';


const rootReducers = combineReducers({
    grocery,
    shoppingBag,
    pocket
});

export default rootReducers;