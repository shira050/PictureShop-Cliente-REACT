import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { getUserFromserverBynameAndPass } from "../Redax/Users/UserThank";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import ShowProducts from "./ShowProducts";
import FormPage from "./SignUp";
import { store } from "../Redax/Reducers";
import { isMenneger } from '../Redax/Users/UserAction';
import { Navigate } from 'react-router';
import { withRouter } from 'react-router-dom';

export default withRouter(function Menneger(Props) {

  const dispatch = useDispatch();
  
  const IsMember = async (dispatch) => {
    const name = document.getElementById("name").value;
    const pass = document.getElementById("pass").value;
    const Mpass = document.getElementById("Mpass").value;

    const user = await getUserFromserverBynameAndPass(dispatch, name, pass);
    if (user && Mpass == "1234") {
      dispatch(isMenneger(1));
     
      alert("ברוך הבא " + name);
      alert("הינך על מצב מנהל אנא ודא את שינוי הגדרת המשתמש לפני יציאתך...");
      Props.history.push("/products");
      
      return user;
    }
    else {
      alert("אחד או יותר מהנתונים שגוי...");
      return;
    }

  }





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

                  <MDBInput label="Your menneger password" icon="lock" group type="password" validate id="Mpass" />


                </div>


                <div className="text-center">


                  <MDBBtn color="primary" onClick={() => IsMember(dispatch)}>כניסה</MDBBtn>

                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </Route>
  );
})

