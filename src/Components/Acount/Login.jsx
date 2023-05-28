import React from "react";
import "../Acount/Login.css";
const Login = () => {
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
          <div class="col-md-5 mt-5 rounded ms-5">
            <form class="signup-form shadow">
              <h2 class="text-center">Login Now</h2>
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
              <div class="form-group">
                <a href="#" class="forgot-password">
                  Forgot Password?
                </a>
              </div>
              <button type="submit" class="btn btn-primary">
                Sign In
              </button>
              <div class="form-group mt-2">
                <p>
                  Don't have an account?{" "}
                  <a href="#" class="create-account">
                    Create Account
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
