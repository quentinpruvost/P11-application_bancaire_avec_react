
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import Welcome from "../../components/welcome/welcome";
import Account from "../../components/account/account";
import Edit from '../../components/edit_user/edit_user'

import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from "../../redux/reducers/userEditSlice";
import { loginSuccess } from "../../redux/reducers/authSlice";


function User(){
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.auth.userName)
  const firstName = useSelector((state) => state.auth.firstName )
  const lastName = useSelector((state) => state.auth.lastName )
  console.log("userName : ", userName) 
  /**
   * @variable isEditing - with initial value set to 'false'
   * @function setIsEditing - update the state 
   */
  const [isEditing, setIsEditing] = useState(false);   

  /**
   * @function toggleEditing - Responsible for switching the Welcome and Edit components 
   * with onClick on buttons. 
   */
  function toggleEditing(){
    setIsEditing(!isEditing);
  }

  const token = sessionStorage.getItem('token');
  console.log("token : ", token)

  // remove Token from the sessionStorage to clean it when a user logout. (console/Application/sessionStorage)
  function SignOut(){
    sessionStorage.removeItem('token')
  }

  //

  const handleSaveUserName = (newUserName) => {
    try {
      const response = dispatch(changeName(newUserName));
      const updatedUserName = response.payload;
      dispatch(loginSuccess({ userName: updatedUserName, firstName, lastName }));
      toggleEditing();
    } catch (error) {
      console.log('Error while updating userName: ', error);
    }
  }

/**
  const handleSaveUserName = (newUserName) => {
    try{
      dispatch(changeUserName(newUserName));
      toggleEditing();
    }catch(error){
      console.log('Error while updating userName : ', error)
    }
  }
   */
   // ----------------------------------------------------

  return(
    <div> 
      <Nav 
        logoLink='/'
        signInLink='/'
        profileLink='/profile'
        iconLink='/profile'
        Name={userName}
        Icon="fa fa-sign-out"
        Text="Sign out"
        Function={SignOut}
         
      />
      <main className="main bg-dark">
        {!isEditing ? (
          <Welcome Name={userName} onEditClick={toggleEditing} />
        ) : (
          <Edit 
            cancelClick={toggleEditing} 
            saveClick={handleSaveUserName}
            firstName={firstName}
            lastName={lastName}
            
          />
        )}
               
        <h2 className="sr-only">Accounts</h2>
        <Account 
          Title="Argent Bank Checking"
          Number="x8349"
          Amount="$2,082.79"
          Description="Available Balance"
        />
        <Account 
          Title="Argent Bank Savings"
          Number="x6712"
          Amount="$10,928.42"
          Description="Available Balance"
        />
        <Account 
          Title="Argent Bank Credit Card"
          Number="x8349"
          Amount="$184.30"
          Description="Current Balance"
        />
      </main>
      <Footer />
    </div>
  )
}

export default User
