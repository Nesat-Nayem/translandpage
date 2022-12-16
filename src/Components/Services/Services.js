import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { FaWarehouse } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiShipBow } from "react-icons/gi";
import { FaParachuteBox } from "react-icons/fa";
const Services = () => {
  return (
    <div>
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
                  <FaShippingFast
                    style={{ fontSize: "60px", margin: 0, color: " #fd5e16" }}
                  />
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
                  <FiGift
                    style={{ fontSize: "60px", margin: 0, color: " #fd5e16" }}
                  />
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
                  <FaWarehouse
                    style={{ fontSize: "60px", margin: 0, color: " #fd5e16" }}
                  />
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
                  <GiCommercialAirplane
                    style={{ fontSize: "60px", margin: 0, color: " #fd5e16" }}
                  />
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
                  <GiShipBow
                    style={{ fontSize: "60px", margin: 0, color: " #fd5e16" }}
                  />
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
                  <FaParachuteBox
                    style={{ fontSize: "60px", margin: 0, color: " #fd5e16" }}
                  />
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
    </div>
  );
};

export default Services;
