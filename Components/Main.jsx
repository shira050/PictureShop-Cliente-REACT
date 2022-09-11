import { useSelector, useDispatch } from 'react-redux';
import SignIn from './SignIn';
import TheNav from './Nav';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch, Router } from 'react-router-dom';
import ShowProducts from './ShowProducts';
import ShowPicturesByCategory from './ShowPicturesByCategory';
import { isMenneger } from '../Redax/Users/UserAction';
import { useState } from 'react/cjs/react.development';
export default function Main() {
const dispatch=useDispatch();

const userName=useSelector((store) => { return store.users.user.nameUser })
  return <>
   
      <div style={{display:'inline-block' ,background:'lightgray',width:'100%',margin:'auto'}}>
      <TheNav></TheNav>
      </div>
             <h1>שלום {userName}</h1>
       <div style={{display:'block',height:'200px'}}> <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          praesentium voluptatum deleniti atque corrupti quos dolores et
          quas molestias excepturi sint occaecati cupiditate non
          provident, similique sunt in culpa nemo enim ipsam voluptatem
          quia voluptas sit qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga quidem rerum facilis est distinctio.
        </p>
        <p  style={{display:'block',height:'200px'}}>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque
          nihil impedit quo minus id quod maxime placeat facere
          possimus, omnis voluptas assumenda est, omnis dolor
          repellendus. Quis autem vel eum iure reprehenderit qui in ea
          voluptate velit esse quam nihil molestiae consequatur.
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint
          et molestiae non recusandae itaque earum rerum.
        </p></div>
   

  
  </>

}
