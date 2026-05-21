import './Login.css'

export default function Login(){
    return(
        <>
        <div className="outerlogbody">
    <form className="login-form">
      <h1>Login</h1>

      <h3>
        Are you a member?
        <a href="">Sign Up Here</a>
      </h3>

      <div className="login-group">
        <label for="email">Email</label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          required
        />
      </div>

      <div className="login-group">
        <label for="password">Password</label>

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          minlength="6"
          maxlength="16"
          pattern="^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,16}$"
          required
        />
      </div>

      <button type="submit" className="login-btn">
        Login
      </button>

      <button type="reset" className="reset-btn">
        Reset
      </button>

      <div className="login-group">
        <a href="">Forget Password?</a>
      </div>
    </form>
  </div>
        </>
    )
}