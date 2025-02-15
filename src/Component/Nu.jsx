const Nu = () => {
  return (
    <div className="products">
      <div className="product_new">
        <h1>THỜI TRANG NỮ </h1>
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
    </div>
  );
};
export default Nu;

// api
// import React, { useEffect, useState } from "react";

// const Nu = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Thay API_URL bằng endpoint chính xác của API thời trang mà bạn dùng
//   const API_URL = "/open-api/openapi-business-backend/product/query";

//   useEffect(() => {
//     // Gọi API khi component "Nữ" được render
//     fetch(API_URL, {
//       // method: "GET",
//       // headers: {
//       //   "X-RapidAPI-Key": "39ae16f1cbmsh24d2d5d15038a89p1e0496jsne161cb4bd352", // Thay bằng RapidAPI Key của bạn
//       //   "X-RapidAPI-Host":
//       //     "luminous-pjs-thoi-trang-ngu-sang-trong-va-tien-n-7hchea.p.rapidapi.com",
//       // },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data); // Kiểm tra cấu trúc dữ liệu API
//         setData(data); // Cập nhật dữ liệu
//         setLoading(false); // Dừng trạng thái loading
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <div>Đang tải dữ liệu...</div>;
//   }

//   return (
//     <div className="products-nu">
//       <h1>Sản phẩm Nữ</h1>
//       <div className="product-list-nu">
//         {data && data.length > 0 ? (
//           data.map((product) => (
//             <div key={product.code} className="product-item-nu">
//               <img src={product.msg} alt={product.info} />
//               <h2>{product.name}</h2>
//               <p>{product.price} VND</p>
//             </div>
//           ))
//         ) : (
//           <p>Không có sản phẩm nào.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Nu;
