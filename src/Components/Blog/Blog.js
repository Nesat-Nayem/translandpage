import React from "react";

const Blog = () => {
  return (
    <div>
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
                        <img
                          src={require("../../Assets/images/blog-img1.jpg")}
                          alt=""
                        />
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
                        <img
                          src={require("../../Assets/images/blog-img2.jpg")}
                          alt=""
                        />
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
                        <img
                          src={require("../../Assets/images/blog-img3.jpg")}
                          alt=""
                        />
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
                        <img
                          src={require("../../Assets/images/blog-img4.jpg")}
                          alt=""
                        />
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
    </div>
  );
};

export default Blog;
