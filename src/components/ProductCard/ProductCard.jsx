import React from "react";
import "./ProductCard.css";
import { images } from "../../assets/images/images";

function ProductCard({ product }) {
  return (
    <div className="stylo-card">
      <img 
        src={images[product.image]}
        alt={product.name} 
      />
      <h2>{product.name}</h2>
      <p>{product.descripcion}</p>
      <p><strong>Categoria:</strong> {product.category}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
    </div>
  );
}

export default ProductCard;
