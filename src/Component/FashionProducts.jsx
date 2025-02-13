import { useState, useEffect } from "react";

const FashionProducts = () => {
  const [products, setProducts] = useState([]); // Khởi tạo mảng rỗng để tránh undefined

  useEffect(() => {
    const fetchProducts = async () => {
      const apiKey = "39ae16f1cbmsh24d2d5d15038a89p1e0496jsne161cb4bd352"; // API key từ RapidAPI
      const apiUrl = "https://shein.p.rapidapi.com/products/list"; // URL của API Shein trên RapidAPI

      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": apiKey,
            "X-RapidAPI-Host": "shein.p.rapidapi.com",
          },
        });

        const data = await response.json();
        // Kiểm tra nếu `products` tồn tại trong data trước khi cập nhật state
        if (data && data.products) {
          setProducts(data.products);
        } else {
          console.error("Products not found in API response");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Fashion Products</h1>
      <ul>
        {/* Kiểm tra nếu `products` là mảng trước khi render */}
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.salePrice} đ
            </li>
          ))
        ) : (
          <p>No products available</p>
        )}
      </ul>
    </div>
  );
};

export default FashionProducts;
