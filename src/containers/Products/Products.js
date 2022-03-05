import React from "react";
import { images } from "../../constants";
import "./Products.css";
import {ProductCard} from "../../components";

const Products = () => {
  return (
    <section class="products section" id="products">
      <h2 class="section__title section__title-gradient products__line">
        Choose <br /> Your Style
      </h2>
      <div class="products__container container grid">
        <ProductCard image={images.product1} title={"Black"} price={"$249"} />
        <ProductCard
          image={images.product2}
          title={"Red Black"}
          price={"$249"}
        />
        <ProductCard
          image={images.product3}
          title={"Night Black"}
          price={"$249"}
        />
        <ProductCard image={images.product4} title={"Blue"} price={"$249"} />
        <ProductCard
          image={images.product5}
          title={"Twilight Gray"}
          price={"$249"}
        />
      </div>
    </section>
  );
};

export default Products;
