const Home = () => {
  return (
    <div className="Home-product">
      {/* <a href="">
        <div>
          <img
            className="product_home-img"
            src="https://media.canifa.com/Simiconnector/BannerSlider/m/d/mddt_topbanner_desktop-13.01.25.webp"
            alt=""
          />
        </div>
      </a> */}

      {/* sản phẩm  */}
      <div className="container">
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
      </div>
    </div>
  );
};

export default Home;
