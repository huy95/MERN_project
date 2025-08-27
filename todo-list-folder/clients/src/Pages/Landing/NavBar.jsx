import { FaRegSquare } from 'react-icons/fa'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='nav'>
      <div className='nav-left'>
        <FaRegSquare className='logo-icon'/>
        <span className='brand'>DoDo</span>
      </div>
      <div className='nav-right'>
      
        <a className='nav-link active' href='/'>Home</a>
        <a className='nav-link' href='/login'>Login</a>
        <a className='nav-link' href='/register'>Register</a>
      </div>
    </div>
  )
}

export default NavBar