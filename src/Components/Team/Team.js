import React from "react";

const Team = () => {
  return (
    <div>
      {/* <!--Start Our Team Sec--> */}
      <section id="team" className="our-team-sec">
        <div className="container">
          <div className="section-title">
            <h5 className="text-primary-color text-underline section-icon">
              Meet Our Team
            </h5>
            <h2>We Have a Professional Team</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/* <!-- Single Service Team Sec--> */}
              <div className="team-block">
                <div className="team-upper-part">
                  <img
                    className="img-full"
                    src={require("../../Assets/images/team-img1.jpg")}
                    alt=""
                  />
                  <div className="overlay">
                    <ul className="social-list vertical-style list-sm">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-bottom-part text-center">
                  <h4 className="team-title mrb-5">
                    <a href="#">Jack Mehoff</a>
                  </h4>
                  <h6 className="designation">Worker</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              {/* <!-- Single Service Team Sec--> */}
              <div className="team-block">
                <div className="team-upper-part">
                  <img
                    className="img-full"
                    src={require("../../Assets/images/team-img2.jpg")}
                    alt=""
                  />
                  <div className="overlay">
                    <ul className="social-list vertical-style list-sm">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-bottom-part text-center">
                  <h4 className="team-title mrb-5">
                    <a href="#">les Williams</a>
                  </h4>
                  <h6 className="designation">Worker</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              {/* <!-- Single Service Team Sec--> */}
              <div className="team-block">
                <div className="team-upper-part">
                  <img
                    className="img-full"
                    src={require("../../Assets/images/team-img3.jpg")}
                    alt=""
                  />
                  <div className="overlay">
                    <ul className="social-list vertical-style list-sm">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-bottom-part text-center">
                  <h4 className="team-title mrb-5">
                    <a href="#">Amita Bisht</a>
                  </h4>
                  <h6 className="designation">Worker</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              {/* <!-- Single Service Team Sec--> */}
              <div className="team-block">
                <div className="team-upper-part">
                  <img
                    className="img-full"
                    src={require("../../Assets/images/team-img4.jpg")}
                    alt=""
                  />
                  <div className="overlay">
                    <ul className="social-list vertical-style list-sm">
                      <li>
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-bottom-part text-center">
                  <h4 className="team-title mrb-5">
                    <a href="#">Megan Haynes</a>
                  </h4>
                  <h6 className="designation">Worker</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--End Our Team Sec--> */}
    </div>
  );
};

export default Team;
