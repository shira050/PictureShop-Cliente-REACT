import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { getUserFromserverBynameAndPass } from "../Redax/Users/UserThank";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import ShowProducts from "./ShowProducts";
import FormPage from "./SignUp";
import { loadOneUser } from "../Redax/Users/UserAction";
import { useSelector } from "react-redux";
import { isMenneger } from "../Redax/Users/UserAction";
import { NewBasket } from "../Redax/Users/UserAction";
import { withRouter } from 'react-router-dom';

const IsMember = async(dispatch,M) => {
 
const name = document.getElementById("name").value;
const pass = document.getElementById("pass").value;
const user =  await getUserFromserverBynameAndPass(dispatch, name, pass);

if (user) {

  dispatch(loadOneUser(user));
  alert("ברוך הבא " +name);
  debugger
 dispatch(NewBasket(null));

return user;
}
else
 {
   alert("אחד או יותר מהנתונים שגוי...");
  
  return;
}

}



export default function SignIn() {
  const dispatch=useDispatch();
  const M = useSelector((store) => {return store.users.isMenneger });

  return (
    <Route>
      <div>
     
       
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
               
              <form>
                <p className="h5 text-center mb-4">Sign in</p>
                <div className="grey-text">
                  <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                    success="right" id="name" />

                  <MDBInput label="Your password" icon="lock" group type="password" validate id="pass" />
                </div>


                <div className="text-center">
                 
      
<MDBBtn color="primary"  onClick={()=>IsMember(dispatch,M)}>כניסה</MDBBtn> 
              
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </Route>
  );
};

