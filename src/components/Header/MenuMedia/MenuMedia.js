import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./MenuMedia.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function MenuMedia({ item, onUser }) {
  return (
    <a
      className={cx("nav-media-item")}
      href={item.href}
      target={item.target}
      onClick={item.name === "User" ? onUser : undefined}
    >
      <FontAwesomeIcon className={cx("nav-media-icon")} icon={item.icon} />
    </a>
  );
}

export default MenuMedia;
