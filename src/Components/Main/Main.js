import React from "react";

import { GoLocation } from 'react-icons/go';
import { GrMail } from 'react-icons/gr';
import { FaUserNurse } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { GoPackage } from 'react-icons/go';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsArrowRight } from 'react-icons/bs';
import { FaShippingFast } from 'react-icons/fa';
import { FiGift } from 'react-icons/fi';
import { FaWarehouse } from 'react-icons/fa';
import { GiCommercialAirplane } from 'react-icons/gi';
import { GiShipBow } from 'react-icons/gi';
import { FaParachuteBox } from 'react-icons/fa';

const Main = () => {

//   const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
// const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
// const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
// const header = document.querySelector('.header.container');

// hamburger.addEventListener('click', () => {
// 	hamburger.classList.toggle('active');
// 	mobile_menu.classList.toggle('active');
// });

// document.addEventListener('scroll', () => {
// 	var scroll_position = window.scrollY;
// 	if (scroll_position > 250) {
// 		header.style.backgroundColor = '#29323c';
// 	} else {
// 		header.style.backgroundColor = 'transparent';
// 	}
// });

// menu_item.forEach((item) => {
// 	item.addEventListener('click', () => {
// 		hamburger.classList.toggle('active');
// 		mobile_menu.classList.toggle('active');
// 	});
// });

  return (
    <div>
      {/* <!-- Preloader --> */}
      <div className="loader">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Preloader --> */}
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
                        
                      <FiPhoneCall /> Call : +07 554 332 322
                      </a>
                    </li>
                    <li>
                      
                      <a href="mailto:info@trans23.com">
                        
                      <GrMail /> info@trans23.com
                      </a>
                    </li>
                    <li>
                      
                    <GoLocation /> 210-27 Quadra, Canada
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
          
          <a href="index.html" className="logo">
            
            <img src={require("../../Assets/images/logo-two.png")} alt="" />
       
          </a>
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
                    
                    <a href="#home" data-after="Home" >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    
                    <a     href="#about" data-after="About">
                      About Us
                    </a>
                  </li>
                  {/* <li className="nav-item">
                    
                  <a     href="#team" data-after="Team" >Our Team</a>

           
                  </li> */}
                  <li className="nav-item">
                    
                    <a
                     href="#services" data-after="Service"
                    >
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
                    
                    <a     href="#contract" data-after="Contract">
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    
                    <a href="contact.html" className="nav-link">
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
      {/* <!--Main Slider--> */}
      <section className="main-slider">
        <div className="main-slider-carousel owl-carousel owl-theme">
          <div
            className="slide"
            style={{backgroundImage:"url(images/main-slider-1.jpg)"}}
          >
            <div className="container">
              {/* <!-- Content boxed --> */}
              <div className="content-boxed">
                <div className="title">Welcome to Shifty</div>
                <h1>
                  Quality Home <br /> Relocation Services
                </h1>
                <div className="link-box clearfix">
                  
                  <a
                    href="https://www.youtube.com/watch?v=9No-FiEInLA"
                    className="lightbox-image video-box"
                  >
                    <span className="fa fa-play">
                      <i className="ripple"></i>
                    </span>
                  </a>
                  <a href="service.html" className="theme-btn bttn">
                    <span className="txt">View Service</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{backgroundImage:"url(images/main-slider-2.jpg)"}}
          >
            <div className="container">
              {/* <!-- Content boxed --> */}
              <div className="content-boxed">
                <div className="title">Welcome to Solva Agency</div>
                <h1>
                  Quality Office <br /> Relocation Services
                </h1>
                <div className="link-box clearfix">
                  
                  <a
                    href="https://www.youtube.com/watch?v=9No-FiEInLA"
                    className="lightbox-image video-box"
                  >
                    <span className="fa fa-play">
                      <i className="ripple"></i>
                    </span>
                  </a>
                  <a href="service.html" className="theme-btn bttn">
                    <span className="txt">View Service</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slide"
            style={{backgroundImage:"url(images/main-slider-3.jpg)"}}
          >
            <div className="container">
              {/* <!-- Content boxed --> */}
              <div className="content-boxed">
                <div className="title">Welcome to Solva Agency</div>
                <h1>
                  Better Car <br /> Transportation Services
                </h1>
                <div className="link-box clearfix">
                  
                  <a
                    href="https://www.youtube.com/watch?v=9No-FiEInLA"
                    className="lightbox-image video-box"
                  >
                    <span className="fa fa-play">
                      <i className="ripple"></i>
                    </span>
                  </a>
                  <a href="service.html" className="theme-btn bttn">
                    <span className="txt">View Service</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--End Main Slider--> */}
      {/* <!--Start Our Features Sec--> */}
      <section className="featured-sec">
        <div className="container">
          <div className="featured-inner">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                {/* <!--Start Single service-block Sec--> */}
                <div className="service-block">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="icon-box">
                        
                        {/* <span className="icon fi flaticon-staff"></span> */}
                        <span> <FaUserNurse className="icon fi"/></span>
                      </div>
                      <h5>
                        <a href="#">01. Expert Staff</a>
                      </h5>
                      <div className="text">
                        Sed quia magni dolores eos qui ratione voluptatem sequi
                        nesciunt eque porro.
                      </div>
                    </div>
                    <div className="big-icon flaticon-growth"></div>
                    <a href="#" className="arrow-box">
                    <span> <BsArrowRight className="icon" /></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                {/* <!--Start Single service-block Sec--> */}
                <div className="service-block">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="icon-box">
                        
                        <span> <GoPackage className="icon fi" />  </span>
                      </div>
                      <h5>
                        <a href="#">02. Logistic Services</a>
                      </h5>
                      <div className="text">
                        Sed quia magni dolores eos qui ratione voluptatem sequi
                        nesciunt eque porro.
                      </div>
                    </div>
                    <div className="big-icon flaticon-growth"></div>
                    <a href="#" className="arrow-box">
                    <span> <BsArrowRight className="icon" /></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                {/* <!--Start Single service-block Sec--> */}
                <div className="service-block">
                  <div className="inner-box">
                    <div className="content-box">
                      <div className="icon-box">
                        
                        <span > <TbTruckDelivery  className="icon fi"  /> </span>
                      </div>
                      <h5>
                        <a href="#">03. Ground Shipping</a>
                      </h5>
                      <div className="text">
                        Sed quia magni dolores eos qui ratione voluptatem sequi
                        nesciunt eque porro.
                      </div>
                    </div>
                    <div className="big-icon flaticon-growth"></div>
                    <a href="#" className="arrow-box">
                      <span> <BsArrowRight className="icon" /></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--End Our Features Sec--> */}
      {/* <!--Start Our About Sec--> */}
      <section id="about" className="introduction-section">
        <div className="container">
          <div className="row clearfix">
            {/* <!-- Image Column --> */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image">
                  
                  <img src={require("../../Assets/images/about-img.jpg")} alt="" />
                  <div className="projects">
                    
                    More than 350 projects <br /> were completed.
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Content Column --> */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <div className="title">Our introduction</div>
                  <h2>
                    We are here to manage <br /> Quality Consulting Service
                    <br /> and Finace Plan
                  </h2>
                </div>
                <div className="text">
                  <p>
                    The argument in favor of using filler text goes something
                    like this: If you use real content in the
                    <a href="services.html">Consulting Process</a>, anytime you
                    reach a review point you’ll end up reviewing and negotiating
                    the content itself and not the design.
                  </p>
                  <p>
                    Aenean tincidunt id mauris id auctor. Donec at ligula lacus.
                    Nulla dignissim mi quis neque interdum, quis porta sem
                    finibus.
                  </p>
                </div>
                <div className="row clearfix">
                  {/* <!-- Column --> */}
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <ul className="list-style-three">
                      <li>Startegic Vision</li>
                      <li>Interpersonal Skill</li>
                    </ul>
                  </div>
                  {/* <!-- Column --> */}
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <ul className="list-style-three">
                      <li>Networks That Span Sectors</li>
                      <li>Flexible Delivery Model</li>
                    </ul>
                  </div>
                </div>
                {/* <!-- Contact --> */}
                <div className="contact">
                  
                  <span className="question">Call to Ask Any Question</span>
                  <a href="tel:+540-325-1523">540-325-1523</a> or
                  <a href="tel:+540-328-1265">540-328-1265</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--End Our About Sec--> */}
      {/* <!--Start Our Services Sec--> */}
      <section id="services" className="service_section">
        <div className="container">
          <div className="section-title">
            <h5 className="text-primary-color text-underline section-icon">
              Our Latest Projects
            </h5>
            <h2>Let's Have a Look At Our Latest Projects.</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* <!-- Single Service Item Sec--> */}
              <div className="service_item">
                <div className="service_icon_wrapper">
                  
                <FaShippingFast style={{    fontSize: '60px',margin: 0,color:' #fd5e16'}}  />
                </div>
                <p className="mb10 service_title">
                  <a href="service-details.html">Road Freight</a>
                </p>
                <p>
                  Smply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, Smply dummy text of the
                </p>
                <a className="line-animation" href="service-details.html">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {/* <!-- Single Service Item Sec--> */}
              <div className="service_item">
                <div className="service_icon_wrapper">
                  
                <FiGift style={{    fontSize: '60px',margin: 0,color:' #fd5e16'}}  />
                </div>
                <p className="mb10 service_title">
                  <a href="service-details.html">Packaging</a>
                </p>
                <p>
                  Smply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, Smply dummy text of the
                </p>
                <a className="line-animation" href="service-details.html">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {/* <!-- Single Service Item Sec--> */}
              <div className="service_item">
                <div className="service_icon_wrapper">
                  
                <FaWarehouse style={{    fontSize: '60px',margin: 0,color:' #fd5e16'}}  />
                </div>
                <p className="mb10 service_title">
                  <a href="service-details.html">Warehousing</a>
                </p>
                <p>
                  Smply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, Smply dummy text of the
                </p>
                <a className="line-animation" href="service-details.html">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {/* <!-- Single Service Item Sec--> */}
              <div className="service_item">
                <div className="service_icon_wrapper">
                  
                <GiCommercialAirplane style={{    fontSize: '60px',margin: 0,color:' #fd5e16'}}  />
                </div>
                <p className="mb10 service_title">
                  <a href="service-details.html">Air Freight</a>
                </p>
                <p>
                  Smply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, Smply dummy text of the
                </p>
                <a className="line-animation" href="service-details.html">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {/* <!-- Single Service Item Sec--> */}
              <div className="service_item">
                <div className="service_icon_wrapper">
                  
                <GiShipBow style={{    fontSize: '60px',margin: 0,color:' #fd5e16'}}  />
                </div>
                <p className="mb10 service_title">
                  <a href="service-details.html">See Freight</a>
                </p>
                <p>
                  Smply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, Smply dummy text of the
                </p>
                <a className="line-animation" href="service-details.html">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {/* <!-- Single Service Item Sec--> */}
              <div className="service_item">
                <div className="service_icon_wrapper">
                  
                <FaParachuteBox style={{    fontSize: '60px',margin: 0,color:' #fd5e16'}}  />
                </div>
                <p className="mb10 service_title">
                  <a href="service-details.html">Supply Chain</a>
                </p>
                <p>
                  Smply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, Smply dummy text of the
                </p>
                <a className="line-animation" href="service-details.html">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Start Our Services Sec--> */}
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
                  
                  <img className="img-full" src={require("../../Assets/images/team-img1.jpg")} alt="" />
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
                  
                  <img className="img-full" src={require("../../Assets/images/team-img2.jpg")} alt="" />
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
                  
                  <img className="img-full" src={require("../../Assets/images/team-img3.jpg")} alt="" />
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
                  
                  <img className="img-full" src={require("../../Assets/images/team-img4.jpg")} alt="" />
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
      {/* <!-- Testimonial Section Start --> */}
      <div id="testimonial" className="testimonial-section testimonial-bg ptb-100">
        <div className="testimonial-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 offset-lg-0 col-md-10 offset-md-1 col-sm-10 offset-sm-1">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                    <div className="testimonial-image-slider slider-nav text-center">
                      <div className="sin-testiImage">
                        
                        <img src={require("../../Assets/images/testimonial-img1.png")} alt="" />
                      </div>
                      <div className="sin-testiImage">
                        
                        <img src={require("../../Assets/images/testimonial-img2.png")} alt="" />
                      </div>
                      <div className="sin-testiImage">
                        
                        <img src={require("../../Assets/images/testimonial-img1.png")} alt="" />
                      </div>
                      <div className="sin-testiImage">
                        
                        <img src={require("../../Assets/images/testimonial-img2.png")} alt="" />
                      </div>
                      <div className="sin-testiImage">
                        
                        <img src={require("../../Assets/images/testimonial-img1.png")} alt="" />
                      </div>
                      <div className="sin-testiImage">
                        
                        <img src={require("../../Assets/images/testimonial-img2.png")} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-text-slider slider-for text-center">
                  <div className="sin-testiText">
                    <h2>Stepheny Mc.man</h2>
                    <span>California</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do is ut labore et dolore magna aliqua. Quis ipsum
                      suspendisse ultrices . Risus commodo viverra maecenas
                      accumsan lacus vel facilisis.
                    </p>
                  </div>
                  <div className="sin-testiText">
                    <h2>Less Williams</h2>
                    <span>California</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do is ut labore et dolore magna aliqua. Quis ipsum
                      suspendisse ultrices . Risus commodo viverra maecenas
                      accumsan lacus vel facilisis.
                    </p>
                  </div>
                  <div className="sin-testiText">
                    <h2>Amelia</h2>
                    <span>California</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do is ut labore et dolore magna aliqua. Quis ipsum
                      suspendisse ultrices . Risus commodo viverra maecenas
                      accumsan lacus vel facilisis.
                    </p>
                  </div>
                  <div className="sin-testiText">
                    <h2>Stepheny Mc.man</h2>
                    <span>California</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do is ut labore et dolore magna aliqua. Quis ipsum
                      suspendisse ultrices . Risus commodo viverra maecenas
                      accumsan lacus vel facilisis.
                    </p>
                  </div>
                  <div className="sin-testiText">
                    <h2>California</h2>
                    <span>California</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do is ut labore et dolore magna aliqua. Quis ipsum
                      suspendisse ultrices . Risus commodo viverra maecenas
                      accumsan lacus vel facilisis.
                    </p>
                  </div>
                  <div className="sin-testiText">
                    <h2>Amelia</h2>
                    <span>California</span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do is ut labore et dolore magna aliqua. Quis ipsum
                      suspendisse ultrices . Risus commodo viverra maecenas
                      accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial Section End --> */}
      {/* <!-- Pricing Table Section Start --> */}
      <section id="plan" className="pricing-sec">
        <div className="container">
          <div className="section-title">
            <h5 className="text-primary-color text-underline section-icon">
              Pricing Plan
            </h5>
            <h2>Our Pricing Plan Models</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* <!-- Signle Pricing Table Section Start --> */}
              <div className="pricing_plan">
                <div className="pricing_plan_wrapper">
                  <div className="price_area">
                    <div className="price_wrapper">
                      <p>
                        20<span>$</span>
                      </p>
                    </div>
                  </div>
                  <p className="plan_title">Starter</p>
                  <p className="plan_info">
                    Orem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever.
                  </p>
                  <a href="javascript:void(0)" className="theme-btn bttn">
                    <span className="txt">Read More</span>
                  </a>
                </div>
              </div>
              {/* <!-- Signle Pricing Table Section End --> */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* <!-- Signle Pricing Table Section Start --> */}
              <div className="pricing_plan active">
                <div className="pricing_plan_wrapper">
                  <div className="price_area">
                    <div className="price_wrapper">
                      <p>
                        50<span>$</span>
                      </p>
                    </div>
                  </div>
                  <p className="plan_title">Business</p>
                  <p className="plan_info">
                    Orem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever.
                  </p>
                  <a href="javascript:void(0)" className="theme-btn bttn">
                    <span className="txt">Read More</span>
                  </a>
                </div>
              </div>
              {/* <!-- Signle Pricing Table Section End --> */}
            </div>
            <div className="col-lg-4 col-md-6">
              {/* <!-- Signle Pricing Table Section Start --> */}
              <div className="pricing_plan">
                <div className="pricing_plan_wrapper">
                  <div className="price_area">
                    <div className="price_wrapper">
                      <p>
                        99<span>$</span>
                      </p>
                    </div>
                  </div>
                  <p className="plan_title">Advanced</p>
                  <p className="plan_info">
                    Orem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever.
                  </p>
                  <a href="javascript:void(0)" className="theme-btn bttn">
                    <span className="txt">Read More</span>
                  </a>
                </div>
              </div>
              {/* <!-- Signle Pricing Table Section End --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Pricing Table Section End --> */}
      {/* <!-- Request Quote Section Start --> */}
      <section id="contract" className="request-quote-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h6>Request a Call Back</h6>
              <h2>Get A Free Quote Today.</h2>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="request-a-call-back-form">
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mrb-30">
                        <input
                          type="text"
                          placeholder="Name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mrb-30">
                        <input
                          type="text"
                          placeholder="Phone"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mrb-30">
                        <input
                          type="email"
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mrb-30">
                        <select
                          name="categories"
                          className="custom-select-categories"
                          required
                        >
                          <option value="">Freight type</option>
                          <option>Type one</option>
                          <option>Type two</option>
                          <option>Type Three</option>
                          <option>Type Four</option>
                          <option>Type Five</option>
                          <option>Type Six</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mrb-30">
                        <input
                          type="text"
                          placeholder="City of Departure*"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mrb-30">
                        <input
                          type="text"
                          placeholder="Delivery City*"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mrb-0">
                        <button type="submit" className="theme-btn bttn">
                          <span className="txt">Request Submit</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Request Quote Section End --> */}
      {/* <!-- News Section Start --> */}
      <section id="blog" className="blog-sec">
        <div className="container">
          <div className="section-title">
            <h5 className="text-primary-color text-underline section-icon">
              Our Blog
            </h5>
            <h2>Our Latest Articles</h2>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="latest-blog-style4-outer">
                <div className="blog-carousel owl-carousel owl-theme">
                  {/* <!--Start single blog post style4--> */}
                  <div className="single-blog-post-style4">
                    <div className="img-holder">
                      <div className="inner">
                        
                        <img src={require("../../Assets/images/blog-img1.jpg")} alt="" />
                      </div>
                      <div className="title-holder">
                        <ul className="meta-info">
                          <li>
                            <i
                              className="fa fa-calendar thm-clr4"
                              aria-hidden="true"
                            ></i>
                            <a href="#">December 12, 2018</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-comments-o thm-clr4"
                              aria-hidden="true"
                            ></i>
                            <a href="#">Comments 03</a>
                          </li>
                        </ul>
                        <h3 className="blog-title">
                          <a href="service-details.html">
                            Strategic & Commercial Approach With Issues
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  {/* <!--End single blog post style4--> */}
                  {/* <!--Start single blog post style4--> */}
                  <div className="single-blog-post-style4">
                    <div className="img-holder">
                      <div className="inner">
                        
                        <img src={require("../../Assets/images/blog-img2.jpg")} alt="" />
                      </div>
                      <div className="title-holder">
                        <ul className="meta-info">
                          <li>
                            <i
                              className="fa fa-calendar thm-clr4"
                              aria-hidden="true"
                            ></i>
                            <a href="#">December 12, 2018</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-comments-o thm-clr4"
                              aria-hidden="true"
                            ></i>
                            <a href="#">Comments 03</a>
                          </li>
                        </ul>
                        <h3 className="blog-title">
                          <a href="service-details.html">
                            Strategic & Commercial Approach With Issues
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  {/* <!--End single blog post style4--> */}
                  {/* <!--Start single blog post style4--> */}
                  <div className="single-blog-post-style4">
                    <div className="img-holder">
                      <div className="inner">
                        
                        <img src={require("../../Assets/images/blog-img3.jpg")} alt="" />
                      </div>
                      <div className="title-holder">
                        <ul className="meta-info">
                          <li>
                            <i
                              className="fa fa-calendar thm-clr4"
                              aria-hidden="true"
                            ></i>
                            <a href="#">December 12, 2018</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-comments-o thm-clr4"
                              aria-hidden="true"
                            ></i>
                            <a href="#">Comments 03</a>
                          </li>
                        </ul>
                        <h3 className="blog-title">
                          <a href="service-details.html">
                            Strategic & Commercial Approach With Issues
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  {/* <!--End single blog post style4--> */}
                  {/* <!--Start single blog post style4--> */}
                  <div className="single-blog-post-style4">
                    <div className="img-holder">
                      <div className="inner">
                        
                        <img src={require("../../Assets/images/blog-img4.jpg")} alt="" />
                      </div>
                      <div className="title-holder">
                        <ul className="meta-info">
                          <li>
                            <i
                              className="fa fa-calendar thm-clr4"
                              aria-hidden="true"
                            ></i>
                            <a href="#">December 12, 2018</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-comments-o thm-clr4"
                              aria-hidden="true"
                            ></i>
                            <a href="#">Comments 03</a>
                          </li>
                        </ul>
                        <h3 className="blog-title">
                          <a href="service-details.html">
                            Strategic & Commercial Approach With Issues
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  {/* <!--End single blog post style4--> */}
                </div>
                <div className="btn-block">
                  <button className="prev-btn"></button>
                  <button className="next-btn"></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- News Section End --> */}
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
              <h3 style={{color:"white"}} className="title">Address</h3>
           <p style={{paddingBottom:"0px"}}>     <GoLocation style={{    fontSize: '18px',
    marginRight:' 15px'}} />  210-27 Quadra, Canada</p>
           <p style={{padding:"0px", marginTop:"5px"}}>   <FiPhoneCall style={{    fontSize: '18px',
    marginRight:' 15px'}}  />  +07 554 332 322 </p>
           <p style={{padding:"0px", marginTop:"5px"}}>      <GrMail style={{    fontSize: '18px',
    marginRight:' 15px'}}  /> info@trans23.com</p>
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
                      <img src={require("../../Assets/images/ins-1.jpg")} alt="" />
                    </a>
                  </li>
                  <li>
                    
                    <a href="javascript:void(0)">
                      <img src={require("../../Assets/images/ins-1.jpg")} alt="" />
                    </a>
                  </li>
                  <li>
                    
                    <a href="javascript:void(0)">
                      <img src={require("../../Assets/images/ins-1.jpg")} alt="" />
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    
                    <a href="javascript:void(0)">
                      <img src={require("../../Assets/images/ins-1.jpg")} alt="" />
                    </a>
                  </li>
                  <li>
                    
                    <a href="javascript:void(0)">
                      <img src={require("../../Assets/images/ins-1.jpg")} alt="" />
                    </a>
                  </li>
                  <li>
                    
                    <a href="javascript:void(0)">
                      <img src={require("../../Assets/images/ins-1.jpg")} alt="" />
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
                  © Copyright <span id="year"></span> All rights reserved  <span className="color">Trans23</span>.
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

export default Main;
