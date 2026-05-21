import './Sign_Up.css'

export default function Sign_Up(){
    return(
        <>
        <div className="outerbody">

    <form className="signup-form">

      <h1>Sign Up</h1>

      <h3>
        Already a member?
        <a href="">Login</a>
      </h3>

      <div className="form-group">
        <label for="role">Role</label>

        <select id="role" name="role" required>
          <option value="">Select Role</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Pediatrician">Pediatrician</option>
        </select>
      </div>

      <div className="form-group">
        <label for="name">Full Name</label>

        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="form-group">
        <label for="phone">Phone Number</label>

        <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Enter your phone number"
        pattern="[0-9]{10}"
        maxLength={10}
        onInput={(e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        }}
        required
        />
      </div>

      <div className="form-group">
        <label for="email">Email Address</label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          required
        />
      </div>

      <div className="form-group">
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

      <button type="submit" className="signup-btn">
        Submit
      </button>

      <button type="reset" className="reset-btn">
        Reset
      </button>

    </form>

  </div>
        </>
    )
}