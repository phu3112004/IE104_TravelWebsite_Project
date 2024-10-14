import classNames from "classnames/bind";
import styles from "../Form.module.scss";

const cx = classNames.bind(styles);

function Policy() {
  return (
    <>
      <div className={cx("login-tele")}>
        <p>By clicking continue, you agree to our</p>
        <a href="#">Terms of Service</a>
        <p>and</p>
        <a href="#">Privacy Policy</a>
      </div>
    </>
  );
}

export default Policy;
