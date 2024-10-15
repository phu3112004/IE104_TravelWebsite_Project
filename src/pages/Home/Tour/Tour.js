import TourAdventure from "./TourAdventure";
import styles from "./Tour.module.scss";
import classNames from "classnames/bind";
import TourItems from "./TourItems/TourItems";
const cx = classNames.bind(styles);
function Tour() {
  return (
    <div className={cx("tour-container")}>
      <TourAdventure />
      <TourItems />
    </div>
  );
}

export default Tour;
