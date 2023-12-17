import Nav from "../../components/nav/nav";
import Hero from "../../components/hero/hero";
import Features from "../../components/features/features"
import Footer from "../../components/footer/footer";
 
function Home(){
  return(
    <div>
      <main>
        <Nav 
          logoLink='/'
          iconLink='/login'
          signInLink='/login'
          Text="Sign In"
          
        />
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default Home