import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/product.json";
import "./ProductList.css";

function ProductList() {
  return (
    <div className=".product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;