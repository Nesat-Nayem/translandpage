import React from "react";
import { GoLocation } from "react-icons/go";
import { GrMail } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
const Footer = () => {
  return (
    <div>
      {/* <!-- subscribe Sec Start --> */}
      <div className="subscribe-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="subscribe-box">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="subscribe-info pl-65">
                      <h3 className="title">Need Consultation?</h3>
                      <ul>
                        <li>
                          <a href="tel:+07554332322">Phone: +07554332322 </a>
                        </li>
                        <li>
                          <a href="mailto:info@trans23.com">
                            Email: info@trans23.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="subscribe-info pl-50 pr-70">
                      <h3 className="title">Need Consultation?</h3>
                      <form action="#">
                        <div className="input-box">
                          <input type="email" placeholder="Email" />
                          <button type="button">Subscribe</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- subscribe Sec End --> */}
      {/* <!-- Footer Sec Start --> */}
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="footer-content mt-30">
                <h3 style={{ color: "white" }} className="title">
                  Address
                </h3>
                <p style={{ paddingBottom: "0px" }}>
                  {" "}
                  <GoLocation
                    style={{ fontSize: "18px", marginRight: " 15px" }}
                  />{" "}
                  210-27 Quadra, Canada
                </p>
                <p style={{ padding: "0px", marginTop: "5px" }}>
                  {" "}
                  <FiPhoneCall
                    style={{ fontSize: "18px", marginRight: " 15px" }}
                  />{" "}
                  +07 554 332 322{" "}
                </p>
                <p style={{ padding: "0px", marginTop: "5px" }}>
                  {" "}
                  <GrMail
                    style={{ fontSize: "18px", marginRight: " 15px" }}
                  />{" "}
                  info@trans23.com
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consect etuer adipiscing elit, sed
                  diam nonu mmy nibh euismod tincid
                </p>
                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-google"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-linkedin-square"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="fa fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-list mt-30">
                <h3 className="title">Services</h3>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="service.html">Services</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-list item-2 mt-30 pl-45">
                <h3 className="title">Useful Links</h3>
                <ul>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="service-details.html">Service Details</a>
                  </li>
                  <li>
                    <a href="error.html">Error Page</a>
                  </li>
                  <li>
                    <a href="our-team.html">Our Team</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-instagram mt-30">
                <h3 className="title">Instagram</h3>
                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src={require("../../Assets/images/ins-1.jpg")}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src={require("../../Assets/images/ins-1.jpg")}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src={require("../../Assets/images/ins-1.jpg")}
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src={require("../../Assets/images/ins-1.jpg")}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src={require("../../Assets/images/ins-1.jpg")}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src={require("../../Assets/images/ins-1.jpg")}
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright footer-copyright-item">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p>
                  © Copyright <span id="year"></span> All rights reserved{" "}
                  <span className="color">Trans23</span>.
                </p>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Terms</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Privacy</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
