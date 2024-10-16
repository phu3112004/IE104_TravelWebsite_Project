import { Link } from "react-router-dom";
import styles from "./Contact.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={cx("contact-container")}>
      <div className={cx("contact-item-container")}>
        <div className={cx("contact-item")}>
          <div className={cx("contact-img-container")}>
            <img
              src="https://breezeconnect.com.au/wp-content/uploads/2019/10/contact-us-customer-support-hotline-people-connect-call-customer-support_36325-1640.jpg"
              alt=""
            />
          </div>
        </div>
        <div className={cx("contact-item")}>
          <h2>
            IF YOU WANT TO KNOW MORE?
            <br />
            FEEL FREE TO GET IN TOUCH WITH US
          </h2>
          <Link to="/contact" className={cx("contact-link")}>
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
