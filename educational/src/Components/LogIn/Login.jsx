import React, { useState } from "react";
import "./Login.css";

import user_icon from "../Assets/person.png";
import password_icon from "../Assets/password.png";

function Login() {
  return (
    <div className="container">
      <div className="header">
        <div className="text">User Login</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Username" />
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
      <div className="submit-container">
        <div className="submit">LogIn</div>
      </div>
    </div>
  );
}

export default Login;
