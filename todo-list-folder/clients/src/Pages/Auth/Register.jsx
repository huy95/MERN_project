import React, { useState } from "react";
import { FaEyeSlash, FaUserCircle } from "react-icons/fa";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import AuthServices from "../../service/authServices";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const pushNav = useNavigate();
  const handleRegister = async () => {
    if(!firstName || !lastName || !userName || !password) {
      alert("please enter input")
    }
    const data = {
      firstName, lastName, userName, password
    }
   
      const res = AuthServices.registerUser(data);
      if(!res.message){
        pushNav("/login")
      } else {
        alert(res.message)
      }
      
    
    
  };

  return (
    <div className="container">
      <div className="auth-box">
        <FaUserCircle className="icon" />
        <h2>Register</h2>
        <div className="name-row">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <input
          type="text"
          placeholder="Username"
          className="full-input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <div className="input-with-icon">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaEyeSlash className="trail-icon" aria-hidden />
        </div>
        <p className="muted">
          Existing User? <a href="/login">Login</a>
        </p>
        <button className="primary-btn" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
