import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Scenery.module.scss";
import { cityData } from "../../../config/data";

const cx = classNames.bind(styles);

function Scenery() {
  return (
    <div className={cx("scenery")}>
      <h1 className={cx("title")}>KHÁM PHÁ NHIỀU PHONG CẢNH HẤP DẪN</h1>
      <div className={cx("cards")}>
        {cityData.map((item, index) => (
          <div key={index} className={cx("card")}>
            <img
              src={item.image}
              alt={item.city}
              className={cx("card__image")}
            />
            <div className={cx("card__content")}>
              <h2 className={cx("card__title")}>{item.city}</h2>
              <p className={cx("card__description")}>{item.location}</p>
              <Link to={`/scenery/${item.city}`} className={cx("card__link")}>
                KHÁM PHÁ NGAY
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scenery;
