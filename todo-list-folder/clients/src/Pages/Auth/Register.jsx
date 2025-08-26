import React from 'react'
import { FaEyeSlash, FaUserCircle } from 'react-icons/fa'
import "./Register.css"

const Register = () => {
  return (
    <div className='container'>
      <div className='auth-box'>
        <FaUserCircle className='icon'/>
        <h2>Register</h2>
        <div className='name-row'> 
          <input type='text' placeholder='First Name'/>
          <input type='text' placeholder='Last Name'/>
        </div>

        <input type='text' placeholder='Username' className='full-input'/>
        <div className='input-with-icon'>
          <input
          type='password'
          placeholder='Password'
          />
          <FaEyeSlash className='trail-icon' aria-hidden/>
        </div>
        <p className='muted'>Existing User? <a href='/login'>Login</a></p>
        <button className='primary-btn'>Register</button>
      </div>
    </div>
  )
}

export default Register