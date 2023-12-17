import { useState } from "react" 
import { useDispatch, useSelector } from "react-redux"; 
import { changeUserName } from "../../redux/reducers/userEditSlice";

function Edit({saveClick, cancelClick, firstName, lastName}){

  const dispatch = useDispatch(); 
  const [newUserName, setNewUserName] = useState('') //----------
  const userName = useSelector((state) => state.auth.userName)



  console.log("newUserName : ", newUserName)

  function handleSaveClick(){
    if(newUserName.trim() === ""){

    } else { //---------
      dispatch(changeUserName(newUserName))
      saveClick(newUserName)
    }
    
  } 
   
  // -----------------

  return(
    <div className="edit">
      <h2>Edit user info</h2>
      <form action="">
        <div className="field-edit">
          <label htmlFor="userName" className="label-edit">User Name:</label>
          <input 
            className="field-edit-input" 
            placeholder={userName}
            type="text" 
            id="userName"              
            onChange={(e)=> setNewUserName(e.target.value)} //---------
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
