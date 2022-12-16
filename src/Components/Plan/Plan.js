import React from "react";

const Plan = () => {
  return (
    <div>
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
    </div>
  );
};

export default Plan;
