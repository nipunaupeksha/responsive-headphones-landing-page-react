import React from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import "./ProductCard.css";

const ProductCard = ({ image, title, price }) => {
  return (
    <article class="products__card">
      <div class="products__content">
        <img src={image} alt="" class="products__img" />

        <h3 class="products__title">{title}</h3>
        <span class="products__price">{price}</span>

        <button class="button button--flex products__button">
          <RiShoppingBagLine className="button__icon" />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
