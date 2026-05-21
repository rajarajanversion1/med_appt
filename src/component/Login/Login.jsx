import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Login.css';

const API_URL = "http://localhost:8181";

const Login = () => {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  useEffect(() => {

    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }

  }, []);

  const login = async (e) => {

    e.preventDefault();

    try {

      const res = await fetch(`${API_URL}/api/auth/login`, {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email: email,
          password: password,
        }),

      });

      const json = await res.json();

      if (json.authtoken) {

        sessionStorage.setItem('auth-token', json.authtoken);

        sessionStorage.setItem('email', email);

        navigate('/');

        window.location.reload();

      } else {

        if (json.errors) {

          for (const error of json.errors) {
            alert(error.msg);
          }

        } else {

          alert(json.error);

        }
      }

    } catch (error) {

      alert("Server Error");

      console.log(error);

    }
  };

  return (

    <div className="outerlogbody">

      <div className="login-form">

        <div className="login-text">
          <h2>Login</h2>
        </div>

        <div className="login-text2">

          Are you a new member?

          <span>
            <Link to="/signup"> Sign Up Here</Link>
          </span>

        </div>

        <form onSubmit={login}>

          <div className="login-group">

            <label htmlFor="email">Email</label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />

          </div>

          <div className="login-group">

            <label htmlFor="password">Password</label>

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              minLength="6"
              maxLength="16"
              required
            />

          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <button type="reset" className="reset-btn">
            Reset
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login;