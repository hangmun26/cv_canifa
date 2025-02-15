// cài slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import HeaderLogo from "./Header_logo";
import Body from "./Body";
import Nam from "./Nam";
import Nu from "./Nu";
import Betrai from "./Betrai";
import Footer from "./Footer";
import SearchResult from "./SearchResult";

import Pay from "./Pay";
import Vouchers from "./Vouchers";
import ProductList from "./ProductList";
import Blog from "./Blog";
import Form from "./Form";
import ApiFashion from "./ApiFashion";
import ApiMens_clothing from "./ApiMen_clothing";

const Home = () => {
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
  return (
    <div className="Home-product">
      <HeaderLogo />
      <ImageSlider />
      <ApiFashion />
      <ApiMens_clothing />
      <Pay />
      <Vouchers />

      <ProductList />
      <Blog />
      <Form />
      <Footer />

      {/* sản phẩm  */}
      {/* <div className="container">
        <h1 className="container_title">Sản phẩm mới</h1>
        <div className="container-list">
          <div className="container-product_new">
            <a href="">
              <div>
                <img
                  src="https://media.canifa.com/Simiconnector/Nu_SPmoi-19.12.webp"
                  alt=""
                />
              </div>
            </a>
          </div>

          <div className="container-product_new">
            <a href="">
              <div>
                <img
                  src="https://media.canifa.com/Simiconnector/Nam_SPmoi-19.12.webp"
                  alt=""
                />
              </div>
            </a>
          </div>

          <div className="container-product_new">
            <a href="">
              <div>
                <img
                  src="https://media.canifa.com/Simiconnector/Boy_SPmoi-19.12.webp"
                  alt=""
                />
              </div>
            </a>
          </div>

          <div className="container-product_new">
            <a href="">
              <div>
                <img
                  src="https://media.canifa.com/Simiconnector/Girl_SPmoi-19.12.webp"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
