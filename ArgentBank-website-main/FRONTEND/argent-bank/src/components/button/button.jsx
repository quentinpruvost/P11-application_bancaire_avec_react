import {Link} from 'react-router-dom'

function Button({text, linkTo, classStyle}){
  return(
    <Link to={linkTo} class='link-button'>
      <button class={classStyle} >{text}</button>
    </Link>
  )
}

export default Button