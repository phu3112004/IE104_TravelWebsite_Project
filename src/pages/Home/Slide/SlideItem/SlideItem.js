import classNames from "classnames/bind";
import styles from "../Slide.module.scss";

const cx = classNames.bind(styles);
function SlideItem({ item }) {
  return (
    <div
      className={cx("slide-item")}
      style={{
        backgroundImage: `url(${item.image})`,
      }}
    >
      <div className={cx("content")}>
        <div className={cx("name")}>{item.name}</div>
        <div className={cx("des")}>{item.des}</div>
        <a href="#">See More</a>
      </div>
    </div>
  );
}

export default SlideItem;
