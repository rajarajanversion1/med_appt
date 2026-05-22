import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";


const Navbar = () => {
    const [click, setClick] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const[email,setEmail]=useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = () => setClick(!click);

    
    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        // remove email phone
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
        // setUsername("");
       
        // Remove the reviewFormData from local storage
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith("reviewFormData_")) {
            localStorage.removeItem(key);
          }
        }
        setEmail('');
        window.location.reload();
    }
    const handleDropdown = () => {
      setShowDropdown(!showDropdown);
    }
    useEffect(() => {

      const storedemail = sessionStorage.getItem("email");

      if (storedemail) {

        setIsLoggedIn(true);

        const extractedName = storedemail.split("@")[0];

        setUsername(extractedName);

      } else {

        setIsLoggedIn(false);

      }

    }, [isLoggedIn]);
  return (
        <nav>
          {/* LEFT */}
          <div className="nav__left">
            <div className="nav__logo">
              <Link to="/" className="logo-link">
                <span>StayHealthy</span>
                <img src="./doctorlogo.png" alt="logo" />
              </Link>
            </div>
          </div>

          <ul className={click ? "nav__links active" : "nav__links"}>
            <li className="link"><Link to="/">Home</Link></li>
            <li className="link"><Link to="/search/doctors">Appointments</Link></li>
            <li className="link"><Link to="/healthblog">Health Blog</Link></li>
            <li className="link"><Link to="/reviews">Reviews</Link></li>
          </ul>

          <div className="nav__right">
            {isLoggedIn ? (
              <>
                <span className="username">{username}</span>
                <button className="btn2" onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/signup"><button className="btn1">Sign Up</button></Link>
                <Link to="/login"><button className="btn1">Login</button></Link>
              </>
            )}
          </div>

          <div className="nav__icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </nav>
  );
};

export default Navbar;

