// Import the components that are rendered in the Login page
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import Form from "../../components/form/form";

// This is the Login component that gather other smaller components
function Login(){
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