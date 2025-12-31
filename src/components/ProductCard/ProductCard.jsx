import { useState } from "react";
import "./ProductCard.css";
import { images } from "../../assets/images/images";
import VariantButton from "../VariantButton/VariantButton.jsx";

function ProductCard({ product }) {
  const hasVariants = Array.isArray(product.variants) && product.variants.length > 0;

  const [selectedVariant, setSelectedVariant] = useState(
    hasVariants ? product.variants[0] : null
  );

  const imageSrc = hasVariants
    ? images[selectedVariant.image]
    : images[product.image];

  return (
    <div className="stylo-card">
      <img
        src={imageSrc}
        alt={product.name}
        className="product-image"
      />

      <h2>{product.name}</h2>
      <p>{product.descripcion}</p>
      <p><strong>Categoría:</strong> {product.category}</p>
      <p><strong>Precio:</strong> ${product.price}</p>

      {hasVariants && (
        <div className="variant-buttons">
          {product.variants.map((variant) => (
                        
            <VariantButton
              key={variant.color}
              variant={variant}
              isSelected={selectedVariant.color === variant.color}
              onSelect={setSelectedVariant}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductCard;
