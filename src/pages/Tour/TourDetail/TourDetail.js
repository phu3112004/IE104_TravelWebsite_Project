import React from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAngleLeft,
  faAngleRight,
  faCircleCheck,
  faChevronDown,
  faChevronUp,
  faBus,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./TourDetail.module.scss"; // Giả sử em đang sử dụng module CSS

const cx = classNames.bind(styles);

function TourDetail() {
  return (
    <div className="details-page">
      <div className="details-info">
        <a href="activities.html">WHITEWATER RAFTING</a>
        <h1>Tuolumne River Rafting Near Yosemite National Park</h1>
        <div className="details-info-details">
          <p>2 or 3 Days</p>
          <div className="details-info-star">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p>4.9 (87 reviews)</p>
        </div>
        <div className="details-info-desc">
          <div className="details-info-desc-item">
            <h3>LOCATION</h3>
            <p>California</p>
          </div>
          <div className="details-info-desc-item">
            <h3>ADVENTURE LEVEL</h3>
            <p>Moderately Challenging </p>
          </div>
          <div className="details-info-desc-item">
            <h3>MINIMUM AGE</h3>
            <p>14 (16 during high water)</p>
          </div>
          <div className="details-info-desc-item">
            <h3>RIVER RATING</h3>
            <p>Class IV (Class V possible during peak flows)</p>
          </div>
          <div className="details-info-desc-item">
            <h3>FROM</h3>
            <p>2 or 3 Days from $599 | Wine trips from $1099</p>
          </div>
        </div>
      </div>
      <div className="details-img">
        <div id="details-img-container">
          <img
            className="details-img-item"
            src="https://zrafting.com/wp-content/uploads/2022/03/MG_5127.jpg"
            alt=""
          />
          <img
            className="details-img-item"
            src="https://zrafting.com/wp-content/uploads/2022/03/MG_79683.jpg"
            alt=""
          />
          <img
            className="details-img-item"
            src="https://www.extranomical.com/wp-content/uploads/2023/03/Valley-View-Overlook.jpg"
            alt=""
          />
          <img
            className="details-img-item"
            src="https://i.ytimg.com/vi/mOxtzEF3k3M/maxresdefault.jpg"
            alt=""
          />
          <img
            className="details-img-item"
            src="https://www.yosemite.com/wp-content/uploads/2021/04/MER041222-6-scaled.jpg"
            alt=""
          />
          <img
            className="details-img-item"
            src="https://www.americanwhitewater.com/wp-content/uploads/the_best_rafting_in_the_yosemite_area.jpg"
            alt=""
          />
          <img
            className="details-img-item"
            src="https://zrafting.com/wp-content/uploads/2022/02/Merced-Hero-2.jpg"
            alt=""
          />
        </div>
        <button id="details-img-left-btn" className="details-img-btn">
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button id="details-img-right-btn" className="details-img-btn">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
      <div className="details-overview">
        <div className="details-overview-desc">
          <h2>
            Tuolumne River rafting, available just outside Yosemite National
            Park, is a standard-setter among all the California whitewater
            experiences 2PM& offers.
          </h2>
          <p>
            Pronounced “too-all-uh-me,” and affectionately referred to as “the
            T,” it’s one of our “Seven Whitewater Wonders” of the World. But
            it’s not just the 18 miles of nearly continuous Class IV whitewater
            that attracts paddlers from all over the world to this Wild & Scenic
            River. A Tuolumne River rafting trip is a true wilderness adventure
            in the Yosemite region complete with stunning, scenic beauty,
            brilliant star-filled nights, and big thrills. And you’ve got
            options. Choose from an adventurous 48-hour getaway with cool hikes
            up side canyons carved by cascading waterfalls, or a carefree
            three-day Tuolumne rafting vacation, with lots of time to explore
            and relax while reconnecting with nature in a secluded river canyon.{" "}
          </p>
        </div>
        <div className="details-overview-highlight">
          <h2>Trip Highlights</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              18 miles of continuous Class IV Tuolumne River whitewater rafting
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Raft 15 unforgettable rapids like Ram’s Head, Clavey Falls, Gray’s
              Grindstone & more
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Camp near Yosemite in a Wild & Scenic river canyon
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Hike, play bocce ball or horseshoes, swim, explore creeks &
              waterfalls
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Wine on the River & Craft Beer Tasting trips available
            </li>
            <li>
              <FontAwesomeIcon icon={faCircleCheck} />
              Easy drive from San Francisco, Sacramento & Lake Tahoe
            </li>
          </ul>
        </div>
      </div>
      <div className="details-itinerary">
        <h1>ITINERARY & MAP</h1>
        <div className="details-itinerary-day">
          <div
            className="details-itinerary-day-item details-itinerary-day-bg"
            onclick="twodays(this)"
          >
            2 Days
          </div>
          <div className="details-itinerary-day-item" onclick="threedays(this)">
            3 Days
          </div>
        </div>
        <div className="details-itinerary-info">
          <div className="details-itinerary-info-desc">
            <h2>Itinerary at a Glance</h2>
            <p>
              We pride ourselves in running a relaxed and flexible schedule.
              Every Tuolumne River rafting trip is different depending upon the
              group, other trips on the water, camp locations, and sometimes the
              weather. The following is a sample of what your trip might be
              like:
            </p>
            <div className="details-itinerary-info-desc-day">
              <button onclick="toggleDropdown('day1', this)">
                Day 1 <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div id="day1" className="details-itinerary-desc-day-details">
                <p>
                  The morning of your trip, you’ll meet up with your trip leader
                  and fellow travelers before embarking on a 3-mile hike to the
                  river. At the put-in, your guides will deliver an orientation
                  and safety talk and fit you with your helmet and PFD (wetsuits
                  and splash tops are also included on all early-season and
                  cold-weather trips). Then, we hit the water! The Tuolumne is
                  nearly consistent whitewater, with four exciting rapids in the
                  first two miles: Rock Garden, Nemesis, Sunderlands Chute, and
                  Ram’s Head. Come lunchtime, we’ll pull over to a sandy beach
                  for a delicious picnic. Downstream, we encounter the ultimate
                  thrill: Clavey Falls; this Class IV+ rapid features a series
                  of staircase drops that delivers unabashed excitement. Between
                  rapids, you’re welcome to enjoy a refreshing swim in the calm
                  stretches of cool water. We reach camp by mid- to late
                  afternoon. Your guides will set up the kitchen, restroom, and
                  common areas while you set up your tent. The guides will serve
                  hors d’oeuvres while they prepare dinner. This is the perfect
                  opportunity to lounge on the beach with a book, play a game,
                  or chat with your traveling companions. After dinner, the
                  evening is yours to spend as you wish. You might enjoy music,
                  stories, and jokes which are often shared around the campfire,
                  or if you’re in a reflective mood, you might lean back to
                  enjoy the clarity of the big, star-filled sky.
                </p>
              </div>
            </div>
            <div className="details-itinerary-info-desc-day">
              <button onclick="toggleDropdown('day2', this)">
                Day 2 <i className="fa-solid fa-chevron-down"></i>
              </button>
              <div id="day2" className="details-itinerary-desc-day-details">
                <p>
                  After we eat a hearty breakfast and our gear has been loaded
                  back onto the boats, we get back on the “T”. The adventure
                  continues with exciting Class III-IV rapids such as Gray’s
                  Grindstone, Thread the Needle, and Hell’s Kitchen. The two-day
                  trip provides us with more time to explore the hidden wonders
                  of this canyon. Exciting explorations along the Tuolumne’s
                  side streams bring us to waterfalls, swimming holes, natural
                  waterslides, and clear creeks that offer excellent trout
                  fishing. As we reach Ward’s Ferry and flat water, our river
                  trip draws to a close. At the take-out, an 2PM& shuttle will
                  be waiting to give you a ride back to your car.
                </p>
              </div>
            </div>
          </div>
          <div className="details-itinerary-info-map">
            <h2>Meeting time & Place</h2>
            <div className="details-itinerary-info-map-item">
              <h3>Location</h3>
              <h5>Starbucks</h5>
              <p>3711 E Shaw Ave, Clovis, CA 93619, US</p>
            </div>
            <div className="details-itinerary-info-map-item">
              <h3>Time</h3>
              <p>8:30 AM</p>
            </div>
            <div className="details-itinerary-info-map-item">
              <h3>Return</h3>
              <p>Approximately 6:30 PM, depending on water levels</p>
            </div>
            <div className="details-itinerary-info-map-item">
              <h3>Map</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4974.620366509581!2d-119.64188239823264!3d36.80881264252745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945b6798778b57%3A0xe04dbb89bd457e0f!2sStarbucks!5e1!3m2!1svi!2s!4v1719900148105!5m2!1svi!2s"
                style="border:0;"
                allowfullscreen=""
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="details-itinerary-info-map-item">
              <a href="contact.html" className="book-btn">
                BOOK NOW
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="details-review">
        <div className="details-review-title">
          <h1>REVIEW SNAPSHOT</h1>
          <span className="details-review-title-rcm">
            <h1>100%</h1>
            <p>of respondents would recommend this to a friend</p>
          </span>
        </div>
        <div className="details-review-star">
          <div className="details-review-star-destri">
            <h3>RATINGS DISTRIBUTION</h3>
            <button title="Show only 5 stars reviews">
              <p>5 Stars</p>
              <i className="fa-solid fa-star star-yellow"></i>
              <span className="star-bar" id="five-stars"></span>
              <p>79</p>
            </button>
            <button title="Show only 4 stars reviews">
              <p>4 Stars</p>
              <i className="fa-solid fa-star star-yellow"></i>
              <span className="star-bar" id="four-stars"></span>
              <p>6</p>
            </button>
            <button title="Show only 3 stars reviews">
              <p>3 Stars</p>
              <i className="fa-solid fa-star star-yellow"></i>
              <span className="star-bar" id="three-stars"></span>
              <p>2</p>
            </button>
            <button title="Show only 2 stars reviews">
              <p>2 Stars</p>
              <i className="fa-solid fa-star star-yellow"></i>
              <span className="star-bar" id="two-stars"></span>
              <p>0</p>
            </button>
            <button title="Show only 1 star reviews">
              <p>1 Star</p>
              <i className="fa-solid fa-star star-yellow star-1"></i>
              <span className="star-bar" id="one-star"></span>
              <p>0</p>
            </button>
          </div>
          <div className="details-review-star-amount">
            <div className="details-info-star mt-0">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <p>
              <b>4.9</b> (87 reviews)
            </p>
            <a href="#">Write a review</a>
          </div>
        </div>
        <div className="details-review-sort">
          <select>
            <option value="">Non-Sort</option>
            <option value="">Most recent</option>
            <option value="">Lowest rated</option>
            <option value="">Highest rated</option>
            <option value="">Oldest</option>
            <option value="">Image</option>
          </select>
        </div>
        <div className="details-review-area-container">
          <div className="details-review-area">
            <h1>so much fun!!!</h1>
            <div className="details-info-star mt-0">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <i>5</i>
            </div>
            <p>
              We went for a bachelorette trip and had the best time! The water
              was fast and high, and our guides Andrew and Adam rocked! The
              whole guide crew was a blast and made the trip super fun. Bring
              sunscreen.
            </p>
            <div className="details-review-area-auth">
              <p>
                By <b>Kala</b>
              </p>
              <p>
                At <b>24/02/2024</b>
              </p>
              <p>
                From <b>Oregon House, CA</b>
              </p>
            </div>
            <span className="review-tag">Would recommend to friend</span>
            <span className="review-tag">Experienced guides</span>
            <span className="review-tag">Fun</span>
          </div>
          <div className="details-review-area">
            <h1>How turn 65</h1>
            <div className="details-info-star mt-0">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <i>5</i>
            </div>
            <p>
              I was originally booked for a 3 day trip on the Tuolumne River but
              due to water flows it was done in 1 day. OARS did their best to
              make up for the change and did a great job.
            </p>
            <div className="details-review-area-auth">
              <p>
                By <b>Josh Smith</b>
              </p>
              <p>
                At <b>24/01/2024</b>
              </p>
              <p>
                From <b>Florida</b>
              </p>
            </div>
            <span className="review-tag">Would recommend to friend</span>
            <span className="review-tag">Fun</span>
          </div>
          <div className="details-review-area">
            <h1>THIS TRIP IS AMAZING</h1>
            <div className="details-info-star mt-0">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <i>5</i>
            </div>
            <p>
              I was nervous about the level of intensity of this trip on my
              middled-aged body. But, the guides were fantastic, the rapid were
              amazing, and although high intensity, it never felt scary or
              uncomfort
            </p>
            <div className="details-review-area-auth">
              <p>
                By <b>Thomas Timothy</b>
              </p>
              <p>
                At <b>24/12/2023</b>
              </p>
              <p>
                From <b>Dortmunch, Germany</b>
              </p>
            </div>
            <span className="review-tag">Would recommend to friend</span>
            <span className="review-tag">Experienced guides</span>
          </div>
          <div className="details-review-area">
            <h1>GREAT TRIP!</h1>
            <div className="details-info-star mt-0">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <i>5</i>
            </div>
            <p>
              My 16 year old daughter & I absolutely loved this trip. Our boat
              guide, Jack was great as was the entire crew. The river was a
              great mix of relaxing scenery and exciting rapids, especially
              Clavey Falls. We had a few people in our boat go for an unintended
              swim, which made it memorable. Food was very good - sandwiches &
              salads for lunch, french toast and sausage for breakfast, and
              steak & chicken tacos for dinner. Cooler full of soda and craft
              beer after the day on the water. Condiments were over the top. The
              side hikes to swim holes were fun, but I wish I would have
              purchased grippy water shoes as some of the rocks were very slick.
              Also wish I would have brought my hammock. No phots offered, so
              consider bringing a GoPro. Did not use the tent I rented, as the
              entire group just slept under the stars. Great trip, highly
              recommend.
            </p>
            <div className="details-review-area-auth">
              <p>
                By <b>Josh Smith</b>
              </p>
              <p>
                At <b>03/11/2023</b>
              </p>
              <p>
                From <b>West Michigan</b>
              </p>
            </div>
            <span className="review-tag">Would recommend to friend</span>
            <span className="review-tag">Great food & drink</span>
          </div>
          <div className="details-review-area">
            <h1>DON'T MISS A GREAT OPPORTUNITY - THE TUOLUMNE AWAITS</h1>
            <div className="details-info-star mt-0">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <i>5</i>
            </div>
            <p>
              Once again OARS delivers an exceptional value in the two day
              Tuolumne River, wine and dinner outing. As if the thrills of the
              Tuolumne are not enough, OARS partners with local chefs and
              wineries to highlight the local culture and provide participants a
              glimpse into the region. Plus, OARS guides focus on quality meals
              safely prepared, fun (and safe) river passages and the overall
              customer experience.
            </p>
            <div className="details-review-area-auth">
              <p>
                By <b>Josh Smith</b>
              </p>
              <p>
                At <b>19/10/2023</b>
              </p>
              <p>
                From <b>North Carolina</b>
              </p>
            </div>
            <span className="review-tag">Would recommend to friend</span>
            <span className="review-tag">Fun</span>
          </div>
          <div className="details-review-area">
            <h1>THREE WONDERFUL DAYS ON THE TUOLOMNE!</h1>
            <div className="details-info-star mt-0">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <i>5</i>
            </div>
            <p>
              Chris, Travis, Calvin, and Clavey made our 3 days on the Tuolumne
              River unforgettable. The white water was thrilling and the camping
              was relaxing making this the perfect adventure for our family.
            </p>
            <div className="details-review-area-auth">
              <p>
                By <b>Yoshida Akiko</b>
              </p>
              <p>
                At <b>02/09/2023</b>
              </p>
              <p>
                From <b>Tokyo, Japan</b>
              </p>
            </div>
            <span className="review-tag">Would recommend to friend</span>
            <span className="review-tag">Well organized</span>
          </div>
          <button className="loadmore-btn">LOAD MORE</button>
        </div>
      </div>
    </div>
  );
}

export default TourDetail;
