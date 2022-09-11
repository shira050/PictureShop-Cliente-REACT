
export function loadProducts(Products) {
    return { type: "LOAD_PRODUCTS",payload:Products }
}
export function loadProduct(Product) {
    return { type: "LOAD_PRODUCT",payload:Product }
}
export function addProduct(Products) {
    return { type: "ADD_PRODUCTS",payload:Products }
}
export function uppdateProduct(Products) {
    return { type: "UPPDATE_PRODUCTS",payload:Products }
}

export function removeProduct(Products) {
    return { type: "REMOVE_PRODUCTS",payload:Products }
}
export function getAllProductsInCategory(Products) {
    return { type: "GET_BY_CATEGORY_PRODUCTS",payload:Products }
}
