// import { useSelector } from 'react-redux';
// import { BrowserRouter, Link, NavLink } from 'react-router-dom';
// import react, { useState } from "react";
// const Buy = () => {
//   const basket = useSelector((s) => { return s.invite.invite })
//   const [price, setPrice] = useState({ price: basket });
//   const [value, setValue] = useState(1);
//   const u = useSelector((s) => { return s.Users.user })
//   console.log(u);
//   let spcificuser = u;
//   console.log(basket.price)
//   const userinvaite = {
//     codeUser: spcificuser.codeUser,
//     nameUser: spcificuser.nameUser,
//     date: new Date(),
//     price: price
//   }
//   console.log(userinvaite)
//   const Count = (e) => {
//     debugger
//     e.preventDefault()
//     setValue(e.target.value);
//     setPrice(value)
//     console.log(price.price)
//   }
//   function RemoveProdFromBasket(f) {
//     let i = basket.indexOf(f);
//     if (i != -1) {
//       basket.splice(i, 1);
//       console.log(basket)
//     }
//   }
//   return <>
//     <div class="container mt-3">
//       <h2>Your Basket</h2>
//       <table class="table table-hover">
//         <thead>
//           <tr>
//             <th>NameProduct</th>
//             <th>Count</th>
//             <th>Price</th>
//             <th>Sum</th>
//           </tr>
//         </thead>
//         {basket.map((f) =>
//           <tbody>
//             <tr>
//               <td>{f.namePicture}</td>
//               <td>
//                 {/* <button onClick={() => {setValue(value + 1)}}>+</button>
//         {value &&  <p onChange={Count(value)}>{value}</p>}
//         <button onClick={() => { setValue(value - 1)}}>-</button> */}
//                 <input placeholder='1' type="number" min="0" onClick={(e) => Count(e)}></input>
//               </td>
//               <td>{f.price}</td>
//               <td>{f.price * value}</td>
//               {/* <td><button type="submit" class="btn btn-primary" onClick={RemoveProdFromBasket(f)}>הסר מוצר</button></td> */}
//             </tr>
//           </tbody>
//         )}
//       </table>
//       <h4>סה"כ לתשלום:</h4>
//       <Link to="/Scanner">
//         <button type="submit" class="btn btn-primary">סיים קניה</button>
//       </Link>
//     </div>
//   </>
// }

// // const Buy = () => {
// //   let buy = useSelector((s) => { return s.invite.invite })
// //   let price = useSelector((s) => { return s.invite.price })
// //   console.log(price);
// //   let count = useSelector((s) => { return s.invite.count })
// //   let amount = 0;
// //   let sum1 = 0;
// //   let i = 0;
// //   let codeinvite;
// //   const Count = (e) => {
// //     let sum2 = 0;
// //     amount = e.target.value;
// //     sum2 = sum2 + price[i];