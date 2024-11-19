import { useState } from 'react';
import styles from './Form.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)
function Contact_Form() {
    const [checkinput, Setcheckinput] = useState('');

    return (
        <div id="main">
            <div className={cx("contact-page")}>
                <div className={cx("contact-slide")}>
                    <div className={cx("contact-slide-img")}>
                        <img src="https://www.wowweekend.vn/document_root/upload/articles/image/BrowseContent/New%20Lifestyle/Music/202305-12/202305/wwk-MV-den-vau-nau-an-cho-em-nuoi-em-1.jpg" alt="" />
                    </div>
                    <div className={cx("contact-slide-overlay")}></div>
                    <div className={cx("contact-slide-content")}>
                        <h1>Contact Us Today</h1>
                        <p>North South East West</p>
                        <p>We are here to accompany you</p>
                    </div>
                </div>
                <div className={cx("contact-form-container")}>
                    <div className={cx("contact-info")}>
                           <div className={cx("contact-info-parent")}>
                            <div className={cx("contact-info-children")}>
                                <div className={cx("bold")}>
                                    <div className={cx("bold-item")}>
                                        <i><FontAwesomeIcon icon={faEnvelope} /></i>
                                        <p>2pm&@gm.uit.edu.vn</p>
                                    </div>
                                    <div className={cx("bold-item")}>
                                        <i><FontAwesomeIcon icon={faHome} /></i>
                                        <p>12/0 Duong So 1, Go Vap</p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("contact-info-children")}>
                                <div className={cx("bold-item")}>
                                        <i><FontAwesomeIcon icon={faPhone} /></i>
                                        <p style={{color:'#b0976a'}}>+84 923 123</p>
                                </div>
                                
                            </div>
                            </div>
                        
                        <h3>GET IN TOUCH WITH 2PM&</h3>
                        <p>If you have an inquiry or would like more information about any of our tours, please use the contact form below! We will get back to you within 24 hours.
                            <br />
                            <br />
                            If you have a question or comment, please use the form to the right, or the contact details listed above.
                            <br/>
                            <br/>
                            Our travel website is the perfect guide for anyone passionate about exploring the world. Here, you can discover thousands of popular destinations, from vibrant cities to pristine beaches and natural wonders. We provide detailed information on various travel spots, suggest exciting itineraries, and offer tips to help you make the most of your trip. In addition, our website offers services for booking flights, hotels, and tours at reasonable prices. Let us help you plan and embark on your journey today!
                        </p>
                        
                        
                        
                    </div>
                    <div className={cx("contact-form")}>
                        <h1>Contact Form</h1>

                        <div className={cx("form-group")}>
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className={cx("form-group")}>
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required placeholder="example@mail.com" />
                        </div>
                        <div className={cx("form-group")}>
                            <label for="phone">Phone</label>
                            <input type="tel" id="phone" name="phone" required />
                        </div>
                        <div className={cx("form-group")}>
                            <label for="country">Your country</label>
                            <input type="text" id="country" name="country" required />
                        </div>
                        <div className={cx("form-group")}>
                            <label for="city">Where you want to go?</label>
                            <input type="text" id="city" name="city" required />
                        </div>
                        <div className={cx("form-group")}>
                            <label for="message">Message</label>
                            <textarea id="message" name="message" rows="5" required placeholder="Enter your questions or message"></textarea>
                        </div>
                        <div className={cx("button-container")}>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Contact_Form;