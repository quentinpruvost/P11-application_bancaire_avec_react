 import bankTree from './bank-tree.webp';
 import bankTreeBig from './bank-tree-big.webp'


function Hero(){
  return(
    <div className="hero">
      <img 
        
        srcSet={`${bankTree} 920w, ${bankTreeBig}`}
        sizes="(max-width: 920px) 920px, 1440px"
        src={bankTree} 
        alt="Bannière de bank Tree" 
       />
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
  )
}

export default Hero