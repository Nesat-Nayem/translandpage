import React from "react";

const About = () => {
  return (
    <div>
      {/* <!--Start Our About Sec--> */}
      <section id="about" className="introduction-section">
        <div className="container">
          <div className="row clearfix">
            {/* <!-- Image Column --> */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image">
                  <img
                    src={require("../../Assets/images/about-img.jpg")}
                    alt=""
                  />
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
    </div>
  );
};

export default About;
