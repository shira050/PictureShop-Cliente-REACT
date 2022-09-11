
import { useEffect } from 'react';
 import { getAllUsersFromserver ,getUserFromserverBynameAndPass,AddUser,UppdateUser,RemoveUser} from '../Redax/Users/UserThank';
 import { useState } from 'react';
 import { useDispatch } from 'react-redux';
 import React from 'react';
 import { MDBBtn } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default withRouter(function ShowUsers(Props) {

     const M = useSelector((store) => {return store.users.isMenneger });

    let myUsersFromServer,myUser, myAddUser,myUppUser,myDeleteUser
    const [userList,setUserList]=useState ([])
    const [OneUser,setOneUser] = useState({})
 const dispatch = useDispatch();


    useEffect(async () => {
       
        myUsersFromServer = await getAllUsersFromserver(dispatch);
        await setUserList(myUsersFromServer)
  


    }, [])
  async function deleteteUser(code){
   
    let d=prompt("האם אתה בטוח שברצונך להסירו לצמיתות?"+

        "להמשך לחץ 1");
    if(d==1){
    myDeleteUser=await RemoveUser(dispatch,code);
await setUserList(myDeleteUser)
    }
  }
    return <>


 <table class="table table-dark" style={{ width: "700px", margin: "auto" }}>
            <tr>
            <th>הסר משתמש</th>
                <th>שם משתמש</th>
                <th>קוד משתמש</th>
                <th>סיסמא</th>
                <th>מייל משתשמש</th>
            </tr>
            {userList.map((x) =>
                <tr>
                   <MDBBtn outline color="danger" style={{width:'5px'}}  onClick={() => { deleteteUser(x.codeUser)}}>{x.codeUser}</MDBBtn> 
                    <td>{x.nameUser}</td>
                    <td>{x.codeUser}</td>
                    <td>{x.passwordUser}</td>
                    <td>{x.emailUser}</td>
                </tr>
            )}
        </table>

 {(M != 1)&&
    Props.history.push("/home")
}
        </>
})

 
 
