import { GetAllProductsInCategory } from '../Redax/Products/ProductThank';
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import {MDBCardHeader, MDBCardFooter, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MDBRow, MDBIcon } from 'mdbreact';
import {getAllCategoriesFromserver,getCategoriesByCode, AddCategory,UppdateCategory,RemoveCategory} from '../Redax/Categories/CategoryThank';
import { useEffect } from 'react';
import ShowProducts from './ShowProducts';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
export default withRouter(function ShowPicturesByCategory(Props){

  const [categoryList,setCategoryList]=useState ([]);
  const [productsInOneCategory, setproductsInOneCategory] = useState([]);
    const dispatch = useDispatch();
    const M = useSelector((store) => {return store.users.isMenneger });

    let myCategoriesFromServer,myCategory,myRemovecategory,myAddCategory,myUPPCategory;
  useEffect(async () => { 
    
   myCategoriesFromServer = await getAllCategoriesFromserver(dispatch);
    await setCategoryList(myCategoriesFromServer);
  },[]) 
  
  const PicCategory=async(dispatch,codeCategory) =>{
    debugger

Props.history.push(`/products/${codeCategory}`)
  return;
}
const addC=async()=>
{
  myAddCategory = await AddCategory(dispatch,document.getElementById("CategoryName").value,null);
   await setCategoryList(myAddCategory);

}
const deletC = async () => {
  let i = 0;
  debugger
  const codeC=document.getElementById("CategoryCodeToDelete").value;
   try{
     debugger
     myRemovecategory = await RemoveCategory(dispatch,codeC);
    await setCategoryList(myRemovecategory);
  alert("הקטגוריה נמחקה בהצלחה!");

 }
  catch{
    if(codeC==43)
    alert("ניסית למחוק ערך ברירת מחדל eror-")
   else 
    alert(" נראה שהקטגוריה איננה בדוק את הקוד שהזנת....");
  }
 
}
const uppCategory=async(code)=>
{
  myCategory = await getCategoriesByCode(dispatch,code);

 let n= prompt("הכנס שם");
 if(n){
   myUPPCategory = await UppdateCategory(dispatch,code,n);
    await setCategoryList(myUPPCategory);
 }
 


 
}
    return(
     
      <div>
<div style={{height:"35px"}}></div>
{ categoryList.map((x)=>(

<MDBCol md='4' style={{maxWidth:'30%', float:'right',margin:'10px 1%'}}>

<MDBCard
  className='card-image'
  style={{
    backgroundImage:'url(https://www.misgeret.co.il/Pics/misgeret-modern/332540-1793-15-08-19-L.jpg)',
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      
    }}
>
  <div className='text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4'>
    <div style={ {color:'black'}}>
     <MDBCardText> קוד קטגורייה:{x.codeCategory}</MDBCardText>
      <MDBCardTitle tag='h3' className='pt-2' style={{ color:"black"}}>
        <strong > {x.nameCategory} </strong>
      </MDBCardTitle>
      <MDBBtn color='deep-orange'>
        <NavLink onClick={()=>PicCategory(dispatch,x.codeCategory)}  icon='clone left' to={`/products/${x.codeCategory}`} > צפה בתמונות</NavLink>
      </MDBBtn>
      {(M == 1)&&
      <MDBBtn onClick={()=>uppCategory(x.codeCategory)}>לעדכון לחץ כאן</MDBBtn>}
    </div>
  </div>
</MDBCard>
</MDBCol>

))
  } 
    {(M == 1)&&
    <div>
<MDBCard alignment='center' style={{ display: 'block', maxWidth: '22rem', float: 'right', margin: "20px 20px" }}>
            <MDBCardHeader>מחק קטגורייה</MDBCardHeader>
<MDBCardBody>
<label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                הכנס קוד קטגוריה למחיקה
              </label>
              {/* <label> שים לב:  מחיקת קטגוריייה תשנה את הערך "קוד קטגורייה" בתמונות  לערך ברירת מחדל(43)</label> */}
              <input
                type="text"
                id="CategoryCodeToDelete"
                className="form-control"
              ></input>
<MDBBtn outline onClick={() => deletC()} >מחק</MDBBtn>
            </MDBCardBody>
</MDBCard>
<MDBCard alignment='center' style={{ display: 'block', maxWidth: '22rem', float: 'right', margin: "20px 20px" }}>
          
          
            <MDBCardHeader>הוסף קטגוריה</MDBCardHeader>
            <MDBCardBody>
              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
                הכנס שם קטגורייה
              </label>
              <input
                type="text"
                id="CategoryName"
                className="form-control"
              ></input>
               {/* <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light"
              >
               הכנס כתובת תמונה
              </label>
              <input
                type="text"
                id="CategoryPic"
                className="form-control"
              ></input> */}
              <MDBBtn outline onClick={() => addC()} >הוסף</MDBBtn>
            </MDBCardBody>
</MDBCard>
</div>
}



</div>)







})



  
   