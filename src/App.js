import Home from "./Component/Home";
import HeaderLogo from "./Component/Header_logo";
import Body from "./Component/Body";
import Nam from "./Component/Nam";
import Nu from "./Component/Nu";
import Betrai from "./Component/Betrai";
import Footer from "./Component/Footer";
import SearchResult from "./Component/SearchResult";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// car

// cài slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Pay from "./Component/Pay";
import Vouchers from "./Component/Vouchers";
import ProductList from "./Component/ProductList";
import Blog from "./Component/Blog";
import Form from "./Component/Form";

function App() {
  // slider
  const ImageSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <Slider {...settings}>
        <div>
          <img
            src="	https://media.canifa.com/Simiconnector/BannerSlider/c/a/canifas_topbanner_desktop-ud-04jan.webp"
            alt="Slide 1"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src="https://media.canifa.com/Simiconnector/BannerSlider/t/a/tattohe-banner_web.webp"
            alt="Slide 2"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src="https://media.canifa.com/Simiconnector/BannerSlider/a/o/aolen_topbanner_desktop-13.11.webp"
            alt="Slide 3"
            style={{ width: "100%" }}
          />
        </div>
      </Slider>
    );
  };

  // search (nam)

  return (
    <div>
      <Router>
        <HeaderLogo />
        <ImageSlider />
        <Home />
        <Pay />
        <Vouchers />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/nam" element={<Nam />} />
          <Route path="/nu" element={<Nu />} />
          <Route path="/betrai" element={<Betrai />} />
        </Routes>

        <ProductList />
        <Blog />
        <Form />
        <Footer />
      </Router>
    </div>
  );
}
export default App;
