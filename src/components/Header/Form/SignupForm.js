import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function SignupForm({ stopPropagation, onChangeForm, onShow }) {
  const [isPasswordShowed, setIsPasswordShowed] = useState(false);
  function handleShowPassword() {
    setIsPasswordShowed(!isPasswordShowed);
  }
  const [isCfPasswordShowed, setIsCfPasswordShowed] = useState(false);
  function handleShowCfPassword() {
    setIsCfPasswordShowed(!isCfPasswordShowed);
  }
  return (
    <div className={cx("login-area")} onClick={stopPropagation}>
      <div className={cx("login-close")} onClick={onShow}>
        <FontAwesomeIcon icon={faXmark} className={cx("login-close-icon")} />
      </div>
      <h1>Create an account</h1>
      <p>Enter your email to sign up</p>
      <div className={cx("login-form")}>
        <div className={cx("login-input")}>
          <FontAwesomeIcon icon={faUser} />
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div className={cx("login-input")}>
          <FontAwesomeIcon icon={faLock} />
          <input
            style={{ width: "80%" }}
            type={isPasswordShowed ? "text" : "password"}
            name="password"
            placeholder="Password"
          />
          <FontAwesomeIcon
            icon={isPasswordShowed ? faEye : faEyeSlash}
            onClick={handleShowPassword}
            className={cx("eye-icon")}
          />
        </div>
        <div className={cx("login-input")}>
          <FontAwesomeIcon icon={faLock} />
          <input
            style={{ width: "80%" }}
            type={isCfPasswordShowed ? "text" : "password"}
            name="cfpassword"
            placeholder="Confirm password"
          />
          <FontAwesomeIcon
            icon={isCfPasswordShowed ? faEye : faEyeSlash}
            onClick={handleShowCfPassword}
            className={cx("eye-icon")}
          />
        </div>
        <button>Sign up with email</button>
      </div>
      <div className={cx("login-google")}>
        <div className={cx("login-line-divide")}>
          <span>or continue with:</span>
        </div>
        <button className={cx("login-google-button")}>
          <img
            src="https://i.pinimg.com/originals/74/65/f3/7465f30319191e2729668875e7a557f2.png"
            alt="Google"
          />
          Google
        </button>
      </div>
      <div className={cx("login-tele")}>
        <p>Already have an account?</p>
        <a onClick={onChangeForm}>Log in</a>
      </div>
      <div className={cx("login-tele")}>
        <p>By clicking continue, you agree to our</p>
        <a href="#">Terms of Service</a>
        <p>and</p>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
}

export default SignupForm;
