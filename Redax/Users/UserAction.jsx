export function loadUsers(users) {
    return { type: "LOAD_USERS",payload:users }
}
export function loadOneUser(user) {
    return { type: "LOAD_USER",payload:user }
}
export function addUser(User) {
    return { type: "ADD_USER",payload:User }
}
export function uppdateUser(User) {
    return { type: "UPPDATE_USER",payload:User }
}

export function removeUser(User) {
    return { type: "REMOVE_USER",payload:User }
}

export function isMenneger(value) {
    return { type: "IS_MENNEGER",payload:value }
}



// פונקציו של סל קניות
export function addToBasket(value) {
    return { type: "ADD_BASKET",payload:value }
}
export function NewBasket(value) {
    return { type: "DELETE_BASKET",payload:value }
}
export function updateProductInBasket(value) {
    debugger
    return { type: "UPPDATE_BASKET",payload:value }
}
export function deletProductInBasket(value) {
    return { type: "REMOVE_BASKET",payload:value }
}
