import React from "react";
import { images } from "../../constants";
import "./Sponsor.css";

const Sponsor = () => {
  return (
    <section className="sponsor section">
      <div className="sponsor__container container grid">
        <img src={images.sponsor1} alt="" className="sponsor__img" />
        <img src={images.sponsor2} alt="" className="sponsor__img" />
        <img src={images.sponsor3} alt="" className="sponsor__img" />
        <img src={images.sponsor4} alt="" className="sponsor__img" />
      </div>
    </section>
  );
};

export default Sponsor;
