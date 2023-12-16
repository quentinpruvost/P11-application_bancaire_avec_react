
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import Welcome from "../../components/welcome/welcome";
import Account from "../../components/account/account";


import { useSelector } from "react-redux";

function User(){

  const userName = useSelector((state) => state.auth.userName)
  // const profileData = useSelector((state) => state.auth.body)
  //console.log('*****' + profileData.profileData)
  // const userName = profileData ? profileData.userName : "No"

  const token = sessionStorage.getItem('token');
  console.log("token : ", token)

  function SignOut(){
    sessionStorage.removeItem('token')
  }

  // To be able to see state of the Slices in the console
    console.log(
      useSelector((store) => {console.log(store)})
    )
  //

  return(
    <div> 
      <Nav 
        Name="Name"
        Icon="fa fa-sign-out"
        Text="Sign out"
        Function={SignOut}
        Link="/"
      />
      <main className="main bg-dark">
        <Welcome 
          Name={userName}
        />
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