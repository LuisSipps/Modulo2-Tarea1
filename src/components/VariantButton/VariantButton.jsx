import "./VariantButton.css";

function VariantButton({ variant, isSelected, onSelect }) {
  return (
    <button
      className={`variant-button ${isSelected ? "active" : ""}`}
      onClick={() => onSelect(variant)}
    >
      {variant.color}
    </button>
  );
}

export default VariantButton;
