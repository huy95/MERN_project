import {FaUserCircle} from 'react-icons/fa'
import "./Login.css"
export const Login = () => {
  return (
    <div className='container'>
      <div className='login-box'>
        <FaUserCircle className='icon'/>
        <h2>Login</h2>
        <input type="text" placeholder='Username' defaultValue="" />
        <input type='text' placeholder='Password'/>
        <p className='register-text'>
          New Users? <a href='/'>Register</a>
        </p>
        <button className='login-btn'>Login</button>
      </div>
    </div>
  )
}
