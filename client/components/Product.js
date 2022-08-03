import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="product">
      <Link to={`/products/${product.id}`}>
        <h3>{product.name}</h3>
      </Link>
      <h3>{product.unitPrice}</h3>
      <img src={product.imageUrl} />
    </div>
  );
};

export default Product;
