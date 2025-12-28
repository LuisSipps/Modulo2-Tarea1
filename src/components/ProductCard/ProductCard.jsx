import React from "react";

function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      width: "200px",
      margin: "10px",
      textAlign: "center"
    }}>
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: "100%", borderRadius: "4px" }}
      />
      <h2 style={{ fontSize: "1.2rem" }}>{product.name}</h2>
      <p>{product.descripcion}</p>
      <p><strong>Categoria:</strong> {product.category}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
    </div>
  );
}

export default ProductCard;
