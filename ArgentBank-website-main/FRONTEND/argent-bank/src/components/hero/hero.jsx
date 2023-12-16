 import bankTree from './bank-tree.webp';
 import bankTreeBig from './bank-tree-big.webp'


function Hero(){
  return(
    <div class="hero">
      <img 
        
        srcSet={`${bankTree} 920w, ${bankTreeBig}`}
        sizes="(max-width: 920px) 920px, 1440px"
        src={bankTree} 
        alt="Bannière de bank Tree" 
       />
        <section class="hero-content">
          <h2 class="sr-only">Promoted Content</h2>
          <p class="subtitle">No fees.</p>
          <p class="subtitle">No minimum deposit.</p>
          <p class="subtitle">High interest rates.</p>
          <p class="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
  )
}

export default Hero