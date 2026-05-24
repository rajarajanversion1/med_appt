import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import ProfileCard from "../ProfileCard/ProfileCard";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleClick = () => setClick(!click);

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.removeItem("doctorData");

    setIsLoggedIn(false);
    setShowProfile(false);

    window.location.reload();
  };

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");

    if (storedEmail) {
      setIsLoggedIn(true);
      setUsername(storedEmail.split("@")[0]);
    } else {
      setIsLoggedIn(false);
      setUsername("");
    }
  }, []);

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

      {/* CENTER LINKS */}
      <ul className={click ? "nav__links active" : "nav__links"}>
        <li className="link"><Link to="/">Home</Link></li>
        <li className="link"><Link to="/search/doctors">Appointments</Link></li>
        <li className="link"><Link to="/healthblog">Health Blog</Link></li>
        <li className="link"><Link to="/reviews">Reviews</Link></li>
      </ul>

   <div className="nav__right">

  {isLoggedIn ? (
    <>
      {/* USERNAME DROPDOWN TRIGGER */}
      <div className="profile-wrapper">
        <span
          className="username"
          onClick={() => setShowProfile(!showProfile)}
          style={{ cursor: "pointer" }}
        >
          {username} ▼
        </span>

        {/* DROPDOWN */}
        {showProfile && (
          <div className="profile-dropdown">
            
            <Link to="/profile" onClick={() => setShowProfile(false)}>
              Your Profile
            </Link>

            <Link to="/reports" onClick={() => setShowProfile(false)}>
              Your Reports
            </Link>

          </div>
        )}
      </div>

      {/* LOGOUT */}
      <button className="btn2" onClick={handleLogout}>
        Logout
      </button>
    </>
  ) : (
    <>
      <Link to="/signup"><button className="btn1">Sign Up</button></Link>
      <Link to="/login"><button className="btn1">Login</button></Link>
    </>
  )}

</div>

      {/* MOBILE ICON */}
      <div className="nav__icon" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Navbar;