import React, { useState } from "react";
import "./TourPackageDetails";
import {
  MdAppBlocking,
  MdEmojiFoodBeverage,
  MdEmojiTransportation,
  MdFoodBank,
  MdInfo,
  MdMan,
  MdMedicalServices,
  MdMobileFriendly,
  MdRoom,
} from "react-icons/md";
import { FaBeer, FaStar, FaTshirt } from "react-icons/fa";

const TourPackageDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [person, setPerson] = useState("");
  const [room, setRoom] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can proceed with form submission
      console.log("Form submitted:", {
        name,
        email,
        phone,
        password,
        location,
        person,
        room,
      });
    } else {
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{11}$/.test(phone)) {
      newErrors.phone = "Phone number should be 11 digits";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password should be at least 6 characters";
    }
    if (!location.trim()) {
      newErrors.location = "Location is required";
    }
    if (!person.trim()) {
      newErrors.person = "Person is required";
    }
    if (!room.trim()) {
      newErrors.room = "Room is required";
    }
    return newErrors;
  };

  return (
    <div>
      {/* start first row  */}
      <div className="row mt-3">
        {/* first column content */}

        <div className="col me-2 ms-5">
          <div className="col">
            <h3>Sundarban amazing tour spot</h3>
            <p style={{ textAlign: "justify" }}>
              The Sundarbans is a mangrove forest located in Bangladesh,
              specifically in the southwestern part of the country. It is one of
              the largest continuous mangrove forests in the world and is
              recognized as a UNESCO World Heritage Site.
            </p>
            <img
              className="rounded"
              style={{ height: "250px", width: "550px" }}
              src="https://img.freepik.com/free-photo/closeup-shot-deer-nara-park-japan_181624-25614.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=sph"
              alt=""
            />
            <h3 className="mt-4">Journey Date: 13 July 2023</h3>
            <h2 className="bg-danger shadow text-light mt-5 rounded text-center w-25">
              Warning
            </h2>
            <ul>
              <li>
                Take the time to thoroughly read the trip pricing and any
                special requirement.
              </li>
              <li>
                Provide accurate information when feeling out the booking form.
              </li>
              <li>
                Once you submit the booking request it may not be make changes
                or modification without additional fees or restrictions .
              </li>
              <li>
                You must agree to fulfil the payment obligations and associated
                with your chosen trip.
              </li>
              <li>
                Make sure you understand the terms and conditions before
                confirming your booking.
              </li>
              <li>Thank you for choosing our Tour Advisor Website.</li>
            </ul>
            <h3
              className="mt-4 text-center text-light  shadow rounded bg-success"
              style={{ width: "40%" }}
            >
              Pickup Details
            </h3>

            <div className="mt-3 ms-2">
              <p>
                <MdRoom />
                Mohammadpur Bus Stand, Dhaka, Bangladesh.
              </p>
              <p>
                <MdRoom />
                Jigatola Bus Stand, Dhanmondi, Dhaka, Bangladesh.
              </p>
              <p>
                <MdRoom />
                Oposite of Shyamoli Squire, Dhaka, Bangladesh.
              </p>
              <p>
                <MdRoom />
                Rajshai Rail Gate, Rajshai , Bangladesh.
              </p>
              <p>
                <MdRoom />
                Shibbari more, Khulna, Bangladesh.
              </p>
              <p>
                <MdRoom />
                Chittagong rail gate, Chittagong, Bangladesh
              </p>
            </div>

            {/* start Service content */}
            <div className="service-info">
              <h3 className="mt-5 bg-primary w-50 text-light  text-center shadow rounded">
                Support and Service
              </h3>
              <h5 className="mt-3">
                <MdEmojiFoodBeverage /> Breakfast, Lunch, Dinner
              </h5>
              <h5>
                <MdEmojiTransportation /> Vehicle Support
              </h5>
              <h5>
                <MdMan /> Tour guid
              </h5>
              <h5>
                <FaTshirt /> T-shirt
              </h5>
              <h5>
                <MdMedicalServices />
                Medical Support
              </h5>
            </div>
          </div>
        </div>
        {/* end first column */}
        {/* second column */}
        <div className="col ms-2 me-5">
          <div className="col ">
            {/* booing form start */}
            <div className="container">
              <h2 className="text-center">Booking Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className={`form-control mt-2 ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group  mt-2">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className={`form-control  mt-2 ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group  mt-2">
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    type="tel"
                    className={`form-control ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>
                <div className="form-group  mt-2">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group  mt-2">
                  <label htmlFor="location">Location:</label>
                  <select
                    className={`form-control ${
                      errors.location ? "is-invalid" : ""
                    }`}
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    <option value="">Select location</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                  {errors.location && (
                    <div className="invalid-feedback">{errors.location}</div>
                  )}
                </div>
                <div className="form-group  mt-2">
                  <label htmlFor="person">Person:</label>
                  <select
                    className={`form-control ${
                      errors.person ? "is-invalid" : ""
                    }`}
                    id="person"
                    value={person}
                    onChange={(e) => setPerson(e.target.value)}
                  >
                    <option value="">Select person</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                  {errors.person && (
                    <div className="invalid-feedback">{errors.person}</div>
                  )}
                </div>
                <div className="form-group  mt-2">
                  <label htmlFor="room">Room:</label>
                  <select
                    className={`form-control ${
                      errors.room ? "is-invalid" : ""
                    }`}
                    id="room"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                  >
                    <option value="">Select room</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                  {errors.room && (
                    <div className="invalid-feedback">{errors.room}</div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary mt-2 w-100">
                  Submit
                </button>
              </form>
            </div>
            {/* booking form end */}
            {/* payment content start */}
            <div
              className="mt-5 text-center   "
              style={{ marginLeft: "78px", width: "83%" }}
            >
              <div className="card bg-warning ">
                <h3 className="mt-2">Payment Method</h3>
                <h5>
                  {" "}
                  <MdAppBlocking />
                  019191581842
                </h5>
                <h5>
                  {" "}
                  <MdAppBlocking />
                  01703773712
                </h5>
                <div className="row">
                  <img
                    className="img-fluid mt-3"
                    src="https://cosmosgroup.sgp1.cdn.digitaloceanspaces.com/news/K5hrS7G0ydLjVzPPDU3cWuxjsV4kQa2NrTVHa2Xa.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* payment content end */}

            {/* admin information */}

            <div
              className="card mt-4 bg-secondary shadow"
              style={{ marginLeft: "78px", width: "84%" }}
            >
              <div className="" style={{ marginLeft: "78px" }}>
                <h3 className="mt-5 bg-info rounded text-light shadow w-75 text-center">
                  Admin Information
                </h3>
                <div className=" mt-3">
                  <div className="info-group text-warning shadow ">
                    <h5>
                      {" "}
                      <MdInfo></MdInfo>
                      <span className="ms-2">Shahariar Kobir Shakil</span>
                    </h5>
                    <p>
                      <MdMobileFriendly></MdMobileFriendly>
                      <span className="ms-2">01919581842</span>
                    </p>
                  </div>
                  <div className="info-group text-light shadow">
                    <h5>
                      {" "}
                      <MdInfo></MdInfo>
                      <span className="ms-2">Shahariar Kobir Shakil</span>
                    </h5>
                    <p>
                      <MdMobileFriendly></MdMobileFriendly>
                      <span className="ms-2">01919581842</span>
                    </p>
                  </div>
                  <div className="info-group text-dark shadow">
                    <h5>
                      {" "}
                      <MdInfo></MdInfo>
                      <span className="ms-2">Shahariar Kobir Shakil</span>
                    </h5>
                    <p>
                      <MdMobileFriendly></MdMobileFriendly>
                      <span className="ms-2">01919581842</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* end admin info */}
          </div>
        </div>
        {/* end second column */}
      </div>
      {/* end first row */}

      {/* Start blog post  */}

      <div className="container mt-5">
        <div className="blog-header text-center mt-5">
          <img
            className="img-fluid rounded-circle mt-5"
            style={{ height: "150px", width: "150px" }}
            src="https://img.freepik.com/free-photo/closeup-shot-deer-nara-park-japan_181624-25614.jpg?size=626&ext=jpg&ga=GA1.2.1270014827.1685105541&semt=sph"
            alt=""
          />
          <h3 className="mt-2">Welcome to SundarBan</h3>
          <p className="mt-3" style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            omnis cumque inventore aliquid reprehenderit accusantium minima
            veritatis nemo facere? Quasi fugiat veritatis eius eum harum aliquid
            exercitationem est placeat numquam.
          </p>
        </div>
        {/* end blog header content */}

        <div className="container">
          <div className="mt-5">
            <div className="text-center">
              <h3>Recent Picture</h3>
            </div>
          </div>
          {/* start gallery content */}
          <div className="row gx-5 gy-5 mt-2">
            <div className="col-4 ">
              <img
                className="img-fluid rounded shadow"
                src="https://img.freepik.com/free-photo/closeup-shot-deer-nara-park-japan_181624-25614.jpg?size=626&ext=jpg&ga=GA1.2.1270014827.1685105541&semt=sph"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded shadow"
                src="https://img.freepik.com/free-photo/closeup-shot-deer-nara-park-japan_181624-25614.jpg?size=626&ext=jpg&ga=GA1.2.1270014827.1685105541&semt=sph"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded shadow"
                src="https://img.freepik.com/free-photo/closeup-shot-deer-nara-park-japan_181624-25614.jpg?size=626&ext=jpg&ga=GA1.2.1270014827.1685105541&semt=sph"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded shadow"
                src="https://img.freepik.com/free-photo/closeup-shot-deer-nara-park-japan_181624-25614.jpg?size=626&ext=jpg&ga=GA1.2.1270014827.1685105541&semt=sph"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded shadow"
                src="https://img.freepik.com/free-photo/closeup-shot-deer-nara-park-japan_181624-25614.jpg?size=626&ext=jpg&ga=GA1.2.1270014827.1685105541&semt=sph"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded shadow"
                src="https://img.freepik.com/free-photo/closeup-shot-deer-nara-park-japan_181624-25614.jpg?size=626&ext=jpg&ga=GA1.2.1270014827.1685105541&semt=sph"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* blog post end  */}

      {/* start review section  */}

      <div className="container mt-5">
        <h3 className="text-center mt-5">Tour Review</h3>
        <div className="row mt-5">
          <div className="col-6 card">
            {/* content row  */}
            <div className="row">
              <div className="col-4">
                <img
                  className="img-fluid rounded-circle mt-2"
                  style={{ height: "100px", width: "100px" }}
                  src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?size=626&ext=jpg&ga=GA1.2.1270014827.1685105541&semt=sph"
                  alt=""
                />
                <p className="me-5 mt-2">Sakira Raheman</p>
              </div>
              <div className="col-8">
                <span style={{ color: "gold" }}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  labore itaque deleniti vero consequatur dolore dignissimos
                  sapiente amet esse fugiat. Nobis, esse! Expedita, minima amet
                  ea sunt sequi veritatis cumque.
                </p>
              </div>
            </div>
            {/* end content row */}
          </div>

          <div className="col-6  card">
            <div className="row">
              <div className="col-8">
                <span style={{ color: "gold" }}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  labore itaque deleniti vero consequatur dolore dignissimos
                  sapiente amet esse fugiat. Nobis, esse! Expedita, minima amet
                  ea sunt sequi veritatis cumque.
                </p>
              </div>
              <div className="col-4 ">
                <img
                  className="mt-2 img-fluid rounded-circle"
                  style={{ height: "100px", width: "100px" }}
                  src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?size=626&ext=jpg&ga=GA1.2.1270014827.1685105541&semt=sph"
                  alt=""
                />
                <p className="me-5 mt-2">Sakira Raheman</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <form action="">
          <h5>
            Rating{" "}
            <span style={{ color: "gold" }}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
          </h5>
          <label htmlFor="" className="mb-2">
            Comments
          </label>
          <textarea
            name=""
            className="form-control"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <div class="mb-3 mt-3">
            <label for="exampleFormControlInput1" class="form-label">
              Full name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter name "
            />
          </div>
          <div class="mb-3 mt-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TourPackageDetails;
