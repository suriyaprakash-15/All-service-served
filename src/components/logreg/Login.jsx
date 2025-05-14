import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './Login.css';
const SampleComponent = () => {
  // const [count, setCount] = useState(0);

  return (
    
    <div className="log">
       {/* <img src="/Images/main.jpeg" /> */}
        <div className="form-login">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="username" required/>
              <FaUserAlt className="icon"/>
            </div>
            <div className="input-box">
              <input type="password" placeholder="password" required/>
              <FaLock className="icon"/>
            </div>
            <div className="remember-forgot">
              <label> <input type="checkbox"/> Remember me</label>
              <a href="#"> forgot password</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
              <p>Don't have a account <a href="#">Register</a></p>
            </div>
          </form>
        </div>


        
    </div>
   
  );
};

export default SampleComponent;
