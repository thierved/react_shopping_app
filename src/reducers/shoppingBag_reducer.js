import {ADD_GROCERY, REMOVE_GROCERY} from '../actions';
import { addToBag } from './helper';


export default function shoppingBag(state=[], action) {
    switch (action.type) {
        case ADD_GROCERY:
            return [...state, addToBag(action.id)];
        case REMOVE_GROCERY:
            return state.filter((item) => item.id !== action.id);
        default:
            return state;
    }
}

