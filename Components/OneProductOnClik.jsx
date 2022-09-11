import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { MDBNavLink } from "mdbreact"
import ShowProducts from './ShowProducts';
import { getCategoriesByCode } from '../Redax/Categories/CategoryThank';
import { useDispatch, useSelector } from "react-redux";
import { store } from '../Redax/Reducers';
import { useParams } from 'react-router';
import { loadProduct } from '../Redax/Products/ProductAction';
import { MDBNavbarLink } from 'mdb-react-ui-kit';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { getProductByCode } from '../Redax/Products/ProductThank';
import { useEffect, useState } from 'react/cjs/react.development';
import { loadOneUser } from '../Redax/Users/UserAction';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Params } from 'react-router';
import { addToBasket } from '../Redax/Users/UserAction';


import { withRouter } from 'react-router-dom';

export default withRouter(function OneProductOnClik(codePicture) {

  debugger
  const dispatch = useDispatch();
    let params = useParams();
  const M = useSelector((store) => { return store.users.isMenneger });
  const U = useSelector((store) => {return store.users.user });
  const [x, setX] = useState([]);
  const [cName, setCName] = useState('0');
  //  const cName=getCategoriesByCode(dispatch,x.CodeCategory).NameCategory;
  useEffect(async () => {
    debugger
   console.log(params.codeProduct);
    let p = await getProductByCode(dispatch, codePicture.match.params.codeProduct);
    await setX(p);
    debugger
  //   let c=await getCategoriesByCode(dispatch,x.CodeCategory);
  //   await alert(c.nameCategory);
  //   debugger
  //  await setCName(c);
   debugger
    
  },[]);
  
  debugger
  const addToB = (x) => {
    debugger
    if(U.codeUser =="")
    {
      debugger;
      alert("על מנת להוסיף פרטים עליך להירשם או להיכנס אם יש לך חשבון כבר");
    codePicture.history.push("/sign_in");

  }
  else
  {
    const pToBasket = {
      image:x.image,
      codePicture: x.codePicture,
      namePicture: x.namePicture,
      count: 1,
      price: x.price,
      finalPrice: x.price
    }
    dispatch(addToBasket(pToBasket));
     alert("המוצר נוסף בהצלחה");
 }
   
    }
  
  return (
    <>

      <MDBRow>
        <MDBCol style={{ maxWidth: "40rem" ,margin:'auto'}}>
          <MDBCard reverse>
            <MDBCardImage cascade style={{ height: '20rem' }} src={`http://localhost:9207/images/${x.image}`} />
            <MDBCardBody cascade className="text-center">
              <MDBCardTitle><strong>{x.namePicture}</strong></MDBCardTitle>
              <h5 className="indigo-text">              <MDBCardText  >בקטגורייה:{x.codeCategory}</MDBCardText>
</h5>
              <MDBCardText>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam.</MDBCardText>
              <p className='text-muted'>size:{x.size}</p>

              <p className='text-muted'>נשארו עוד: {x.acountInStore}</p>

              <MDBNavbarLink><MDBBtn onClick={()=>addToB(x)} >הוסף לסל</MDBBtn></MDBNavbarLink>
              <MDBNavbarLink><NavLink to='/products' >חזרה לכל המוצרים</NavLink></MDBNavbarLink>

<br></br>
              <a href="#!" className="icons-sm li-ic ml-1">
                <MDBIcon fab icon="linkedin-in" /></a>
              <a href="#!" className="icons-sm tw-ic ml-1">
                <MDBIcon fab icon="twitter" /></a>
              <a href="#!" className="icons-sm fb-ic ml-1">
                <MDBIcon fab icon="facebook-f" /></a>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>










    </>
  );
    })
