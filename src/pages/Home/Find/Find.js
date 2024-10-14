import React from "react";
import classNames from "classnames/bind";
import styles from "./Find.module.scss";
import { destinationData, adventureData } from "../../../config/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Find() {
  return (
    <div className={cx("find-container")}>
      <div className={cx("find-content")}>
        <label htmlFor="find-destination" className={cx("find-title")}>
          Destination
        </label>
        <select id="find-destination" className={cx("find-dropdown")}>
          {destinationData.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className={cx("find-content")}>
        <label htmlFor="find-activity" className={cx("find-title")}>
          Activity
        </label>
        <select id="find-activity" className={cx("find-dropdown")}>
          {adventureData.map((item, index) => (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className={cx("find-content")}>
        <label htmlFor="find-range" className={cx("find-title")}>
          Range
        </label>
        <select id="find-range" className={cx("find-dropdown")}>
          <option value="1day">1 Day</option>
          <option value="23days">2-3 Days</option>
          <option value="47days">4-7 Days</option>
          <option value="8days">8+ Days</option>
        </select>
      </div>

      <div className={cx("find-content")}>
        <label htmlFor="find-level" className={cx("find-title")}>
          level
        </label>
        <select id="find-level" className={cx("find-dropdown")}>
          <option value="Easy">Easy</option>
          <option value="Moderate">Moderate</option>
          <option value="Challenging">Challenging</option>
        </select>
      </div>

      <div className={cx("find-content")}>
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </div>
  );
}

export default Find;
