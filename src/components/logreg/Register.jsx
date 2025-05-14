import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdOutlineLocationCity } from "react-icons/md";
import './Register.css';
const SampleComponent = () => {
  // const [count, setCount] = useState(0);

  return (
    
    <div className="log">
        <div className="form-register">
          <form action="">
            <h1>Register</h1>
            <div className="input-box">
              <input type="text" placeholder="username" required/>
              <FaUserAlt className="icon"/>
            </div>

            <div className="input-box">
              <input type="text" placeholder="address" required/>
              <MdOutlineLocationCity className="icon"/>
            </div>
            
            <div className="input-box">
              <input type="text" placeholder="landmark" required/>
              <MdOutlineLocationCity className="icon"/>
            </div>

            <div className="input-box">
              <input type="password" placeholder="password" required/>
              <FaLock className="icon"/>
            </div>
            <div className="input-box">
              <input type="password" placeholder="confirmation password" required/>
              <FaLock className="icon"/>
            </div>
            <div className="remember-forgot">
              <label> <input type="checkbox"/> accept terms&conditions</label>
              <a href="#"> forgot password</a>
            </div>
            <button type="submit">register</button>
            <div className="register-link">
              <p>already have a account <a href="#">Login</a></p>
            </div>
          </form>
        </div>


        
    </div>
   
  );
};

export default SampleComponent;
