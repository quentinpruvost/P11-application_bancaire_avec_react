import argentBankLogo from './argentBankLogo.webp';


function Nav({Name, Text, Icon, Link , Function}){

  return(
    <nav className="main-nav">
      
      <a className="main-nav-logo" href="./">
        <img
          src={argentBankLogo}
          className="main-nav-logo-image"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>

      <div className="main-nav-links">
        <a className="main-nav-item-1" href='/login'>
          <i className="fa fa-user-circle"></i>
        </a>
        {Name && (
          <a className="main-nav-item-1" href='/'>
            <p className="main-nav-name">{Name}</p>
          </a>
        )}
        {Icon && (
          <a className="main-nav-item-2" href='/'>
            <i className={Icon}></i>
          </a>
        )}
        <a className="main-nav-item-2" href={Link} onClick={Function}>
          <p className="main-nav-text">{Text}</p>
        </a>
      </div>
    </nav>
  )
}

export default Nav