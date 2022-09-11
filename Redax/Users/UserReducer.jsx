import produce from 'immer';
import { getAllUsersFromserver } from './UserThank';
const UsersInitialState={
    
    user:{codeUser:"",passwordUser:"",nameUser:"אורח",emailUser:""},
    users:[] ,
    menneger_pass:'',
    isMenneger:0,
    basket:[],
    finalPriceInBasket:0
}

//  const finalPriceInBasket=()=>{
//     let i,sum=0;
//     for(i=0;i<state.Basket.length  ;i++)
//   sum+=state.Basket[i].finalPrice;
//     state.finalPrice=sum
//   }
export const UsersReducer=produce((state,action)=>{
    let i;
    switch(action.type)
    {
        case "LOAD_USER":state.user=action.payload;break;
        case "LOAD_USERS":state.users.push(action.payload);break;
        case "ADD_USER":state.users.push(action.payload);break;
        case "UPPDATE_USER":state.users.push(action.payload);break;
        case "REMOVE_USER":state.users.push(action.payload);break;
        case "IS_MENNEGER":state.isMenneger=action.payload;break;
   
   
        //   סל קניות
        case "ADD_BASKET":state.basket.push(action.payload);
         state.finalPriceInBasket+=(action.payload).finalPrice;
        break;//בהתחברות המשתמש
        case "DELETE_BASKET": state.basket.length=0;
        state.finalPriceInBasket=0;
        break;//בהתנתקות
        case "UPPDATE_BASKET": 
        for(i=0;i<state.basket.length;i++)
        if(state.basket[i].codePicture==(action.payload).codePicture)
   break;
   debugger
   state.basket[i].count=(action.payload).count;
   state.finalPriceInBasket-=(state.basket[i].finalPrice);

   state.basket[i].finalPrice=state.basket[i].price*(action.payload).count ;
   state.finalPriceInBasket+=(state.basket[i].finalPrice);

  break;
        case "REMOVE_BASKET":
             state.finalPriceInBasket-=action.payload.finalPrice;
    
        state.basket=state.basket.filter(x=>x.codePicture!=(action.payload.codePicture));
        break;

    }
},UsersInitialState)