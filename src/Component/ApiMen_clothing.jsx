// import React, { useEffect } from "react";
// const ApiMens_clothing = () => {
//   const Api_URL = "https://dummyjson.com/mens-clothing";
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(Api_URL);
//         const data = await res.json();
//         console.log(data);
//       } catch (error) {
//         console.log("loi fetchdata ApiMens_clothing", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>mens</h1>
//     </div>
//   );
// };
// export default ApiMens_clothing;

import React, { useEffect } from "react";

const ApiMens_clothing = () => {
  const Api_URL = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(Api_URL); // Sửa fetchData thành fetch
        const data = await res.json();
        console.log(data); // Log đúng data từ API
      } catch (error) {
        console.log("Lỗi fetchData ApiMens_clothing:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Mens Clothing</h1>
    </div>
  );
};

export default ApiMens_clothing;
