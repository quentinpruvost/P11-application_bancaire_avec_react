
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import Form from "../../components/form/form";

import { useSelector } from "react-redux";

function Login(){

  console.log(
    useSelector((store) => {console.log(store)})
  )
 
  return(
    <div>
      <Nav 
        logoLink='/'
        signInLink="/login"
        iconLink='/login'
        Text="Sign In"
      />
      <main className="main bg-dark" >
        <Form />
      </main>
      <Footer />
    </div>
  )
}

export default Login