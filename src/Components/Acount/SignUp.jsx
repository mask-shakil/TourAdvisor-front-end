import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "../Acount/SignUp.css";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    setFullNameError("");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setPhoneNumberError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Full Name validation
    if (fullName.trim() === "") {
      setFullNameError("Full Name is required");
      return;
    }

    // Email validation
    if (!email.includes(".com")) {
      setEmailError("Invalid email format");
      return;
    }

    // Phone Number validation
    if (phoneNumber.length !== 11 || !/^\d+$/.test(phoneNumber)) {
      setPhoneNumberError("Phone Number should be 11 digits");
      return;
    }

    // Password validation
    if (password.length < 6) {
      setPasswordError("Password should be at least 6 characters long");
      return;
    }

    // Proceed with signup logic here
    console.log("Signup successful!");
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
          <div class="col-md-6">
            {/* <form class="signup-form shadow">
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
            </form> */}
            <h3 className="text-center mt-5">Please Sign up!</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter full name"
                  value={fullName}
                  onChange={handleFullNameChange}
                  isInvalid={!!fullNameError}
                />
                <Form.Control.Feedback type="invalid">
                  {fullNameError}
                </Form.Control.Feedback>
              </Form.Group>

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

              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  isInvalid={!!phoneNumberError}
                />
                <Form.Control.Feedback type="invalid">
                  {phoneNumberError}
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

              <Button className="w-100 mt-3" variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
            <h5 className="mt-3">
              Alrady have an account <Link to={"/signin"}> Login</Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
