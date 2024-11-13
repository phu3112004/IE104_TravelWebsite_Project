import React, { useState, useEffect } from "react";
import { hotels_link } from "../../config/api_link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./HotelItem.module.scss";
const cx = classNames.bind(styles);
function HotelItem() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(hotels_link);
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className={cx("hotel-item-container")}>
          <div className={cx("hotel-item-img")}>
            <img src={item.image} alt={item.name} />
          </div>
          <div className={cx("hotel-item-content")}>
            <p className={cx("hotel-item-tag")}>{item.type}</p>
            <Link to={`/hotel/${item.id}`} className={cx("hotel-item-title")}>
              {item.name}
            </Link>
            <div className={cx("hotel-item-rate")}>
              <p className={cx("hotel-item-rating")}>{item.rating}</p>
              <FontAwesomeIcon
                icon={faStar}
                className={cx("hotel-item-rate-icon")}
              />
              <p>{item.rate}</p>
              <p>({item.reviews})</p>
            </div>
            <div className={cx("hotel-item-info")}>
              <div className={cx("hotel-item-info-title")}>Location:</div>
              <p>{item.location}</p>
            </div>
            <div className={cx("hotel-item-info")}>
              <div className={cx("hotel-item-info-title")}>Level:</div>
              <p>{item.level}</p>
            </div>
            <div className={cx("hotel-item-price")}>
              <div className={cx("hotel-item-price-title")}>
                <p>From</p>
                <h2>${item.price_per_night}</h2>
                <p> per night</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default HotelItem;
