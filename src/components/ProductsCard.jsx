import React from "react";

const ProductsCard = ({ filteredProducts }) => {
  return (
    <div>
      {filteredProducts &&
        filteredProducts.map((item) => (
          <>
            <div>{item.title}</div>
            <img src={item.image} alt="" />
          </>
        ))}
    </div>
  );
};

export default ProductsCard;
