import React, { useState, useEffect } from "react";
import { tours_link } from "../../config/api_link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import styles from "./TourItem.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function TourItem({ start, limit }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  var api = tours_link;
  useEffect(() => {
    api = api + "?" + `_start=${start}&_limit=${limit}`;
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [start, limit]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {data.map((item, index) => (
        <div key={index} className={cx("tour-item-container")}>
          <div className={cx("tour-item-img")}>
            <img src={item.image} alt={item.name} />
          </div>
          <div className={cx("tour-item-content")}>
            <p className={cx("tour-item-tag")}>{item.type}</p>
            <a href="#" className={cx("tour-item-title")}>
              {item.name}
            </a>
            <div className={cx("tour-item-rate")}>
              <p className={cx("tour-item-day")}>{item.day}</p>
              <FontAwesomeIcon
                icon={faStar}
                className={cx("tour-item-rate-icon")}
              />
              <p>{item.rate}</p>
              <p>({item.reviews})</p>
            </div>
            <div className={cx("tour-item-info")}>
              <div className={cx("tour-item-info-title")}>Location:</div>
              <p>{item.location}</p>
            </div>
            <div className={cx("tour-item-info")}>
              <div className={cx("tour-item-info-title")}>Level:</div>
              <p>{item.level}</p>
            </div>
            <div className={cx("tour-item-info")}>
              <div className={cx("tour-item-info-title")}>Minimum Age:</div>
              <p>{item.age}</p>
            </div>
            <div className={cx("tour-item-price")}>
              <div className={cx("tour-item-price-title")}>
                <p>From</p>
                <h2>${item.price}</h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TourItem;
