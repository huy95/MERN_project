import { FaUserCircle } from "react-icons/fa";
import "./Login.css";
import { useState } from "react";
import AuthServices from "../../service/authServices";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      userName,
      password,
    };
    const login = await AuthServices.loginUser(data);
    console.log(login);
    if (login.status === 200) {
      navigate("/to-do");
    } else {
      alert("Đăng nhập thất bại!");
    }
  };
  return (
    <div className="container">
      <div className="login-box">
        <FaUserCircle className="icon" />
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassWord(e.target.value)}
        />
        <p className="register-text">
          New Users? <a href="/register">Register</a>
        </p>
        <button
          className="login-btn"
          disabled={!userName || !password}
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </button>
      </div>
    </div>
  );
};
