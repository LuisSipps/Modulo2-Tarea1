import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/product.json";
import "./ProductList.css";

function ProductList({ products, searchTerm }) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-container">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;