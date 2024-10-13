import React from "react";
import { IProduct } from "../../types/interfaces";
import "./ProductCard.css";

interface IProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
  return (
    <div className="ProductCard" key={product.id}>
      <img
        src={product.image}
        alt={`Bilde som representerer produktet ${product.title}`}
        className="ProductCard_image"
      />
      <h4 className="ProductCard_title">{product.title}</h4>
      <p className="ProductCard_description">{product.description}</p>
      <h4 className="ProductCard_price">${product.price}</h4>
      <div className="ProductCard_rating">
        {Array(5)
          .fill(0)
          .map((_, index) => {
            let starColoured = index + 1 < product.rating.count;
            return (
              <span
                key={index}
                className={`ProductCard_star ${
                  starColoured ? "ProductCard_star_filled" : ""
                }`}
              >
                ★
              </span>
            );
          })}
      </div>
      <button className="ProductCard_button">Til kurv</button>
    </div>
  );
};

export default ProductCard;
