import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBRow, MDBCol, MDBInput } from 'mdbreact';
import { getUserFromserverBynameAndPass } from "../Redax/Users/UserThank";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import ShowProducts from "./ShowProducts";
import FormPage from "./SignUp";

class SignIn extends Component {

  state = {
    modal: false
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  // dispatch={
  //   dispatch:useDispatch()
  // }
  render() {
   

  //  const dispatch=useDispatch();
    //  const IsMember = async(dispatch) => {
    //     const name = document.getElementById("name").value;
    //     const pass = document.getElementById("pass").value;
    //     const user =  await getUserFromserverBynameAndPass(dispatch, name, pass);
    //     if (user) {
    //       // console.log(user);
    //       // <ShowProducts></ShowProducts>
    //       //איך אפשר להביא רקקקק את הפונקצייה הזו בלי כל השאר?????????????
    //       globalThis.location.href='http://localhost:3000/home';
    //     return user;
    //     }
    //     else
    //      {
    //        alert("אחד או יותר מהנתונים שגוי...");

    //       // <NavLink to='/signUppdate'>הירשם</NavLink>
    //       return;
    //     }

    //     // return user;
    //     }

    return (

      <MDBContainer>
        <MDBBtn onClick={this.toggle}>התחבר</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>הכנס את שמך ואת הסיסמא האישית שלך</MDBModalHeader>
          <MDBModalBody>

            <form>
              {/* <p className="h5 text-center mb-4">Sign in</p> */}
              <div className="grey-text">
                <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
                  success="right" id="name" />

                <MDBInput label="Your password" icon="lock" group type="password" validate id="pass" />
              </div>


              <div className="text-center">
</div>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
            <MDBBtn color="primary" onClick={() => IsMember()}>כניסה</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}





export default SignIn;

async function IsMember() {

  const name = document.getElementById("name").value;
const pass = document.getElementById("pass").value;


const user = await getUserFromserverBynameAndPass(this.dispatch, name, pass);
if (user) {
  // console.log(user);
  // <ShowProducts></ShowProducts>
  //איך אפשר להביא רקקקק את הפונקצייה הזו בלי כל השאר?????????????
  globalThis.location.href = 'http://localhost:3000/home';
  return user;
}
else {
  alert("אחד או יותר מהנתונים שגוי...");

  // <NavLink to='/signUppdate'>הירשם</NavLink>
  return;
}


};