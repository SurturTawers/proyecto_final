import {ITEMS} from "../utils/items" 
const basePath = "../utils";

export function getAllItems(){
    return ITEMS;
    /*return fetch(`${basePath}/items.js`)
    .then((response)=>response.json())
    .then((res) => res)
    .catch((error) => {
        console.error("Error: ",error);
        return [];
    });*/
}
export function getCategoryItems(itemCat){
    /*
    return fetch(`${basePath}/items.js`)
    .then((response)=> response)
    .then((res) => res)
    .catch((error) => {
        console.error("Error: ",error);
        return null;
    });
    */
    let item = ITEMS.filter(item => item.category === itemCat);
    return item;
}

export function getItem(itemId){
    /*
    return fetch(`${basePath}/items.js`)
    .then((response)=> response)
    .then((res) => res)
    .catch((error) => {
        console.error("Error: ",error);
        return null;
    });
    */
    let item = ITEMS.find(item => item.id == itemId);
    return item;
}