

// This is my welcome component that is rendered in the User page
function Welcome({Name, onEditClick}){
  return(
    <div className="header">
      <h1>Welcome back<br />{Name}</h1>
      <button className="edit-button" onClick={onEditClick}>Edit Name</button>
      <div>
         
      </div>
    </div>
  )
}

export default Welcome