
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import Form from "../../components/form/form";

function Login(){
  return(
    <div>
      <Nav 
        Text="Sign In"
      />
      <main class="main bg-dark" >
        <Form />
      </main>
      <Footer />
    </div>
  )
}

export default Login