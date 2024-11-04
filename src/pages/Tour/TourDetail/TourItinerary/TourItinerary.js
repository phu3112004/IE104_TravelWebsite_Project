import classNames from "classnames/bind";
import styles from "./TourItinerary.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const cx = classNames.bind(styles);

function TourItinerary({ day }) {
  const [details, setDetails] = useState(false);
  const handleDetails = () => {
    setDetails(!details);
  };
  return (
    <div className={cx("details-itinerary-day")}>
      <button onClick={handleDetails}>
        Day {day}{" "}
        <FontAwesomeIcon
          className={cx("details-itinerary-day-icon")}
          icon={details ? faChevronUp : faChevronDown}
        />
      </button>
      {details && (
        <div className={cx("details-itinerary-day-details")}>
          <p>
            On the morning of your trip, you’ll meet your trip leader and fellow
            travelers before a 3-mile hike to the river. After a safety briefing
            and gear fitting, you’ll hit the water, tackling exciting rapids
            like Rock Garden, Nemesis, Sunderlands Chute, and Ram’s Head. At
            midday, enjoy a picnic on a sandy beach. Later, experience the
            thrill of Clavey Falls, a Class IV+ rapid with stair-step drops. In
            calmer stretches, take a refreshing swim. By afternoon, you’ll
            arrive at camp, unwind, and enjoy dinner and conversation by the
            campfire or stargazing under the open sky.
          </p>
        </div>
      )}
    </div>
  );
}

export default TourItinerary;
