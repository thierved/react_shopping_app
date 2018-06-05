import groceryItemsList from '../data/groceryItems.json';

export function addToBag(id) {
    return groceryItemsList.find((item) => item.id === id);
}