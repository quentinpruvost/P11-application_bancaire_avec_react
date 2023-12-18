// Import the 3 logo from the folder 
import IconChat from './icon-chat.png'
import IconMoney from './icon-money.png'
import IconSecurity from './icon-security.png'

import Feature from './feature'

// This is my Features component with data. 
function Features(){
 
  return(
    <section className="features">
    <h2 className="sr-only">Features</h2>
      <Feature 
        logo={IconChat}
        title="You are our #1 priority"
        description="Need to talk to a representative? You can get in touch through our
        24/7 chat or through a phone call in less than 5 minutes."
      />
      <Feature 
        logo={IconMoney}
        title="More savings means higher rates"
        description="The more you save with us, the higher your interest rate will be!"
      />
      <Feature 
        logo={IconSecurity}
        title="Security you can trust"
        description="We use top of the line encryption to make sure your data and money
        is always safe."
      
      />
    </section>
    
  )
}

export default Features

