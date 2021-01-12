import { STORAGE_YOUR_MOVIES } from '../globals/variables';

export const isItemInStorage = (newItem) => {
    let yourMovies = getStorage();
    if(!yourMovies){
        return null;
    }
    if(yourMovies.find(movie => movie.id === newItem.id)){
        return true;
    }
    return false;
}

export const setStorage = (newItem) => {

    let yourMovies = getStorage();
    if( yourMovies !== false){      
        yourMovies.push(newItem);
    }else{
        yourMovies = [newItem];
    }
    yourMovies = JSON.stringify(yourMovies);
    localStorage.setItem(STORAGE_YOUR_MOVIES, yourMovies);

}

export const getStorage = (storageItem = STORAGE_YOUR_MOVIES) => {
    let item = localStorage.getItem(storageItem);
    if(item){
        item = JSON.parse(item);
        return item;
    }else {
        return false;
    }
}

export const removeFromStorage = (movie) => {
    let items = getStorage();
    if(getStorage() === false){
        return false;
     }
    const isMovie = (current) => current.id === movie.id;
    let indexOfItemToRemove = items.findIndex(isMovie);
    items.splice(indexOfItemToRemove, 1);
    let itemsForStorage = JSON.stringify(items);
    localStorage.setItem(STORAGE_YOUR_MOVIES, itemsForStorage);
    return items;
}

export default getStorage