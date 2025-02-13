import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderLogo = () => {
  // Search
  const [search, setSearch] = useState(""); // lưu giá trị tìm kiếm
  const navigate = useNavigate(); // hook điều hướng

  // Hàm xử lý tìm kiếm
  const handleSearch = () => {
    const query = search.toLowerCase().trim(); // chuẩn hóa từ khóa tìm kiếm
    if (query === "nam") {
      navigate("/nam");
    } else if (query === "nu" || query === "nữ") {
      navigate("/nu");
    } else if (query === "betrai" || query === "bétrai") {
      navigate("/betrai");
    } else {
      navigate("/not-found"); // nếu không tìm thấy thì điều hướng đến trang not-found
    }
  };

  // khi click vào ảnh sẽ điều hướng về trang chủ
  const handleImageClick = () => {
    navigate("/"); // Điều hướng về trang chủ
  };

  return (
    <>
      <header>
        <img
          src="https://media.canifa.com/popup/f/r/freeship_fixtop_desktop-08.01.webp"
          width={1500}
          height={40}
          alt=""
        />
        <div className="nav_Bar">
          <h1 className="nav_Bar-title">
            ĐỔI HÀNG MIỄN PHÍ - TẠI TẤT CẢ CỬA HÀNG TRONG 30 NGÀY
          </h1>

          {/* click vào ảnh logo */}
          <div className="navigation">
            <img
              onClick={handleImageClick}
              className="navLogo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR61RKs3BBEsYBIxnggE37Aegw1s9EDd14E9A&s"
              alt=""
            />
            <ul>
              <li onClick={() => navigate("nam")}>Nam</li>
              <li onClick={() => navigate("nu")}>Nữ</li>
              <li onClick={() => navigate("be gai")}>Bé Gái</li>
              <li onClick={() => navigate("be trai")}>Bé Trai</li>
              <li onClick={() => handleImageClick}>Canifa</li>
            </ul>

            {/* Search */}
            <div className="nav_search">
              <input
                className="nav_search-input"
                type="text"
                placeholder="Bạn tìm gì..."
                onChange={(e) => setSearch(e.target.value)} // lưu giá trị tìm kiếm
              />
              <img
                onClick={handleSearch} // gọi hàm handleSearch khi nhấn vào icon tìm kiếm
                className="navIcon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1200px-Search_Icon.svg.png"
                alt=""
              />
            </div>

            {/* cart */}
            <div className="nav_Car">
              <img
                className="car_img"
                src="https://img.pikbest.com/png-images/shopping-cart-icon---vector-template---transparent-background_1794341.png!sw800"
                alt=""
              />
              <p>Giỏ hàng</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderLogo;

// cach 2 tham khao
// import React, { useState } from "react";
// const HeaderLogo = () => {
//   const [searchTerm, setSearchTerm] = useState(""); // Lưu trữ từ khóa tìm kiếm

//   // Danh sách sản phẩm mẫu
//   const products = [
//     { id: 1, name: "Áo sơ mi nam", category: "nam" },
//     { id: 2, name: "Áo phông nữ", category: "nu" },
//     { id: 3, name: "Quần jean nam", category: "nam" },
//     { id: 4, name: "Đầm nữ", category: "nu" },
//     { id: 5, name: "Áo khoác bé trai", category: "betrai" },
//   ];

//   // Lọc sản phẩm dựa trên từ khóa tìm kiếm
//   const filteredProducts = products.filter((product) =>
//     product.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value); // Cập nhật từ khóa tìm kiếm
//   };

//   return (
//     <div>
//       {/* Thanh tìm kiếm */}
//       <input
//         type="text"
//         placeholder="Tìm kiếm sản phẩm..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />

//       {/* Hiển thị danh sách sản phẩm đã lọc */}
//       <div className="product-list">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <div key={product.id} className="product-item">
//               <h3>{product.name}</h3>
//               <p>Loại: {product.category}</p>
//             </div>
//           ))
//         ) : (
//           <p>Không tìm thấy sản phẩm nào</p>
//         )}
//       </div>
//     </div>
//   );
// };
// export default HeaderLogo;
