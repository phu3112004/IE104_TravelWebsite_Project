import classNames from "classnames/bind";
import styles from "./Adventure.module.scss";
import { adventureData } from "../../../config/data/tourData";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Adventure() {
  return (
    <div className={cx("adventure-page")}>
      <div className={cx("adventure-slide")}>
        <img
          src="https://vietnam.travel/sites/default/files/styles/top_banner/public/2021-12/782A2680_resize_1.jpg?itok=M2AC24lc"
          alt=""
        />
        <p>Adventure</p>
      </div>
      <div className={cx("adventure-blog")}>
        <h2>Why Adventure?</h2>
        <p>
          Adventure has always captivated the human spirit, driving individuals
          to explore the unknown, push boundaries, and discover new horizons.
          This innate desire to seek out new experiences and challenge oneself
          is more than just a thrilling pursuit; it is a fundamental aspect of
          human nature. The allure of adventure lies in its promise of
          discovery, personal growth, and the profound sense of accomplishment
          that comes from overcoming obstacles.
          <br />
          <br />
          The unknown holds a unique appeal because it represents potential and
          possibility. It challenges our understanding of the world and pushes
          us to question what lies beyond our current experiences. The thrill of
          stepping into the unknown is a powerful motivator, compelling
          individuals to embark on journeys that can be both physically and
          mentally demanding.
          <br />
          <br />
          Adventure is a timeless and essential aspect of the human experience.
          It drives us to explore the unknown, challenge ourselves, and grow
          both personally and collectively. Whether through grand explorations
          or everyday adventures, the pursuit of new experiences enriches our
          lives and connects us to a larger narrative of discovery and
          achievement. In embracing adventure, we honor the spirit of
          exploration that defines us as human beings and continue to push the
          boundaries of what is possible.
          <br />
          <br />
        </p>
      </div>
      <div className={cx("adventure-title")}>
        <div className={cx("line")}></div>
        <h1>Adventure</h1>
        <div className={cx("line")}></div>
      </div>
      <div className={cx("adventure-all")}>
        {adventureData.map((item, index) => (
          <Link
            key={index}
            to={`/adventure/${item.name}`}
            className={cx("adventure-all-container")}
          >
            <img src={item.image} alt={item.name} />
            <div className={cx("adventure-all-title")}>
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className={cx("adventure-page-footer")}>
        <img
          src="https://media.cntraveler.com/photos/64879b50add73e0d14b17f9e/16:9/w_2580,c_limit/Most-Adventurous-things-to-do-in-your-lifetime-(update)_timur-garifov-sisZWCDkmwA-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Adventure;
