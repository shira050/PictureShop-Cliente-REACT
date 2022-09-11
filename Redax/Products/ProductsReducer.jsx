
import produce from 'immer';

const ProductsInitialState={
    product:{},
    products:[],
    productsInOneCategory:[]

}


export const ProductsReducer=produce((state,action)=>{
    switch(action.type)
    {
        case "LOAD_PRODUCT":state.product=action.payload;break;
        case "LOAD_PRODUCTS":state.products.push(action.payload);break;
        case "ADD_PRODUCTS":state.products.push(action.payload);break;
        case "UPPDATE_PRODUCTS":state.products.push(action.payload);break;
        case "REMOVE_PRODUCTS":state.products.push(action.payload);break;
        case "GET_BY_CATEGORY_PRODUCTS":state.productsInOneCategory.push(action.payload);break;
      break;
    }
},ProductsInitialState)