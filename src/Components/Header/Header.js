import React from "react";
import { GoLocation } from "react-icons/go";
import { GrMail } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
const Header = () => {
  return (
    <div>
      {/* <!-- Header Top --> */}
      <div id="home" className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 col-lg-9">
              <div className="header-top-item">
                <div className="header-top-left">
                  <ul>
                    <li>
                      <a href="tel:+07554332322">
                        <FiPhoneCall /> Call : +91 90215 57095
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@trans23.com">
                        <GrMail /> info@trans23.com
                      </a>
                    </li>
                    <li>
                      <GoLocation /> Maharashtra India
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3 d-none d-lg-block">
              <div className="header-top-item">
                <div className="header-top-right">
                  <ul>
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
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Header Top --> */}
      {/* <!-- Start Navbar Area --> */}
      <div className="navbar-area sticky-top">
        {/* <!-- Menu For Mobile Device --> */}
        <div className="mobile-nav">
          {/* <a href="index.html" className="logo">
            <img src={require("../../Assets/images/logo-two.png")} alt="" />
          </a> */}
        </div>
        {/* <!-- Menu For Desktop Device --> */}
        <div className="main-nav sticky-top">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="index.html">
                <img src={require("../../Assets/images/logo.png")} alt="Logo" />
              </a>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#home" data-after="Home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#about" data-after="About">
                      About Us
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    
                  <a     href="#team" data-after="Team" >Our Team</a>

           
                  </li> */}
                  <li className="nav-item">
                    <a href="#services" data-after="Service">
                      Services
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    
                    <a
                         href="#testimonial" data-after="Testimonial"
                    >
                      Testimonial
                    </a>
          
                  </li> */}
                  {/* <li className="nav-item">
                    
                    <a     href="#plan" data-after="Plan">
                      Our Plan
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a href="#contract" data-after="Contract">
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#blog" className="nav-link">
                      Blog
                    </a>
                  </li>
                </ul>
                <div className="nav-srh">
                  <div className="search-toggle">
                    <button className="search-icon icon-search">
                      <i className="fa fa-search"></i>
                    </button>
                    <button className="search-icon icon-close">
                      <i className="fa fa-close"></i>
                    </button>
                  </div>
                  <div className="search-area">
                    <form>
                      <input
                        type="text"
                        className="src-input"
                        id="search-terms"
                        placeholder="Search here..."
                      />
                      <button
                        type="submit"
                        name="submit"
                        value="Go"
                        className="search-icon"
                      >
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- End Navbar Area --> */}
    </div>
  );
};

export default Header;
