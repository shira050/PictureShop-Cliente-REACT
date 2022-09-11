
export function loadCategory(Category) {
    return { type: "LOAD_CATEGORY",paylod:Category }
}
export function loadCategories(Categories) {
    debugger
    return { type: "LOAD_CATEGORIES",paylod:Categories }
}
export function addCategory(Category) {
    return { type: "ADD_CATEGORY",paylod:Category }
}
export function uppdateCategory(Category) {
    return { type: "UPPDATE_CATEGORY",paylod:Category }
}

export function removeCategory(Category) {
    return { type: "REMOVE_CATEGORY",paylod:Category }
}


