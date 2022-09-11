import axios from "axios"
import { useDispatch } from "react-redux";
import {loadCategory,loadCategories,addCategory,uppdateCategory,removeCategory} from './CategoryAction';


export const categoriesURL="http://localhost:9207/api/Category";
// const code="4";

export const getAllCategoriesFromserver = async (dispatch) => {
    const categoriesPromise = axios.get(categoriesURL+"/GetAllCategories");
    const response = await categoriesPromise;
    const categories = response.data;
    dispatch(loadCategories(categories));
    return categories;
}

export const getCategoriesByCode = async (dispatch,code) => {
    
    const categoryPromise = axios.get(categoriesURL+"?code="+code);
    const response = await categoryPromise;
    const category = response.data;
     dispatch(loadCategory(category));
    return category;

}

export const AddCategory = async(dispatch,nameCategory,picCategory)=>
{   
    const newC = { CodeCategory: 0, NameCategory: nameCategory,PicCategoryRoute:picCategory } 
    const categoriesPromise = axios.post(categoriesURL,newC);
    const response = await categoriesPromise;
    const category = response.data;
     dispatch(addCategory(category));
    return category;
}

export const UppdateCategory = async(dispatch,idCategory,nameCategory)=>
{     
    const uppC = { CodeCategory: 0, NameCategory: nameCategory } 
      const categoriesPromise = axios.put(categoriesURL+"/UppdateCategory/"+idCategory,uppC);
    const response = await categoriesPromise;
    const category = response.data;
     dispatch(uppdateCategory(category));
    return category;
}
export const RemoveCategory = async(dispatch,code)=>
{   const categoriesPromise = axios.delete(categoriesURL+"/RemoveCategory/"+code);
const response = await categoriesPromise;
    const category = response.data;
    dispatch(removeCategory(category));
    return category;
}



