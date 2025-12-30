import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="stylo-card">
      <img 
        src={product.image} 
        alt={product.name} 
      />
      <h2 style={{ fontSize: "1.2rem" }}>{product.name}</h2>
      <p>{product.descripcion}</p>
      <p><strong>Categoria:</strong> {product.category}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
    </div>
  );
}

export default ProductCard;
