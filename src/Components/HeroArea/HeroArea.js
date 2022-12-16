import React from "react";
import { GoPackage } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";

import { FaUserNurse } from "react-icons/fa";
const HeroArea = () => {
  return (
    <div>
      {/* <!--Main Slider--> */}
      <section className="main-slider">
        <div className="main-slider-carousel owl-carousel owl-theme">
          <div
            className="slide"
            style={{ backgroundImage: "url(images/main-slider-1.jpg)" }}
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
            style={{ backgroundImage: "url(images/main-slider-2.jpg)" }}
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
            style={{ backgroundImage: "url(images/main-slider-3.jpg)" }}
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
                        <span>
                          {" "}
                          <FaUserNurse className="icon fi" />
                        </span>
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
                      <span>
                        {" "}
                        <BsArrowRight className="icon" />
                      </span>
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
                        <span>
                          {" "}
                          <GoPackage className="icon fi" />{" "}
                        </span>
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
                      <span>
                        {" "}
                        <BsArrowRight className="icon" />
                      </span>
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
                        <span>
                          {" "}
                          <TbTruckDelivery className="icon fi" />{" "}
                        </span>
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
                      <span>
                        {" "}
                        <BsArrowRight className="icon" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--End Our Features Sec--> */}
    </div>
  );
};

export default HeroArea;
