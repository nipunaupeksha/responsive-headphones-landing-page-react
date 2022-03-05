import React from "react";
import { images } from "../../constants";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterLine,
  RiSendPlaneLine,
} from "react-icons/ri";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="footer section">
      <div class="footer__container container grid">
        <a href="#" class="footer__logo">
          <img src={images.logo} alt="" />
        </a>

        <div class="footer__content">
          <h3 class="footer__title">Products</h3>

          <ul class="footer__links">
            <li>
              <a href="#" class="footer__link">
                Headphones
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Earphones
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Earbuds
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Accesories
              </a>
            </li>
          </ul>
        </div>

        <div class="footer__content">
          <h3 class="footer__title">Support</h3>

          <ul class="footer__links">
            <li>
              <a href="#" class="footer__link">
                Product help
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Register
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Updates
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Provides
              </a>
            </li>
          </ul>
        </div>

        <div class="footer__content">
          <form action="" class="footer__form">
            <input type="email" placeholder="Email" class="footer__input" />
            <button class="button button--flex">
              <RiSendPlaneLine className="button__icon" /> Subscribe
            </button>
          </form>

          <div class="footer__social">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="footer__social-link"
            >
              <RiFacebookFill />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              class="footer__social-link"
            >
              <RiInstagramLine />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              class="footer__social-link"
            >
              <RiTwitterLine />
            </a>
          </div>
        </div>
      </div>

      <p class="footer__copy">
        <a
          href="https://www.youtube.com/channel/UCrMb3gqHopBz1tggE2QiNBA"
          target="_blank"
          class="footer__copy-link"
        >
          &#169; League of Coding. All right reserved
        </a>
      </p>
    </footer>
  );
};

export default Footer;
