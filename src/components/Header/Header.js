import { useState } from "react";
import { logoBlack } from "../../images";
import { menuData, menuMediaData } from "../../config/data";
import { Link } from "react-router-dom";
import MenuMedia from "./MenuMedia/MenuMedia";
import MenuItem from "./MenuItem";
import Form from "./Form";
import Search from "./Search";

import styles from "./Header.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  function handleShowLogin() {
    setShowLogin(!showLogin);
  }
  function handleShowSearch() {
    setShowSearch(!showSearch);
  }
  return (
    <div className={cx("nav-container")}>
      <Link to="/" className={cx("logo")}>
        <img src={logoBlack} alt="logo" />
      </Link>
      <ul className={cx("nav-items-container")}>
        {menuData.map((item, index) => {
          return <MenuItem key={index} item={item} />;
        })}
      </ul>
      <div className={cx("nav-media")}>
        {menuMediaData.map((item, index) => (
          <MenuMedia
            key={index}
            item={item}
            onUser={handleShowLogin}
            onSearch={handleShowSearch}
          />
        ))}
        <Search onShow={handleShowSearch} isShow={showSearch} />
        <Form onShow={handleShowLogin} isShow={showLogin} />
      </div>
    </div>
  );
}

export default Header;
