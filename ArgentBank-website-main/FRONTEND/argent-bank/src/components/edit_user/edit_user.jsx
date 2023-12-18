// Import hooks from react and redux librairy
import { useState } from "react" 
import { useDispatch, useSelector } from "react-redux"; 

import { changeUserName } from "../../redux/reducers-And-Fetchs/userEditFetch";
import { loginSuccess } from "../../redux/reducers-And-Fetchs/authSlice";


// This is my Edit components that render the change of user Name in th User page
function Edit({saveClick, cancelClick, firstName, lastName}){

  const dispatch = useDispatch(); 
  /**
   * @variable newUserName - with initial value of : '',
   * @function setNewUserName - change the state 
   */
  const [newUserName, setNewUserName] = useState('') 

  //extract the userName from the store. 
  const userName = useSelector((state) => state.auth.userName)

  /**
   * @function handleSaveClick - trigger the user Name change  
   */
  function handleSaveClick(){
    // check if the newUserName is empty and if empty the change is not done.
    if(newUserName.trim() === ""){
    } else { 
      // dispatch the newUserName with the changeUserName action
      dispatch(changeUserName(newUserName))
      // dispatch the new user Name to update the store 
      dispatch(loginSuccess({userName: newUserName, firstName, lastName })) 
      // call the saveClick from the prop that will trigger the toogleEdit
      saveClick()
    }
  } 
   
  // -----------------

  return(
    <div className="edit">
      <h2>Edit user info</h2>
      <form>
        <div className="field-edit">
          <label htmlFor="userName" className="label-edit">User Name:</label>
          <input 
            className="field-edit-input" 
            placeholder={userName}
            type="text" 
            id="userName"              
            onChange={(e)=> setNewUserName(e.target.value)} 
            required
          />
        </div>
        <div className="field-edit">
          <label htmlFor="firstName" className="label-edit">First name:</label>
          <input className="field-edit-input fixed" type="text" id="firstName" readOnly value={firstName} />
        </div>
        <div className="field-edit">
          <label htmlFor="lastName" className="label-edit">Last name:</label>
          <input className="field-edit-input fixed" type="text" id="lastName" readOnly value={lastName} />
        </div>
        <div>
          <button 
            className="edit-button edit-button-width" 
            onClick={handleSaveClick} 
            >Save
          </button> 
          <button 
            className="edit-button edit-button-width" 
            onClick={cancelClick} 
            >Cancel
          </button>
        </div>
        
      </form>
    </div>
  )
}

export default Edit
