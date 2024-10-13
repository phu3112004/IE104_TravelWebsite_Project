import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./MenuItem.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function MenuItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleHover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li
      className={cx("menu-item")}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <a href={item.link || "#"} className={cx("nav-item")}>
        {item.title}
        {item.subMenu && (
          <FontAwesomeIcon
            icon={faChevronDown}
            className={cx("nav-item-icon")}
          />
        )}
      </a>
      {item.subMenu && isOpen && (
        <ul className={cx("sub-nav")}>
          {item.subMenu.map((subItem, index) => (
            <MenuItem key={index} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default MenuItem;
