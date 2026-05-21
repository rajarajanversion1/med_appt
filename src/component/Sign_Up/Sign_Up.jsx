import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Sign_Up.css";

export default function Sign_Up() {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    role: "",
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    const response = await fetch("http://localhost:8181/api/auth/register", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        role: credentials.role,
        name: credentials.name,
        phone: credentials.phone,
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();

    if (json.success || json.authtoken) {

      sessionStorage.setItem("email", credentials.email);

      alert("Signup Successful");

      navigate("/");

      window.location.reload();

    } else {

      alert(json.error || "Signup failed");
    }
  };

  const onChange = (e) => {

    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="outerbody">

      <form className="signup-form" onSubmit={handleSubmit}>

        <h1>Sign Up</h1>

        <h3>
          Already a member?
          <Link to="/login"> Login</Link>
        </h3>

        <div className="form-group">

          <label htmlFor="role">Role</label>

          <select
            id="role"
            name="role"
            required
            value={credentials.role}
            onChange={onChange}
          >

            <option value="">Select Role</option>

            <option value="Cardiologist">Cardiologist</option>

            <option value="Neurologist">Neurologist</option>

            <option value="Dermatologist">Dermatologist</option>

            <option value="Pediatrician">Pediatrician</option>

          </select>

        </div>

        <div className="form-group">

          <label htmlFor="name">Full Name</label>

          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required
            value={credentials.name}
            onChange={onChange}
          />

        </div>

        <div className="form-group">

          <label htmlFor="phone">Phone Number</label>

          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            pattern="[0-9]{10}"
            maxLength={10}
            value={credentials.phone}
            onChange={onChange}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
            required
          />

        </div>

        <div className="form-group">

          <label htmlFor="email">Email Address</label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            value={credentials.email}
            onChange={onChange}
          />

        </div>

        <div className="form-group">

          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            minLength="6"
            maxLength="16"
            required
            value={credentials.password}
            onChange={onChange}
          />

        </div>

        <button type="submit" className="signup-btn">
          Submit
        </button>

        <button type="reset" className="reset-btn">
          Reset
        </button>

      </form>

    </div>
  );
}