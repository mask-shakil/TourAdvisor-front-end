import React from "react";
import "../Acount/SignUp.css";
const SignUp = () => {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img
              className="img-fluid"
              src="https://img.freepik.com/free-vector/vacation-holidays-background-with-realistic-globe-suitcase-photo-camera_1284-10476.jpg?size=626&ext=jpg&ga=GA1.2.1270014827.1685105541&semt=sph"
              alt="Signup Image"
            />
          </div>
          <div class="col-md-6">
            <form class="signup-form shadow">
              <h2>Create an Account</h2>
              <div class="form-group">
                <label for="fullname">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="fullname"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input
                  type="tel"
                  class="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter a password"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Sign Up
              </button>
              <div class="login-link mt-2">
                Already have an account? <a href="#">Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
