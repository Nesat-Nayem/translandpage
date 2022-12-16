import React from "react";

const Contract = () => {
  return (
    <div>
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
                          <option value="">Services</option>
                          <option>Movers & Packers</option>
                          <option>Storage</option>
                          <option>Courier</option>
                          <option>Vehicle Transport</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mrb-30">
                        <input
                          type="text"
                          placeholder="City "
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mrb-30">
                        <input
                          type="text"
                          placeholder="State"
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
    </div>
  );
};

export default Contract;
