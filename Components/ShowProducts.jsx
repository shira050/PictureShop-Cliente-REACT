
import { useDebugValue, useEffect } from 'react';
import { getAllProductsFromserver, getProductByCode, UppdateProduct, RemoveProduct, GetAllProductsInCategory, AddProduct } from '../Redax/Products/ProductThank';
import { getCategoriesByCode } from '../Redax/Categories/CategoryThank';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import { MDBNavbarLink } from 'mdb-react-ui-kit';
import OneProductOnClik from './OneProductOnClik';
import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn } from 'mdb-react-ui-kit';
import { store } from '../Redax/Reducers';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { isMenneger } from '../Redax/Users/UserAction';
import { MDBIcon } from 'mdbreact';
import { MDBCardImage, MDBCol } from 'mdbreact';
import { MDBInput } from 'mdbreact';
import { Navigate } from 'react-router';
import { uppdateProduct } from '../Redax/Products/ProductAction';
import { addToBasket } from '../Redax/Users/UserAction';
import { withRouter } from 'react-router-dom';
import { getAllCategoriesFromserver } from '../Redax/Categories/CategoryThank';
export default withRouter(function ShowProducts(Props){
  let params=useParams();
  let [cat,setCat]=useState();
  const dispatch=useDispatch();

  const validateName = (event) => {
    setOneProduct({ ...OneProduct, namePicture: event.target.value })
  }
  const validateCodeCategory =async (event,dispatch) => {
    debugger
 
     setCat(event.target.value);
     debugger
    let c=await getCategoriesByCode(dispatch,event.target.value);
   
    debugger
    if (!c)
    {
      alert("עליך לבחור באחת הקטגוריות המפורטות בלבד!");
      setCat(null);
    }
    
    // else
    setOneProduct({ ...OneProduct, codeCategory:cat })

  }
  const validatePrice = (event) => {
    if (event.target.value < 0)
      alert("המחיר אינו תקין");
    else
      setOneProduct({ ...OneProduct, price: event.target.value })
  }
  const validateImage = (event) => {
    setOneProduct({ ...OneProduct, image: event.target.value })
  }
  const validateSize = (event) => {
    setOneProduct({ ...OneProduct, size: event.target.value })
  }
  const validateAcountInStore = (event) => {
    if (event.target.value < 0)
      alert("כמות לא יכולה להיות שלילית!!");
    setOneProduct({ ...OneProduct, acountInStore: event.target.value })
  }


  debugger;
  let myProductsFromServer;
  let myProduct, myUPPProduct, myCodeForAddProduct, myRemoveProduct, myProductOfCategory;
  const [productList, setProductList] = useState([]);
  const [OneProduct, setOneProduct] = useState({ codePicture: "", namePicture: "", codeCategory: "", price: "", image: "", size: "", acountInStore: "" });
  const [productsInOneCategory, setproductsInOneCategory] = useState([]);
  const M = useSelector((store) => { return store.users.isMenneger });
  const U = useSelector((store) => { return store.users.user });

  const [cName, setCName] = useState();
  console.log(M);


  useEffect(async () => {
    debugger;
    
    if (Props.match.params.codeCategory) {
      myProductOfCategory = await GetAllProductsInCategory(dispatch, Props.match.params.codeCategory);
      await setproductsInOneCategory(myProductOfCategory);
      await setProductList(myProductOfCategory);

    }

    else {
      debugger
      myProductsFromServer = await getAllProductsFromserver(dispatch);
      await setProductList(myProductsFromServer);
    }

    // myProduct = await getProductByCode(dispatch, "4");
    // await setOneProduct(myProduct);


    //  myCodeForAddProduct = await AddProduct(dispatch,"ppp","3","100"," "," ","10");   
    //  await setProductList(myCodeForAddProduct);

    //  myUPPProduct = await UppdateProduct(dispatch,"146",",,,","3","100"," "," ","10");
    //  await setProductList(myUPPProduct);

    //  myRemoveProduct = await RemoveProduct(dispatch,"146");
    //  await setProductList(myRemoveProduct);

    //  myProductOfCategory = await GetAllProductsInCategory(dispatch,codeCategory);
    //  await setproductsInOneCategory(myProductOfCategory);

  }, []);
  const addP = async (code) => {
    if (!code) {
      myCodeForAddProduct = await AddProduct(dispatch, document.getElementById("PicName").value, document.getElementById("CategoryName").value, document.getElementById("PicPrice").value, null, document.getElementById("PicSize").value, document.getElementById("PicCount").value);
      await setProductList(myCodeForAddProduct);
      debugger
      alert("המוצר נוסף בהצלחה");
    }
    else {
      let p = await getProductByCode(dispatch, code);
      await setOneProduct(p);
    }



  }
  const uppP = async () => {

    parseInt(OneProduct.codeCategory, 10);
    parseInt(OneProduct.price, 10);
    parseInt(OneProduct.acountInStore, 10);
    debugger
    let u = await UppdateProduct(dispatch, OneProduct.codePicture, OneProduct.namePicture, OneProduct.codeCategory, OneProduct.price, OneProduct.image, OneProduct.size, OneProduct.acountInStore);
    await setProductList(u);
    debugger
    console.log(u);

    await alert("המוצר עודכן בהצלחה!");
    setOneProduct({ codePicture: "", namePicture: "", codeCategory: "", price: "", image: "", size: "", acountInStore: "" });

  }
  const deletP = async () => {
    const codeP = document.getElementById("PicCodeToDelete").value;
    debugger;
    try {
      myRemoveProduct = await RemoveProduct(dispatch, codeP);
      await setProductList(myRemoveProduct);
      alert("המוצר נמחק בהצלחה!")
      return
    }
    catch {
      alert("נראה שהמוצר איננו בדוק את הקוד שהזנת....");
    }

  }

  const OneProductDetails = (x) => {
   Props.history.push(`/oneProduct/${x}`)
    
  }

  debugger;
  
  return <>

    <BrowserRouter>

      <div>

        {/* --------------------------------------כפתור הוספת  ומחיקת מוצר------------------------------------------------------------------------- */}
        {(M == 1) &&
          <div>
            <MDBCard id='add' className="my-5 px-5 pb-5" style={{ margin: '10px 20%', background: 'lightsteelblue' }}>
              <MDBIcon size='3x' icon="bookmark" className='ms-1' /><MDBCardHeader>אפשרויות מנהל:</MDBCardHeader>
              <MDBCardBody className="text-center">
                <MDBCard alignment='center' style={{ display: 'block', maxWidth: '22rem', float: 'right', margin: "0px 20px" }}>
                  <MDBIcon size='2x' icon="plus" />
                  <MDBCardHeader>הוסף מוצר</MDBCardHeader>
                  <MDBCardBody>
                    <label htmlFor="defaultFormEmailEx" className="grey-text font-weight-light">  הכנס שם תמונה</label>
                    <input type="text" id="PicName" className="form-control" value={OneProduct.namePicture} onChange={(e) => validateName(e)}></input>
                    <label htmlFor="defaultFormEmailEx" className="grey-text font-weight-light">בחר בקטגורייה המתאימה
                      <br />
                      בחר רק באחת האופציות
                    </label>
                  

                    <input type="text" id="CategoryName" className="form-control" value={OneProduct.codeCategory} onChange={(e) => validateCodeCategory(e,dispatch)}></input>
                    <label htmlFor="defaultFormEmailEx" className="grey-text font-weight-light"> הכנס מחיר תמונה </label>
                    <input type="text" id="PicPrice" className="form-control" value={OneProduct.price} onChange={(e) => validatePrice(e)}></input>
                    <label htmlFor="defaultFormEmailEx" className="grey-text font-weight-light">  הכנס גודל תמונה</label>
                    <input type="text" id="PicSize" className="form-control" value={OneProduct.size} onChange={(e) => validateSize(e)}></input>
                    <label htmlFor="defaultFormEmailEx" className="grey-text font-weight-light">  כמות התמונות בחנות כרגע</label>
                    <input type="text" id="PicCount" className="form-control" value={OneProduct.acountInStore} onChange={(e) => validateAcountInStore(e)} ></input>

                    {OneProduct.codePicture == "" ?
                      <MDBBtn outline onClick={() => addP()} >הוסף</MDBBtn>
                      :
                      <MDBBtn outline onClick={() => uppP()} >עדכן</MDBBtn>}


                  </MDBCardBody>
                </MDBCard>


                <MDBCard alignment='center' style={{ display: 'block', maxWidth: '22rem', float: 'right' }}>
                  <MDBIcon size='2x' icon="minus" />
                  <MDBCardHeader>מחק מוצר</MDBCardHeader>
                  <MDBCardBody>
                    <label htmlFor="defaultFormEmailEx" className="grey-text font-weight-light">
                      הכנס קוד תמונה למחיקה
                    </label>
                    <input type="text" id="PicCodeToDelete" className="form-control"></input>
                    <MDBBtn outline onClick={() => deletP()} >מחק</MDBBtn>
                  </MDBCardBody>
                </MDBCard>

              </MDBCardBody>
            </MDBCard>
          </div>
        }

        {(productList.length == 0) && <div class="info-msg" style={{ margin: '10px 0', padding: "10px", borderRadius: "3px 3px 3px 3px", color: "#059", backgroundColor: "lightsteelblue" }}>
          <i class="fa fa-info-circle"></i>
          אין עדיין תמונות.
        </div>}

        {productList.map((x) => (


          <MDBCard style={{ textAlign: "center", width: "22rem", float: 'right', margin: "20px 20px" }}>
            <MDBCardImage className="img-fluid" src={`http://localhost:9207/images/${x.image}`} style={{ height: '200px', width: '100%' }} waves />
            <MDBCardBody>
              <MDBCardHeader >קוד:{x.codePicture}<br /><MDBIcon icon="barcode" /></MDBCardHeader>

              <MDBCardTitle >{x.namePicture}</MDBCardTitle>
              <MDBCardText  >בקטגורייה:{x.codeCategory}</MDBCardText>
           
              <MDBCardFooter className='text-muted'>מחיר:{x.price}</MDBCardFooter>
           <MDBNavbarLink><MDBBtn onClick={() => OneProductDetails(x.codePicture)}  >פרטים נוספים</MDBBtn></MDBNavbarLink>
          
              {(M == 1) &&
                <MDBBtn href='#add' outline onClick={() => addP(x.codePicture)} >עדכן</MDBBtn>}

            </MDBCardBody>
          </MDBCard>
        ))

        }

      </div>

    </BrowserRouter>
  </>



})
