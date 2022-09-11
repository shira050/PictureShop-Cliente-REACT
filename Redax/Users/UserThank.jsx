import axios from "axios"
import { useDispatch } from "react-redux";
import {loadUsers,loadOneUser,addUser,uppdateUser,removeUser} from './UserAction';
import { useSelector } from "react-redux";
import { updateProductInBasket } from "./UserAction";
export const userURL="http://localhost:9207/api/Users";
//    const Basket=useSelector((s)=>{return s.users.basket});

export const getAllUsersFromserver = async (dispatch) => {
  
    const usersPromise = axios.get(userURL+"/GetAllUsers");
    const response = await usersPromise;
    const users = response.data;
   await dispatch(loadUsers(users));
    return users;

}


export const getUserFromserverBynameAndPass = async (dispatch, name,pass) => {
     const userPromise = axios.get(userURL+"?name="+name+"&password="+pass);
    const response = await userPromise;
    const user = response.data;
   await dispatch(loadOneUser(user));
    return user;
}
export const AddUser = async(dispatch,NameUser,PasswordUser,EmailUser)=>
 {   
      const newU={ codeUser: 0,nameUser: NameUser,passwordUser:PasswordUser,emailUser:EmailUser};
     const userPromise = axios.post(userURL,newU);
     const response = await userPromise;
     const user = response.data;
    await dispatch(addUser(user));
    await dispatch(loadOneUser(user));
     return user;
}

export const UppdateUser = async(dispatch,code,NameUser,PasswordUser,EmailUser)=>
{           
      const uppU={ codeUser: 0,nameUser: NameUser,passwordUser:PasswordUser,emailUser:EmailUser};
     const userPromise = axios.put(userURL+"/UppdateUser/"+code,uppU);
     const response = await userPromise;
     const user = response.data;
    await dispatch(uppdateUser(user));
     return user;
}
export const RemoveUser = async(dispatch,code)=>
{   const userPromise = axios.delete(userURL+"/RemoveUser/"+code);
const response = await userPromise;
const user = response.data;
await dispatch(removeUser(user));
return user;
}



// סל קניות

export const updateProductB =async(dispatch,uppP,count,Basket)=>     
{   
     debugger
 //  const Basket=useSelector((s)=>{return s.users.basket});

//      for(i=0;i<Basket.length;i++)
//      if(Basket[i].codePicture==uppP.codePicture)
// break;

// // Basket[i].codePicture=uppP.codePicture,
// // Basket[i].namePicture=uppP.namePicture,
 uppP.count=count;
// // Basket[i].price=uppP.price,
// Basket[i].finalPrice=uppP.price*uppP.count
      
 await dispatch(updateProductInBasket(uppP));
return Basket;
}



