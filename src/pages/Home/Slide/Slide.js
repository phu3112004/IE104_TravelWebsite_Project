import classNames from "classnames/bind";
import styles from "./Slide.module.scss";
import SlideItem from "./SlideItem";
import { slideData } from "../../../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const cx = classNames.bind(styles);

function Slide() {
  const [slides, setSlides] = useState(slideData);

  const handleNextSlide = () => {
    var newSlides = [...slides];
    var firstSlide = newSlides.shift();
    newSlides.push(firstSlide);
    setSlides(newSlides);
  };
  const handlePrevSlide = () => {
    var newSlides = [...slides];
    var firstSlide = newSlides.pop();
    newSlides.unshift(firstSlide);
    setSlides(newSlides);
  };

  return (
    <div className={cx("slide-container")}>
      <div className={cx("slide")}>
        {slides.map((item, index) => (
          <SlideItem key={index} item={item} />
        ))}
      </div>
      <div className={cx("slide-button")}>
        <button className={cx("prev")} onClick={handlePrevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className={cx("next")} onClick={handleNextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default Slide;
