
import { useDispatch, useSelector } from "react-redux";
import { store } from "../Reducers";
import { addInvite } from "./InviteAction";
import { NewBasket } from "../Users/UserAction";
import axios from "axios";
import React from "react";
import { MDBContainer, MDBAlert } from 'mdbreact';

// export const AddProductToBasket = async (codeP) => {
//     try {
//         list.Add(p);
//         // listP.Add(p);
//         return true;
//     }
//     catch {
//         return false;
//     }


// }

// export const UppdateProductInBasket = async (p) => {

//     try {
//         let i=0;
//       while (list[i].CodePicture!=p.CodePicture)i++;
//       list[i]=p;
//         return true;
//     }
//     catch {
//         return false;
//     }


// }

// export const DeleteProductFromBasket = async (p) => {
//     try {
//         let i=0;
//       while (list[i].CodePicture!=p.CodePicture)i++;
//       list[i]=null;
//         return true;
//     }
//     catch {
//         return false;
//     }


// }
export const inviteURL = "http://localhost:9207/api/Invaites";

export const DoInviteByBascet = async (dispatch, Basket,id) => 
{



//  try{
       const invitePromise = axios.post(inviteURL + "?idUser=" + id, Basket);
  //  var card=prompt("הכנס סיסמת כרטיס אשראי");
  // const invitePromise = axios.post(inviteURL + "?idUser=" + id, [
  //   {
  //     "codePicture": 20,
  //     "namePicture": "חוף מחולק",
  //     "count": 2,
  //     "price": 200,
  //     "finalPrice": 400
  //   }
  // ]);
//    const response = await invitePromise;
// await dispatch(NewBasket(null));

   debugger
  // invite = response.data;
  // await dispatch(addInvite(invite));
  
  
  // return invite;
      // }

  //     // if(invite==false)
  //     // ;
//       catch{
//  alert("?????");
//  return;
//       }       
  // //  return invite.System.ArgumentException;
      
      // var card=prompt("הכנס סיסמת כרטיס אשראי");
      const response = await invitePromise;
      // await dispatch(NewBasket(null));

}


