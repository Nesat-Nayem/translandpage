import React from "react";
import About from "../About/About";
import AppDownload from "../AppDownload/AppDownload";
import Blog from "../Blog/Blog";
import Contract from "../Contract/Contract";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeroArea from "../HeroArea/HeroArea";
import Plan from "../Plan/Plan";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Testmonials from "../Testmonials/Testmonials";

const Home = () => {
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

      <Header></Header>
      <HeroArea></HeroArea>
      <About></About>
      <Services></Services>
      <Team></Team>
      <AppDownload></AppDownload>

      <Testmonials></Testmonials>
      <Plan></Plan>

      <Contract></Contract>
      <Blog></Blog>

      <Footer></Footer>
    </div>
  );
};

export default Home;
