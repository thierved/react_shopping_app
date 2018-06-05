export const ADD_GROCERY = 'ADD_GROCERY';
export const REMOVE_GROCERY = 'REMOVE_GROCERY';

export function addGroceryById(id) {
    return {
        type: ADD_GROCERY,
        id
    }
}


export function removeGroceryById(id) {
    return {
        type: REMOVE_GROCERY,
        id
    }
}