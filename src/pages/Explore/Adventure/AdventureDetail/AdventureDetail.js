import { useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./AdventureDetail.module.scss";
import TourItem from "../../../../components/TourItem/TourItem";

const cx = classNames.bind(styles);

function AdventureDetail() {
  const { type } = useParams();
  return (
    <div className={cx("activities-page")}>
      <div className={cx("activities-slide")}>
        <img
          src="https://images.seattletimes.com/wp-content/uploads/2023/07/07112023_2_164522.jpg?d=2040x1359"
          alt=""
        />
        <div className={cx("activities-overlay")}></div>
        <h1>{type}</h1>
      </div>
      <div className={cx("activities-blog")}>
        <div className={cx("activities-blog-content")}>
          <h1>
            {type}
            <br />
            Trips With NPQ Travel Agency
          </h1>
          <p>
            NPQ helped pioneer whitewater rafting in the Western U.S. And since
            we first got started in 1969, we have guided{" "}
            <b>more than 500,000 guests</b> on rivers all over the world. Now,
            with more than <b>75 unique itineraries</b>, we offer travelers more
            whitewater rafting trips than any other outfitter on the planet. But
            it's not just about how long we've been in business, or the number
            of trips we offer. It's really about the NPQ experience.
            <br />
            <br />
            Whether it's a quick, one-day whitewater rafting trip, a week-long
            river trip, or an epic 18-day rafting expedition, we can guarantee a
            trip with OARS will end up being one of your most memorable
            vacations ever. Because, let’s be honest, we’re not talking about a
            trip to Disneyland here. River trips are the ultimate way to escape
            the grind, disconnect and spend quality time with friends or loved
            ones, or even make new lifelong friends. Not only that, there is no
            better way to experience some of the most scenic and remote
            wilderness areas in the world than from a raft, dory, inflatable
            kayak or stand up paddleboard.
          </p>
        </div>
        <div className={cx("activities-blog-img")}>
          <img
            src="https://www.exploregeorgia.org/sites/default/files/whitewater-rafting-north-georgia-credit-wanderdrone.jpg"
            alt=""
          />
        </div>
      </div>
      <div className={cx("activities-all")}>
        <div className={cx("activities-all-title")}>
          <p>Finding your Perfect trip</p>
          <h1>{type}</h1>
        </div>
        <div className={cx("activities-all-area")}>
          <TourItem query="type" queryContent={type} />
        </div>
      </div>
      <div className={cx("activities-page-footer")}>
        <img
          src="https://s2odesign.com/wp-content/uploads/2019/11/whitewater-explained.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default AdventureDetail;
