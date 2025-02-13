import React, { useState } from "react";

const ProductItem = () => {
  const [cart, setCart] = useState([]);

  const handleProduct = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const products = [
    {
      id: 1,
      img: "https://canifa.com/img/500/750/resize/6/t/6tw23w005-sk010-2.webp",
      name: "Áo nỉ nữ",
      price: 79000,
      oldPrice: 249000,
    },
    {
      id: 2,
      img: "https://canifa.com/img/500/750/resize/2/b/2bp24w014-se002-thumb.webp",
      name: "Quần nỉ nam",
      price: 199000,
      oldPrice: 249000,
    },
    {
      id: 3,
      img: "https://canifa.com/img/500/750/resize/2/t/2tw24w014-sa251-128-1-u.webp",
      name: "Áo nỉ nam",
      price: 200000,
      oldPrice: 249000,
    },
    {
      id: 4,
      img: "https://canifa.com/img/500/750/resize/6/b/6bp24w008-sa871-thumb.webp",
      name: "Quần gió",
      price: 69000,
      oldPrice: 249000,
    },
    {
      id: 5,
      img: "https://canifa.com/img/500/750/resize/2/b/2bp24w013-sb399-thumb.webp",
      name: "Quần nỉ nam",
      price: 69000,
      oldPrice: 249000,
    },
  ];

  return (
    <>
      <div className="product_home-img-big">
        <div className="product_home-img">
          <a href="#">
            <img
              className="product_home-img"
              src="https://media.canifa.com/Simiconnector/1.DoNi_blockhomepage_desktop-02.12.webp"
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
