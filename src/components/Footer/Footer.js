import { Link } from "react-router-dom";
import { logoWhite } from "../../images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import { menuMediaData } from "../../config";
import MenuMedia from "../Header/MenuMedia/MenuMedia";

import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("footer-container")}>
      <div className={cx("footer-media", "footer-item")}>
        <img src={logoWhite} alt="logo" />
        <div className={cx("footer-media-item")}>
          {menuMediaData.map((item, index) => {
            if (item.name !== "User" && item.name !== "Search")
              return <MenuMedia key={index} item={item} />;
          })}
        </div>
        <Link to="/contact" className={cx("contact-link")}>
          CONTACT US
        </Link>
      </div>
      <div className={cx("footer-link", "footer-item")}>
        <h3>QUICK LINKS</h3>
        <Link to="/adventure">Adventures </Link>
        <Link to="/hotel">Hotels</Link>
        <Link to="/destination">Destinations</Link>
        <Link to="/about">About us</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/destination/Vietnam">Dome tours</Link>
      </div>
      <div className={cx("footer-address", "footer-item")}>
        <h3>ADDRESS</h3>
        <p>
          <FontAwesomeIcon
            className={cx("footer-address-icon")}
            icon={faPhone}
          />
          +84 923 123
        </p>
        <p>
          <FontAwesomeIcon
            className={cx("footer-address-icon")}
            icon={faEnvelope}
          />
          npq@gm.uit.edu.vn
        </p>
        <p>
          <FontAwesomeIcon
            className={cx("footer-address-icon")}
            icon={faHome}
          />
          12/0 Duong So 1, Go Vap
        </p>
        <img
          src="https://remarkable-jelly-df2aaa.netlify.app/assest/img/da-thong-bao-bo-cong-thuong.png"
          alt="da thong bao bo cong thuong"
        />
      </div>
      <div className={cx("footer-email", "footer-item")}>
        <h3>GET EMAIL UPDATES</h3>
        <p>
          Sign up today for monthly giveaways, engaging stories & videos,
          special offers & more!
        </p>
        <input type="email" placeholder="email@examples.com" />
        <button>GET NEWSLETTER</button>
      </div>
    </div>
  );
}

export default Footer;
