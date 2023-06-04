import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../Acount/Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!email.includes(".com")) {
      setEmailError("Invalid email format");
      return;
    }

    // Password validation
    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters long");
      return;
    }

    // Proceed with login logic here
    console.log("Login successful!");
  };

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
            {/* <form class="signup-form shadow">
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
            </form> */}
            <h3 className="text-center">Please Login!</h3>
            <Form className="mt-5" onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                  isInvalid={!!emailError}
                />
                <Form.Control.Feedback type="invalid">
                  {emailError}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  isInvalid={!!passwordError}
                />
                <Form.Control.Feedback type="invalid">
                  {passwordError}
                </Form.Control.Feedback>
              </Form.Group>

              <Button className="mt-3 w-100" variant="primary" type="submit">
                Login
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
