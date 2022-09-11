import produce from 'immer';

const InvitesInitialState={
    invite:{},
    invaites:[],
    ShopingBasket:[]
 
}

export const InviteReducer=produce((state,action)=>{
    switch(action.type)
    {    
        
        
        //  case "LOAD_INVITE":state.invite=action.payload;break;
        // case "LOAD_INVITES":state.invaites.push(action.payload);break;
        case "ADD_INVITE":state.invaites.push(action.payload);break;
        // case "UPPDATE_INVITE":state.invaites.push(action.payload);break;
        // case "REMOVE_INVITE":state.invaites.push(action.payload);break;
      break;
    }
},InvitesInitialState)
