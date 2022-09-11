import { combineReducers, createStore } from "redux";
import { InviteReducer } from "./Invaites/InviteReducer";
import { UsersReducer } from "./Users/UserReducer";
import { ProductsReducer } from "./Products/ProductsReducer";
import { CategoryReducer } from "./Categories/CategoryReducer";


const Reducers = combineReducers(
    {
        users: UsersReducer,
         invites: InviteReducer,
         products: ProductsReducer,
         categories:CategoryReducer
    }
)

//בניית הסטור- המחסן הגלובאלי- שיכיר את כל הנתונים
export const store = createStore(Reducers);

//לצורך בדיקה בלבד- בדפדפן
window.store = store;