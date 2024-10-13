import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import $ from "jquery";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function Header() {
  useEffect(() => {
    $(document).ready(function () {
      $(".nav-items-container li").hover(
        function () {
          $(this).children(".sub-nav").stop().slideDown(300).css({
            height: "fit-content",
            display: "block",
          });
        },
        function () {
          $(this).children(".sub-nav").stop().slideUp(300).css({
            height: "fit-content",
            display: "block",
          });
        }
      );
    });
  }, []);

  return (
    <div className={cx("nav-container")}>
      <a href="index.html" className={cx("logo")}>
        <img src="/assest/img/logo-black.png" />
      </a>
      <ul className={cx("nav-items-container")}>
        <li>
          <a href="#" className={cx("nav-item")}>
            EXPLORE
          </a>
          <ul className={cx("sub-nav")}>
            <li>
              <a href="#" className={cx("sub-nav-item")}>
                Hotel
              </a>
            </li>
            <li>
              <a href="#" className={cx("sub-nav-item")}>
                Road Trips
              </a>
            </li>
            <li>
              <a href="adventure.html" className={cx("sub-nav-item")}>
                Adventures<i className={cx("fa-solid", "fa-chevron-right")}></i>
              </a>
              <ul className={cx("sub-nav")}>
                <li>
                  <a href="#" className={cx("sub-nav-item")}>
                    Kayaking
                  </a>
                </li>
                <li>
                  <a href="activities.html" className={cx("sub-nav-item")}>
                    Whitewater Rafting
                  </a>
                </li>
                <li>
                  <a href="#" className={cx("sub-nav-item")}>
                    Camping
                  </a>
                </li>
                <li>
                  <a href="#" className={cx("sub-nav-item")}>
                    Multi-Sport
                  </a>
                </li>
                <li>
                  <a href="#" className={cx("sub-nav-item")}>
                    Rowing
                  </a>
                </li>
                <li>
                  <a href="#" className={cx("sub-nav-item")}>
                    Hiking
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className={cx("sub-nav-item")}>
                Cities
              </a>
            </li>
            <li>
              <a href="#" className={cx("sub-nav-item")}>
                Scenery
              </a>
            </li>
            <li>
              <a href="tours.html" className={cx("sub-nav-item")}>
                + All tour
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className={cx("nav-item")}>
            DESTINATIONS
          </a>
          <ul className={cx("sub-nav")}>
            <li>
              <a href="destination.html" className={cx("sub-nav-item")}>
                Vietnam
              </a>
            </li>
            <li>
              <a href="#" className={cx("sub-nav-item")}>
                World<i className={cx("fa-solid", "fa-chevron-right")}></i>
              </a>
              <ul className={cx("sub-nav")}>
                <li>
                  <a href="#" className={cx("sub-nav-item")}>
                    Indonesia
                  </a>
                </li>
                <li>
                  <a href="#" className={cx("sub-nav-item")}>
                    Singapore
                  </a>
                </li>
                <li>
                  <a href="#" className={cx("sub-nav-item")}>
                    Japan
                  </a>
                </li>
                <li>
                  <a href="#" className={cx("sub-nav-item")}>
                    China
                  </a>
                </li>
                <li>
                  <a href="#" className={cx("sub-nav-item")}>
                    Korea
                  </a>
                </li>
                <li>
                  <a href="#" className={cx("sub-nav-item")}>
                    Thailand
                  </a>
                </li>
                <li>
                  <a href="#" className={cx("sub-nav-item")}>
                    France
                  </a>
                </li>
                <li>
                  <a href="#" className={cx("sub-nav-item")}>
                    Italy
                  </a>
                </li>
                <li>
                  <a href="#" className={cx("sub-nav-item")}>
                    Cuba
                  </a>
                </li>
                <li>
                  <a href="#" className={cx("sub-nav-item")}>
                    USA
                  </a>
                </li>
                <li>
                  <a href="#" className={cx("sub-nav-item")}>
                    + All Country
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="blog.html" className={cx("nav-item")}>
            BLOG
          </a>
        </li>
        <li>
          <a href="about.html" className={cx("nav-item")}>
            ABOUT
          </a>
        </li>
        <li>
          <a href="contact.html" className={cx("nav-item")}>
            CONTACT
          </a>
        </li>
      </ul>
      <div className={cx("nav-media")}>
        <a className={cx("nav-media-item")} href="#">
          <FontAwesomeIcon
            className={cx("nav-media-icon")}
            icon={faMagnifyingGlass}
          />
        </a>
        <a className={cx("nav-media-item")} href="https://facebook.com/">
          <FontAwesomeIcon className={cx("nav-media-icon")} icon={faFacebook} />
        </a>
        <a className={cx("nav-media-item")} href="https://youtube.com/">
          <FontAwesomeIcon className={cx("nav-media-icon")} icon={faFacebook} />
        </a>
        <a className={cx("nav-media-item")} href="https://twitter.com/">
          <FontAwesomeIcon className={cx("nav-media-icon")} icon={faFacebook} />
        </a>
        <a className={cx("nav-media-item")} href="https://x.com/">
          <FontAwesomeIcon className={cx("nav-media-icon")} icon={faFacebook} />
        </a>
        <label className={cx("nav-media-item")} htmlFor="checkbox-login">
          <i className={cx("fa-solid", "fa-user")}></i>
        </label>
        <input
          type="checkbox"
          id="checkbox-login"
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
}

export default Header;
