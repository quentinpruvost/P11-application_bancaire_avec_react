//This is the feature components for the home page
function Feature({logo, title, description}){
  return(
    <div className="feature-item">
      <img src={logo} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Feature