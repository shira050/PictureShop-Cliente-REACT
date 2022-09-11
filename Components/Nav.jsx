import React from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';
import { BrowserRouter, Link, NavLink, Redirect, Route ,Switch} from 'react-router-dom';
import { Component } from 'react';
import SignIn from './SignIn';
import Main from './Main';
import ShowProducts from './ShowProducts';
import FormPage from './SignUp';
import ShowPicturesByCategory from './ShowPicturesByCategory';
import Menneger from './Menneger';
import OneProductOnClik from './OneProductOnClik';
import { isMenneger,loadOneUser } from '../Redax/Users/UserAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ShowUsers from './ShowUsers';
import bless from './buyBlessFromMenneger';
import {  MDBNavbarBrand, MDBNavItem, MDBNavLink, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from "mdbreact";
import eCommercePage from './ShopingBasket';
import { withRouter } from 'react-router-dom';
import {useNavigate} from 'react-router';

class TheNav extends Component {

  render() {
 
    return (
      <BrowserRouter>
        <div>
          <Nav></Nav>
          
          <Switch>
          <Route path='/home' exact component={Main} />
            <Route path="/products" exact component={ShowProducts} store={store} />
            <Route path="/sign" exact component={FormPage} store={store} />
            <Route path="/sign_in" exact component={SignIn} store={store} />
            <Route path='/category' exact component={ShowPicturesByCategory} />
            <Route path="/basket" exact component={eCommercePage} store={store} />

            <Route path="/users" exact component={ShowUsers} store={store} />
            <Route path="/menneger" exact component={Menneger} store={store} />
                 <Route  path="/oneProduct/:codeProduct"  component={OneProductOnClik} ></Route>
            <Route exact path="/products/:codeCategory" exact component={ShowProducts} store={store}></Route>
            <Route path="/sign/:nameUser/:passUser" exact component={FormPage} store={store} />
            <Route path='/bless' exact component={bless} />

          <Route path='/signUppdate' exact component={FormPage} />
          {/* <Redirect from="/" to="/home" exact /> */}
            {/* <Route component={PageNotFound}  ></Route> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}


function Nav() { 
  const dispatch = useDispatch();
  const M = useSelector((store) => {return store.users.isMenneger });
  const U = useSelector((store) => {return store.users.user });


  return (
    <header style={{ direction: 'rtl', fontWeight: 'bold', fontSize: '20px' }}>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <div className='collapse navbar-collapse' id='navbarExample01'>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
            <MDBNavbarNav right>
            <MDBNavbarBrand>
          <strong className="white-text"><MDBIcon className='ms-1' icon="object-group" size='2x' /></strong>
        </MDBNavbarBrand>
              <MDBNavbarItem active>
              <MDBNavbarLink>  <NavLink aria-current='page' to='/home'>  דף הביית </NavLink></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <MDBNavbarLink>  <NavLink to='/products' >צפה בכל המוצרים</NavLink></MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              <MDBNavbarLink>  <NavLink to='/category' >צפה במוצרים לפי קטגוריות</NavLink></MDBNavbarLink>
              </MDBNavbarItem>
              {(U.passwordUser !="")&&
              <MDBNavbarItem>
              <MDBNavbarLink>  <NavLink to='/basket' >סל הקניות שלי</NavLink></MDBNavbarLink>
              </MDBNavbarItem>
              }
              {(M == 1)&&
              <MDBNavbarItem>
              <MDBNavbarLink>  <NavLink to='/users' >רשימת החברים</NavLink></MDBNavbarLink>
              </MDBNavbarItem>}
              </MDBNavbarNav>
              <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" /> 
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <NavLink to='/sign_in'><MDBDropdownItem>התחבר</MDBDropdownItem></NavLink>
                 <NavLink to='/menneger' > <MDBDropdownItem >היכנס כמנהל</MDBDropdownItem></NavLink>
                 {(M == 1)&&
                 <button onClick={()=>{(dispatch(isMenneger(0))),alert("מצב מנהל כבוי")}}> <MDBDropdownItem>צא ממצב מנהל</MDBDropdownItem></button>
                 }
                  <NavLink to='/sign'><MDBDropdownItem>הרשם עכשיו</MDBDropdownItem></NavLink>
                  {(U.passwordUser !="")&&
                //  <NavLink > <MDBDropdownItem onClick={()=>upUser(U.nameUser,U.passwordUser)}>עדכן פרטיך אצלנו</MDBDropdownItem></NavLink>
                 <MDBDropdownItem ><NavLink to={`/sign/${U.nameUser}/${U.passwordUser}`}>עדכן פרטיך אצלנו</NavLink></MDBDropdownItem>

                 }
                  {(U.passwordUser !=""&&(M == 0))&&
              <MDBNavbarItem>
              <MDBNavbarLink>  <button onClick={()=>{( globalThis.location.href = 'http://localhost:3000/')}} >התנתק</button></MDBNavbarLink>
              </MDBNavbarItem>}
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
             
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.jpg')", height: 400 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>THE GALERY</h1>
              {(U.passwordUser =="")?
              <div>
              <h4 className='mb-3'>עדיין לא חבר אצלנו?</h4>
              <NavLink className='btn btn-outline-light btn-lg' to='sign' role='button'>
                הירשם עכשיו
              </NavLink></div>
              :
              <h4 className='mb-3'>ברוך הבא {U.nameUser}</h4>
             
}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};


function PageNotFound() {
  return <div>
    <h1>PageNotFound😢😁</h1>
    <Link to='/home'>
      <button>חזרה לדף הביית</button>
    </Link>
  </div>
}
const linkStyle = {
  color: "slategrey",
  borderLeft: "2px solid slategrey ",
  margin:"0,20px",
fontSize:"25px"
};




export default TheNav;

  // })


  
 