import {Link} from 'react-router-dom'

function Button({text, linkTo, classStyle}){
  return(
    <Link to={linkTo} className='link-button'>
      <button className={classStyle} >{text}</button>
    </Link>
  )
}

export default Button