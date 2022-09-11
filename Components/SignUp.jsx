import React from "react";
import { useState } from "react/cjs/react.development"
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { MDBAlert } from 'mdbreact';
import { useEffect } from "react"; 
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn
} from "mdbreact";
import { useDispatch } from "react-redux";
import SignIn from "./SignIn";
import { AddUser ,UppdateUser} from "../Redax/Users/UserThank";
import { render } from "react-dom";
import {store} from '../Redax/Reducers';

import { MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import ShowProducts from "./ShowProducts";
import { getUserFromserverBynameAndPass } from "../Redax/Users/UserThank";
import { MDBPaginationLink } from "mdb-react-ui-kit";
import { NewBasket } from "../Redax/Users/UserAction";
import { withRouter } from 'react-router-dom';
import { loadOneUser } from "../Redax/Users/UserAction";
export default withRouter(function FormPage(User){

  debugger
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({ nameUser: "שדה חובה", pass: "שדה חובה" });
  const [user, setUser] = useState({});
   
  useEffect(async () => {
    if(User.match.params.passUser)
    {
      let myUser = await getUserFromserverBynameAndPass(dispatch,(User.match.params.nameUser),(User.match.params.passUser));
      await setUser(myUser);
    }
   
  },[])

  const newUser =async (dispatch) => {
      if(user.nameUser&&user.passwordUser&&!(User.match.params.passUser))
     {dispatch(NewBasket(null));
       await AddUser(dispatch, user.nameUser, user.passwordUser, user.emailUser);
      
      dispatch(loadOneUser(user));
alert("ברוך הבא "+ user.nameUser);
      User.history.push("/products");

     }
     else if(User.match.params.passUser){
      await UppdateUser(dispatch,user.codeUser, user.nameUser, user.passwordUser, user.emailUser);
      alert( user.nameUser +"עודכן בהצלחה")
     }
     else
     {
      alert("שם וסיסמא הינם שדות חובה על מנת להירשם");
      
    }
  }

  const validateName = (event) => {

    if (!event.target.value)
      setErrors({ ...errors, nameUser: "שדה חובה" });
    else if (event.target.value.includes(" "))
      setErrors({ ...errors, nameUser: "אין לשים רווח" });
    else {
      setErrors({ ...errors, nameUser: "תקין!" }); 
      setUser({ ...user, nameUser: event.target.value })
    }
   
  }

  const validatePass = (event) => {

    var passw = /^[A-Za-z]\w{7,14}$/;
    if (event.target.value.match(passw)) {
      setErrors({ ...errors, pass: "תקין!" });
      setUser({ ...user, passwordUser: event.target.value })
    }
    else {
      setErrors({ ...errors, pass: 'Wrong...!! password password between 7 to 16 characters which contain only characters, numeric digits, underscore and first character must be a letter' })
     
    }
   

  }
  const validateEmail = (event) => {
    if (!event.target.value) {
      setErrors({ ...errors, email: "שדה חובה!" });

    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(event.target.value)) {
      setErrors({ ...errors, email: "לא תקין!" });
    }
    else {
      setErrors({ ...errors, email: "תקין!" });
setUser({ ...user, emailUser: event.target.value })
    } 
  }

return(

      <MDBAlert width='10%' dismiss>
  <Route>
    <div style={{margin:'auto'}}>
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header warm-flame-gradient rounded">
            
                {! (User.match.params.codeUser) ?
                  <h3 className="my-3">
                       <MDBIcon icon="lock" />
                  הירשם:
                  </h3>
                  :
                  <h3 className="my-3">
                     <MDBIcon icon="lock" /> 
                  טופס עדכון:
                 
                  </h3>
                }

              </MDBCardHeader>
              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                הכנס שם
              </label>
              <input
                type="text"
                id="defaultFormNameEx"
                className="form-control"
                value={user.nameUser} onChange={(e) => validateName(e)} name="nameUser"
              ></input>
              <p > *{errors.nameUser}</p>

              <label
                htmlFor="defaultFormPasswordEx"
                className="grey-text font-weight-light"
              >
                הכנס סיסמא אישית
              </label>
              <input
                type="password"
                id="defaultFormPasswordEx"
                className="form-control"
                name="pass"
                value={user.passwordUser}
                onChange={(e) => validatePass(e)}
              />
              <p>*{errors.pass}</p>


              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                הכנס אימייל
              </label>
              <input
                type="email"
                id="defaultFormEmailEx"
                className="form-control"
                name="email" value={user.emailUser} onChange={(e) => validateEmail(e)}
              ></input>
              <p > *{errors.email}</p>
              <div className="text-center mt-4">
                <MDBBtn color="deep-orange" className="mb-3" type="submit" onClick={() => newUser(dispatch)}>
                  שלח
                </MDBBtn>
              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    </Route>
    </MDBAlert>
   
  );
            })



