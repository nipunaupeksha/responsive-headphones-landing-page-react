import React from "react";
import { images } from "../../constants";
import {RiInformationLine} from 'react-icons/ri';
import "./Case.css";

const Case = () => {
  return (
    <section className="case section grid" id="case">
      <h2 className="section__title section__title-gradient">Case</h2>

      <div className="case__container container grid">
        <div>
          <img src={images.casing} alt="" className="case__img" />
        </div>

        <div className="case__data">
          <p className="case__description">
            With a comfortable and adaptable case so that you can store it
            whenever you want, and keep your durability forever.
          </p>
          <a href="#" className="button button--flex">
            <RiInformationLine className="button__icon"/> More info
          </a>
        </div>
      </div>
    </section>
  );
};

export default Case;
