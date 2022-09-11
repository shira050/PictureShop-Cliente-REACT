import axios from "axios"
import { useDispatch } from "react-redux";
import { loadProducts, loadProduct, addProduct, uppdateProduct, removeProduct, getAllProductsInCategory } from "./ProductAction";



export const productsURL = "http://localhost:9207/api/Products";



export const getAllProductsFromserver = async (dispatch) => {
    const productsPromise = axios.get(productsURL + "/GetAllProducts");
    const response = await productsPromise;
    const products = response.data;
    dispatch(loadProducts(products));
    return products;

}

export const getProductByCode = async (dispatch, code) => {
    const productPromise = axios.get(productsURL + "?code=" + code);
    const response = await productPromise;
    const product = response.data;
    dispatch(loadProduct(product));

    return product;

}

export const AddProduct = async (dispatch, namePicture, codeCategory, price, image, size, acountInStore) => {
    debugger
   
    const newP = {
        CodePicture: 0,
        NamePicture: namePicture,
        CodeCategory: Number(codeCategory),
        Price: Number(price),
        Image: image,
        Size: size,
        AcountInStore: Number(acountInStore)
    };
    const productPromise = axios.post(productsURL, newP);
    debugger
    const response = await productPromise;
    const product = response.data;
    dispatch(addProduct(product));
    return product;
}

export const UppdateProduct = async (dispatch, code, namePicture, codeCategory, price, image, size, acountInStore) => {
    const uppP = { codePicture: 0, namePicture: namePicture, codeCategory: codeCategory, price: price, image: image, size: size, acountInStore: acountInStore };
    const productPromise = axios.put(productsURL + "/UppdateProduct/" + code, uppP);
    const response = await productPromise;
    const product = response.data;
    dispatch(uppdateProduct(product));
    return product;
}
export const RemoveProduct = async (dispatch, code) => {
    const productPromise = axios.delete(productsURL + "/RemoveProduct/" + code);
    const response = await productPromise;
    const product = response.data;
    dispatch(removeProduct(product));
    return product;
}

export const GetAllProductsInCategory = async (dispatch, codeCategory) => {
    const productPromise = axios.get(productsURL + "/GetAllProductsInCategory/" + codeCategory);
    const response = await productPromise;
    const product = response.data;
    dispatch(getAllProductsInCategory(product));
    return product;
}

