const Betrai = () => {
  return (
    <div className="products">
      <div className="product_new">
        <h1>BÉ TRAI </h1>
        <div className="product_new-nam">
          <a href="">
            <div className="product_new">
              <img
                className="product_new-img"
                src="https://canifa.com/img/500/750/resize/2/o/2ot24w016-se249-thumb.webp"
                alt=""
              />
            </div>
          </a>

          <a href="">
            <div>
              <img
                className="product_new-img"
                src="https://canifa.com/img/500/750/resize/2/o/2ot24w016-se249-thumb.webp"
                alt=""
              />
            </div>
          </a>

          <a href="">
            <div>
              <img
                className="product_new-img"
                src="https://canifa.com/img/500/750/resize/2/o/2ot24w016-se249-thumb.webp"
                alt=""
              />
            </div>
          </a>

          <a href="">
            <div>
              <img
                className="product_new-img"
                src="https://canifa.com/img/500/750/resize/2/o/2ot24w016-se249-thumb.webp"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>

      <img
        className="products-img-big"
        src="https://media.canifa.com/Simiconnector/BannerSlider/s/s/ssnm_topbanner_desktop-07.01.webp"
        alt=""
      />
    </div>
  );
};
export default Betrai;

// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   const [searchTerm, setSearchTerm] = useState("");

//   // Hàm để thực hiện tìm kiếm
//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   return (
//     <div>
//       <Router>
//         <HeaderLogo />

//         {/* Nút tìm kiếm */}
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Tìm kiếm..."
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <button onClick={() => handleSearch(searchTerm)}>Tìm kiếm</button>
//         </div>

//         {/* Nếu tìm kiếm là "Betrai", chỉ hiển thị component Betrai */}
//         {searchTerm === "Betrai" ? (
//           <Betrai />
//         ) : (
//           <>
//             {/* Các thành phần khác */}
//             <ImageSlider />
//             <Pay />
//             <Vouchers />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/nam" element={<Nam />} />
//               <Route path="/nu" element={<Nu />} />
//               <Route path="/betrai" element={<Betrai />} />
//             </Routes>
//             <ProductItem />
//             <ProductList />
//             <Blog />
//             <Form />
//           </>
//         )}

//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;
