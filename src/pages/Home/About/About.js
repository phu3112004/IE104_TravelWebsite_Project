import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import styles from "./About.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function About() {
  return (
    <div className={cx("about-container")}>
      <div className={cx("about-img")}>
        <img
          src="https://yt3.googleusercontent.com/Wiae-RUD__56zcehfaIEPvO-hecPFk-DJ_3LjTMMrSvkJv5xSLo94qbxNNVPRi4IZ_yjBr4ELg=s900-c-k-c0x00ffffff-no-rj"
          alt="about"
        />
      </div>
      <div className={cx("about-des")}>
        <h2>
          Welcome to <br /> NPQ TRAVEL
        </h2>
        <p>
          From scenic road trips winding through breathtaking landscapes to
          hidden hiking gems off the beaten path, we've got you covered with a
          plethora of exciting destinations to explore. Our mission is to
          empower you with the knowledge and resources to travel with confidence
          and ease. At NPQ TRAVEL, we believe that the journey itself is as
          important as the destination. Let us be your trusted companion as you
          navigate the globe, uncovering hidden gems and creating unforgettable
          memories. So pack your bags, grab your camera, and join us on a
          journey of exploration and discovery.
        </p>
        <Link to="/about" className={cx("about-btn")}>
          ABOUT US
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
    </div>
  );
}

export default About;
