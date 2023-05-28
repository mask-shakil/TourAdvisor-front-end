import React from "react";

const PopularPackageCardDetails = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h3>SundarBan Fantastic Tour</h3>
            <p style={{ textAlign: "justify" }}>
              The Sundarbans is a mangrove forest located in Bangladesh,
              specifically in the southwestern part of the country. It is one of
              the largest continuous mangrove forests in the world and is
              recognized as a UNESCO World Heritage Site.
            </p>
            <img
              className="mt-3 rounded shadow"
              style={{ height: "250px", width: "450px" }}
              src="https://img.freepik.com/free-photo/beautiful-axis-deer-from-sundarbans-tiger-reserve-india_475641-831.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=sph"
              alt=""
            />
            <div className="mt-5">
              <h3>Journey Date: 13 July 2023</h3>
            </div>
            <div className="mt-5">
              <h4
                className="rounded shadow"
                style={{ background: "red", width: "15%", color: "white" }}
              >
                Warning
              </h4>
              <ul className="mt-4">
                <li>
                  Take the time to thoroughly read the trip pricing and any
                  special requirement.
                </li>
                <li>
                  Provide accurate information when feeling out the booking
                  form.
                </li>
                <li>
                  Once you submit the booking request it may not be make changes
                  or modification without additional fees or restrictions .
                </li>
                <li>
                  You must agree to fulfil the payment obligations and
                  associated with your chosen trip.
                </li>
                <li>
                  Make sure you understand the terms and conditions before
                  confirming your booking.
                </li>
                <li>Thank you for choosing our Tour Advisor Website.</li>
              </ul>
              <h3></h3>
            </div>

            {/* Pickup point */}

            <div className="text-center">
              <h3
                className="rounded shadow mt-5"
                style={{ background: "#4942E4", color: "white", width: "60%" }}
              >
                Pickup point Details
              </h3>
            </div>
            <ol className="mt-3">
              <li>
                <h5>Mohammadpur Bus Stand, Dhaka, Bangladesh.</h5>
                <p>Mobile: +88 0139102912</p>
              </li>
              <li>
                <h5>Jigatola Bus Stand, Dhanmondi, Dhaka, Bangladesh.</h5>
                <p>Mobile: +88 0139102912</p>
              </li>
              <li>
                <h5>Oposite of Shyamoli Squire, Dhaka, Bangladesh.</h5>
                <p>Mobile: +88 0139102912</p>
              </li>
              <li>
                <h5>Rajshai Rail Gate, Rajshai , Bangladesh.</h5>
                <p>Mobile: +88 0139102912</p>
              </li>
              <li>
                <h5>Shibbari more, Khulna, Bangladesh.</h5>
                <p>Mobile: +88 0139102912</p>
              </li>
            </ol>

            {/* includes our packages in tour advisor */}

            <div className="text-center">
              <h3
                className="rounded shadow mt-4"
                style={{ background: "green", color: "white", width: "60%" }}
              >
                Support and Service
              </h3>
            </div>

            <ul className="mt-3">
              <li>
                <h5>Food: Breakfast, Lunch, dinner</h5>
              </li>
              <li>
                <h5>Vehicle Support</h5>
              </li>
              <li>
                <h5>Tour Guide</h5>
              </li>
              <li>
                <h5>Provide T-Shirt</h5>
              </li>
              <li>
                <h5>Medical Support 24/7</h5>
              </li>
            </ul>
          </div>

          {/* second column */}

          <div className="col-5">
            <div className="col-10 mt-3" style={{ marginLeft: "25%" }}>
              <div className="body text-center">
                {/* 
              Booking form  */}

                <h1>Booking Details</h1>
              </div>
              <div class="container">
                <form>
                  <div class="form-group mt-3">
                    <label for="name">Name:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="form-group mt-3">
                    <label for="email">Email:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="form-group mt-3">
                    <label for="number">Phone:</label>
                    <input
                      type="number"
                      class="form-control"
                      id="number"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div class="form-group mt-3">
                    <label for="location">Pickup Point:</label>
                    <select class="form-control" id="location">
                      <option value="option-0"></option>
                      <option value="option1">Dhanmondi, Dhaka</option>
                      <option value="option2">Shyamoli, Dhaka</option>
                      <option value="option3">Chittgong</option>
                      <option value="option4">Rajshahi</option>
                      <option value="option-5">Khulna</option>
                    </select>
                  </div>
                  <div class="form-group mt-3">
                    <label for="roomType">Room Type:</label>
                    <select class="form-control" id="roomType">
                      <option value="option0"></option>
                      <option value="option1">Couple</option>
                      <option value="option2">Single</option>
                      <option value="option3">Family</option>
                    </select>
                  </div>
                  <div class="form-group mt-3">
                    <label for="persons">Number of Persons:</label>
                    <input
                      type="number"
                      class="form-control"
                      id="persons"
                      placeholder="Enter number of persons"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary mt-3 w-100 ">
                    Book
                  </button>
                </form>
                <div>
                  {/* Payment method */}

                  <div className="mt-5 card bg-success  rounded">
                    <h4 className="text-center text-white">Payment Method</h4>
                  </div>
                  <div className="card  mt-4" style={{ background: "#DB005B" }}>
                    <div className="text-center">
                      <h3 className="mt-1 text-white">Bkash</h3>
                      <h4 className="text-dark">019191581842</h4>
                    </div>
                  </div>
                  <div className="card  mt-4" style={{ background: "#E55807" }}>
                    <div className="text-center">
                      <h3 className="mt-1 text-white">Nagad</h3>
                      <h4 className="text-dark">019191581842</h4>
                    </div>
                  </div>
                  <div className="card  mt-4" style={{ background: "#9A208C" }}>
                    <div className="text-center">
                      <h3 className="mt-1 text-white">Roket</h3>
                      <h4 className="text-dark">019191581842</h4>
                    </div>
                  </div>
                  <div className="card  mt-4" style={{ background: "#002B5B" }}>
                    <div className="text-center">
                      <h3 className="mt-1 text-white">Bank Account Number</h3>
                      <h4 className="text-info">205020296700158611</h4>
                    </div>
                  </div>

                  {/* support and service admin */}

                  <div className="mt-5">
                    <div className="text-center">
                      <h3
                        className="rounded shadow "
                        style={{
                          background: "#C92C6D",
                          color: "white",
                          width: "105%",
                          padding: "5px",
                          marginTop: "105px",
                        }}
                      >
                        Admin Support and Service
                      </h3>
                    </div>

                    <div className="card">
                      <div className="text-center">
                        <h5>System maintains and update</h5>
                        <h5>Technical Support</h5>
                        <h5>User Communication and support</h5>
                        <h5>Data management</h5>
                        <h5>Reporting and analyzing</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* blog post section */}
      <div className="container mt-5">
        <div className="row">
          <div className="text-center mt-5">
            <img
              className="img-fluid rounded-circle"
              style={{ height: "150px", width: "150px" }}
              src="https://img.freepik.com/free-photo/amazing-bengal-tiger-nature_475641-1137.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=sph"
              alt=""
            />
            <h3 className="mt-3">Sundarban Blogs</h3>
          </div>
          <p>
            The Sundarbans mangrove forest is one of the most extensive single
            such forests in the world (140,000 ha). It lies on the delta of the
            Bay’s Ganges, Brahmaputra, and Meghna rivers of Bengal. It is
            adjacent to the border of India’s Sundarbans World Heritage site
            inscribed in 1987. The site is intersected by a complex network of
            tidal waterways, mudflats, and small islands of salt-tolerant
            mangroves. It presents an excellent example of ongoing ecological
            processes. The area is known for its wide range of fauna, including
            260 bird species, the man-eating Bengal tiger, and other threatened
            species such as the estuarine crocodile and the Indian python. This
            tour starts from Dhaka with the modern Rocket Ship. It covers Sixty
            domed mosques, Khan Jahan Ali shrine at Bagerhat and Harbaria, Kotka
            & Kochikhali wildlife sanctuary, and many more activities in
            Sundarbans.
          </p>
        </div>

        {/* image Gallery */}

        <div className="container">
          <h3 className="mt-5 text-center">Image Gallery</h3>
          <div className="row">
            <div className="col-4 mt-5">
              <img
                className="img-fluid rounded"
                src="https://img.freepik.com/free-photo/gigantic-salted-water-crocodile-caught-mangroves-sundarbans-india_475641-829.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=sph"
                alt=""
              />
            </div>
            <div className="col-4 mt-5">
              <img
                className="img-fluid rounded"
                src="https://img.freepik.com/free-photo/gigantic-salted-water-crocodile-caught-mangroves-sundarbans-india_475641-829.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=sph"
                alt=""
              />
            </div>
            <div className="col-4 mt-5">
              <img
                className="img-fluid rounded"
                src="https://img.freepik.com/free-photo/gigantic-salted-water-crocodile-caught-mangroves-sundarbans-india_475641-829.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=sph"
                alt=""
              />
            </div>
            <div className="col-4 mt-5">
              <img
                className="img-fluid rounded"
                src="https://img.freepik.com/free-photo/gigantic-salted-water-crocodile-caught-mangroves-sundarbans-india_475641-829.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=sph"
                alt=""
              />
            </div>
            <div className="col-4 mt-5">
              <img
                className="img-fluid rounded"
                src="https://img.freepik.com/free-photo/gigantic-salted-water-crocodile-caught-mangroves-sundarbans-india_475641-829.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=sph"
                alt=""
              />
            </div>
            <div className="col-4 mt-5">
              <img
                className="img-fluid rounded"
                src="https://img.freepik.com/free-photo/gigantic-salted-water-crocodile-caught-mangroves-sundarbans-india_475641-829.jpg?size=626&ext=jpg&ga=GA1.1.1270014827.1685105541&semt=sph"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPackageCardDetails;
