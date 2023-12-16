

function Welcome({Name}){
  return(
    <div className="header">
      <h1>Welcome back<br />{Name}</h1>
      <button className="edit-button">Edit Name</button>
    </div>
  )
}

export default Welcome