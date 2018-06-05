import {ADD_GROCERY, REMOVE_GROCERY} from '../actions';
import groceryItemsList from '../data/groceryItems.json';
import { addToBag } from './helper';

export default function grocery(state=groceryItemsList, action) {
    switch (action.type) {
        case ADD_GROCERY:
            let grocery = state.filter(item => item.id !== action.id);
            return grocery;
        case REMOVE_GROCERY:
            return [...state, addToBag(action.id)]
        default:
            return state;
    }
}