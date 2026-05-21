import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">

        <div className="logobody">
          <h1 className="logo">Stay Healthy</h1>

          <img
            className="doclogo"
            src="/doctorlogo.png"
            alt="Doctor Logo"
          />
        </div>

        <div className="nav-links">
          <button>Home</button>
          <button>Appointments</button>
          <button>Health Blog</button>
          <button>Reviews</button>
        </div>

        <div className="auth-buttons">

          <Link to="/signup">
            <button>Sign Up</button>
          </Link>

          <Link to="/logaccount">
            <button>Login</button>
          </Link>

        </div>

      </nav>
    </>
  )
}