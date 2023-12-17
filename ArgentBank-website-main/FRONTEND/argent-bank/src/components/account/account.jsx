// Import the button component
import Button from "../button/button";


// This is my Accounct component that render the user Account on the User page.
function Account({Title,Number, Amount, Description}){
  return(
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{Title} ({Number})</h3>
        <p className="account-amount">{Amount}</p>
        <p className="account-amount-description">{Description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button
          text="View transactions"
          classStyle="transaction-button"
        />
      </div>
    </section>
  )
}

export default Account