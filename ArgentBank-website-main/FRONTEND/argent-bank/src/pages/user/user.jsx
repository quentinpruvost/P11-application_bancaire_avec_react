// Import the components to build the user page
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import Welcome from "../../components/welcome/welcome";
import Account from "../../components/account/account";
import Edit from '../../components/edit_user/edit_user'

// Import the hooks from React and redux librairie
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

// Import the actions from the Slices
import { loginSuccess, logout } from "../../redux/reducers-And-Fetchs/authSlice";

// Import persistor from the store
import { persistor } from '../../redux/store';

// My User components for rendering a page 
function User(){
  const dispatch = useDispatch();

  // Extract some elements in the store. 
  const userName = useSelector((state) => state.auth.userName)
  const firstName = useSelector((state) => state.auth.firstName )
  const lastName = useSelector((state) => state.auth.lastName )
   
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
 
  /**
   * @function SignOut - Remove the token in Session Storage
   * Send the logout action with dispatch 
   * Clear the persisted state to remove the information extracted in the store.  
   */
  function SignOut(){
    sessionStorage.removeItem('token')
    dispatch(logout());
    persistor.purge();
  }

  /**
   * @function handleSaveUserName - Save the new User Name 
   * @param (newUserName)  
   */
  function handleSaveUserName(newUserName){
    // Send the newUserName to the store with the loginSuccess action
    dispatch(loginSuccess({userName: newUserName, firstName, lastName}))
    // close the Edit component
    toggleEditing();
  }

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
