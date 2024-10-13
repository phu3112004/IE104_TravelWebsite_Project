import styles from "./Header.module.scss";
import { useState } from "react";
import Form from "./Form";
import { logo } from "../../images";
import MenuItem from "./MenuItem";
import { menuData } from "../../config/menuData";
import { menuMediaData } from "../../config/menuMediaData";
import MenuMedia from "./MenuMedia/MenuMedia";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  function handleShowLogin() {
    setShowLogin(!showLogin);
  }
  return (
    <div className={cx("nav-container")}>
      <a href="index.html" className={cx("logo")}>
        <img src={logo} alt="logo" />
      </a>
      <ul className={cx("nav-items-container")}>
        {menuData.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
      <div className={cx("nav-media")}>
        {menuMediaData.map((item, index) => (
          <MenuMedia key={index} item={item} onUser={handleShowLogin} />
        ))}
        <Form onShow={handleShowLogin} isShow={showLogin} />
      </div>
    </div>
  );
}

export default Header;
