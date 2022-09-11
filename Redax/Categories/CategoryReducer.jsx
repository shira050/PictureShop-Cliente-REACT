
import produce from 'immer';

const CategoriesInitialState={
    category:{},
    categories:[]
 
}

export const CategoryReducer=produce((state,action)=>{ 
    switch(action.type)
    {    
       
        
         case "LOAD_CATEGORY":state.category=action.payload;break;
        case "LOAD_CATEGORIES":state.categories.push(action.payload);break;
        case "ADD_CATEGORY":state.categories.push(action.payload);break;
        case "UPPDATE_CATEGORY":state.categories.push(action.payload);break;
        case "REMOVE_CATEGORY":state.categories.push(action.payload);break;
      break;
    }
},CategoriesInitialState)
