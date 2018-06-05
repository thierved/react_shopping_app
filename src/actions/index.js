export const ADD_GROCERY = 'ADD_GROCERY';
export const REMOVE_GROCERY = 'REMOVE_GROCERY';

export const ADD_POCKET = 'ADD_POCKET';
export const REMOVE_POCKET = 'REMOVE_POCKET';


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

export function addPocketById(id) {
    return {
        type: ADD_POCKET,
        id
    }
}

export function removePocketById(id) {
    return {
        type: REMOVE_POCKET,
        id
    }
}