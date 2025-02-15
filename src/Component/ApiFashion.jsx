import React, { useState, useEffect } from "react";

const ApiFashion = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data.products); // Dữ liệu trả về nằm trong mảng products
        setLoading(false);
        // console.log(apiUrl);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError("Failed to fetch data from API");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="ApiFashion">
      <h1 className="ApiFashion-title">Hàng mới về</h1>
      <ul className="ApiFashion-product">
        {products.map((product) => (
          <li key={product.id} className="ApiFashion-product-item">
            <h2 className="ApiFashion-title">{product.title}</h2>
            <p className="ApiFashion-price">Giá: ${product.price}</p>
            <img
              className="ApiFashion-img"
              src={product.thumbnail}
              alt={product.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiFashion;
