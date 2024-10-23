import TourItem from "../../components/TourItem";
import classNames from "classnames/bind";
import styles from "./Tour.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function Tour() {
  const [limit, setLimit] = useState(10);
  const clearAll = () => {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  const toggleDropdown = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display =
        element.style.display === "block" ? "none" : "block";
    }
  };

  const toggleAllCheckbox = (checkboxId, groupId) => {
    const groupElement = document.getElementById(groupId);
    const checkboxes = groupElement.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = document.getElementById(checkboxId).checked;
    });
  };

  return (
    <div className={cx("tours-page")}>
      <div className={cx("tours-filter-container")}>
        <button className={cx("tours-filter-clearall")} onClick={clearAll}>
          Clear All
        </button>

        <button
          className={cx("tours-filter-header")}
          onClick={() => toggleDropdown("trip-length")}
        >
          TRIP LENGTH <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <div id="trip-length" className={cx("tours-filter-content")}>
          <input
            type="checkbox"
            id="all-length"
            onClick={() => toggleAllCheckbox("all-length", "trip-length")}
          />
          <label htmlFor="all-length">All</label>
          <br />
          <input type="checkbox" id="half-day" />
          <label htmlFor="half-day">1/2 Day or 1 Day</label>
          <br />
          <input type="checkbox" id="2-3-days" />
          <label htmlFor="2-3-days">2-3 Days</label>
          <br />
          <input type="checkbox" id="4-7-days" />
          <label htmlFor="4-7-days">4-7 Days</label>
          <br />
          <input type="checkbox" id="8-days" />
          <label htmlFor="8-days">8+ Days</label>
        </div>

        <button
          className={cx("tours-filter-header")}
          onClick={() => toggleDropdown("destinations")}
        >
          DESTINATIONS <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <div id="destinations" className={cx("tours-filter-content")}>
          <input
            type="checkbox"
            id="all-destinations"
            onClick={() =>
              toggleAllCheckbox("all-destinations", "destinations")
            }
          />
          <label htmlFor="all-destinations">All</label>
          <br />
          <input type="checkbox" id="china" />
          <label htmlFor="china">China</label>
          <br />
          <input type="checkbox" id="korea" />
          <label htmlFor="korea">Korea</label>
          <br />
          <input type="checkbox" id="japan" />
          <label htmlFor="japan">Japan</label>
          <br />
          <input type="checkbox" id="france" />
          <label htmlFor="france">France</label>
          <br />
          <input type="checkbox" id="usa" />
          <label htmlFor="usa">USA</label>
          <br />
          <input type="checkbox" id="vietnam" />
          <label htmlFor="vietnam">Vietnam</label>
          <br />
        </div>

        <button
          className={cx("tours-filter-header")}
          onClick={() => toggleDropdown("activities")}
        >
          ACTIVITIES <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <div id="activities" className={cx("tours-filter-content")}>
          <input
            type="checkbox"
            id="all-activities"
            onClick={() => toggleAllCheckbox("all-activities", "activities")}
          />
          <label htmlFor="all-activities">All</label>
          <br />
          <input type="checkbox" id="camping" />
          <label htmlFor="camping">Camping</label>
          <br />
          <input type="checkbox" id="hiking" />
          <label htmlFor="hiking">Hiking</label>
          <br />
          <input type="checkbox" id="kayaking" />
          <label htmlFor="kayaking">Kayaking</label>
          <br />
          <input type="checkbox" id="rowing" />
          <label htmlFor="rowing">Rowing</label>
          <br />
          <input type="checkbox" id="multi-sport" />
          <label htmlFor="multi-sport">Multi-sport</label>
          <br />
          <input type="checkbox" id="whitewater-rafting" />
          <label htmlFor="whitewater-rafting">Whitewater Rafting</label>
          <br />
        </div>

        <button
          className={cx("tours-filter-header")}
          onClick={() => toggleDropdown("adventure-level")}
        >
          ADVENTURE LEVEL <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <div id="adventure-level" className={cx("tours-filter-content")}>
          <input
            type="checkbox"
            id="all-levels"
            onClick={() => toggleAllCheckbox("all-levels", "adventure-level")}
          />
          <label htmlFor="all-levels">All</label>
          <br />
          <input type="checkbox" id="easy" />
          <label htmlFor="easy">Easier</label>
          <br />
          <input type="checkbox" id="moderate" />
          <label htmlFor="moderate">Moderate</label>
          <br />
          <input type="checkbox" id="challenging" />
          <label htmlFor="challenging">Challenging</label>
          <br />
        </div>

        <button
          className={cx("tours-filter-header")}
          onClick={() => toggleDropdown("minimum-age")}
        >
          MINIMUM AGE <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <div id="minimum-age" className={cx("tours-filter-content")}>
          <input
            type="checkbox"
            id="all-ages"
            onClick={() => toggleAllCheckbox("all-ages", "minimum-age")}
          />
          <label htmlFor="all-ages">All</label>
          <br />
          <input type="checkbox" id="8" />
          <label htmlFor="8">8</label>
          <br />
          <input type="checkbox" id="12" />
          <label htmlFor="12">12</label>
          <br />
          <input type="checkbox" id="16" />
          <label htmlFor="16">16</label>
          <br />
          <input type="checkbox" id="18" />
          <label htmlFor="18">18</label>
          <br />
        </div>

        <button
          className={cx("tours-filter-header")}
          onClick={() => toggleDropdown("price-range")}
        >
          PRICE RANGE <FontAwesomeIcon icon={faChevronDown} />
        </button>
        <div id="price-range" className={cx("tours-filter-content")}>
          <input
            type="checkbox"
            id="all-prices"
            onClick={() => toggleAllCheckbox("all-prices", "price-range")}
          />
          <label htmlFor="all-prices">All</label>
          <br />
          <input type="checkbox" id="under-500" />
          <label htmlFor="under-500">{"< $500"}</label>
          <br />
          <input type="checkbox" id="500-1000" />
          <label htmlFor="500-1000">{"$500 - $1000"}</label>
          <br />
          <input type="checkbox" id="above-1000" />
          <label htmlFor="above-1000">{"> $1000"}</label>
          <br />
        </div>
      </div>
      <div className={cx("tours-all")}>
        <div className={cx("tours-all-area")}>
          <TourItem start={0} limit={limit} />
        </div>
        <div className={cx("tours-all-load-more")}>
          <button onClick={() => setLimit(limit + 10)}>Load more</button>
        </div>
      </div>
    </div>
  );
}

export default Tour;
