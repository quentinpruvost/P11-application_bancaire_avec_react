import Button from "../button/button";

function Account({Title,Number, Amount, Description}){
  return(
    <section class="account">
      <div class="account-content-wrapper">
        <h3 class="account-title">{Title} ({Number})</h3>
        <p class="account-amount">{Amount}</p>
        <p class="account-amount-description">{Description}</p>
      </div>
      <div class="account-content-wrapper cta">
        <Button
          text="View transactions"
          classStyle="transaction-button"
        />
      </div>
    </section>
  )
}

export default Account