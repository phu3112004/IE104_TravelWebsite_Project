import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAngleLeft,
  faAngleRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./TourDetail.module.scss";
import { Link, useParams } from "react-router-dom";
import { tours_link } from "../../../config/api_link";
import TourItinerary from "./TourItinerary/TourItinerary";

const cx = classNames.bind(styles);

function TourDetail() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  var day = parseInt(data.day);
  var api = tours_link + "/" + id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [data]);
  return (
    <div className={cx("details-page")}>
      <div className={cx("details-info")}>
        <Link to={`/adventure/${data.type}`}>{data.type}</Link>
        <h1>{data.name}</h1>
        <div className={cx("details-info-details")}>
          <p>{data.day}</p>
          <div className={cx("details-info-star")}>
            <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
            <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
            <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
            <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
            <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
          </div>
          <p>
            {data.rate} ({data.reviews} reviews)
          </p>
        </div>
        <div className={cx("details-info-desc")}>
          <div className={cx("details-info-desc-item")}>
            <h3>LOCATION</h3>
            <p>{data.location}</p>
          </div>
          <div className={cx("details-info-desc-item")}>
            <h3>ADVENTURE LEVEL</h3>
            <p>{data.level}</p>
          </div>
          <div className={cx("details-info-desc-item")}>
            <h3>MINIMUM AGE</h3>
            <p>{data.age}</p>
          </div>
          <div className={cx("details-info-desc-item")}>
            <h3>CITY</h3>
            <p>{data.city}</p>
          </div>
          <div className={cx("details-info-desc-item")}>
            <h3>FROM</h3>
            <p>${data.price}</p>
          </div>
        </div>
      </div>
      <div className={cx("details-img")}>
        <div className={cx("details-img-container")}>
          <img
            className={cx("details-img-item")}
            src="https://zrafting.com/wp-content/uploads/2022/03/MG_5127.jpg"
            alt=""
          />
          <img
            className={cx("details-img-item")}
            src="https://zrafting.com/wp-content/uploads/2022/03/MG_79683.jpg"
            alt=""
          />
          <img
            className={cx("details-img-item")}
            src="https://www.extranomical.com/wp-content/uploads/2023/03/Valley-View-Overlook.jpg"
            alt=""
          />
          <img
            className={cx("details-img-item")}
            src="https://i.ytimg.com/vi/mOxtzEF3k3M/maxresdefault.jpg"
            alt=""
          />
          <img
            className={cx("details-img-item")}
            src="https://www.yosemite.com/wp-content/uploads/2021/04/MER041222-6-scaled.jpg"
            alt=""
          />
          <img
            className={cx("details-img-item")}
            src="https://www.americanwhitewater.com/wp-content/uploads/the_best_rafting_in_the_yosemite_area.jpg"
            alt=""
          />
          <img
            className={cx("details-img-item")}
            src="https://zrafting.com/wp-content/uploads/2022/02/Merced-Hero-2.jpg"
            alt=""
          />
        </div>
        <button className={cx("details-img-btn", "details-img-left-btn")}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button className={cx("details-img-btn", "details-img-right-btn")}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
      <div className={cx("details-overview")}>
        <div className={cx("details-overview-desc")}>
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
        <div className={cx("details-overview-highlight")}>
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
      <div className={cx("details-itinerary")}>
        <h1>ITINERARY & MAP</h1>
        <div className={cx("details-itinerary-day")}>
          <div
            className={cx(
              "details-itinerary-day-item",
              "details-itinerary-day-bg"
            )}
            onclick="twodays(this)"
          >
            {data.day}
          </div>
        </div>
        <div className={cx("details-itinerary-info")}>
          <div className={cx("details-itinerary-info-desc")}>
            <h2>Itinerary at a Glance</h2>
            <p>
              We pride ourselves in running a relaxed and flexible schedule.
              Every Tuolumne River rafting trip is different depending upon the
              group, other trips on the water, camp locations, and sometimes the
              weather. The following is a sample of what your trip might be
              like:
            </p>

            {Array.from({ length: day }, (_, i) => (
              <TourItinerary key={i} day={i + 1} />
            ))}
          </div>
          <div className={cx("details-itinerary-info-map")}>
            <h2>Meeting time & Place</h2>
            <div className={cx("details-itinerary-info-map-item")}>
              <h3>Location</h3>
              <h5>Starbucks</h5>
              <p>3711 E Shaw Ave, Clovis, CA 93619, US</p>
            </div>
            <div className={cx("details-itinerary-info-map-item")}>
              <h3>Time</h3>
              <p>8:30 AM</p>
            </div>
            <div className={cx("details-itinerary-info-map-item")}>
              <h3>Return</h3>
              <p>Approximately 6:30 PM, depending on water levels</p>
            </div>
            <div className={cx("details-itinerary-info-map-item")}>
              <h3>Map</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4974.620366509581!2d-119.64188239823264!3d36.80881264252745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80945b6798778b57%3A0xe04dbb89bd457e0f!2sStarbucks!5e1!3m2!1svi!2s!4v1719900148105!5m2!1svi!2s"
                allowfullscreen=""
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className={cx("details-itinerary-info-map-item")}>
              <Link to="/contact" className={cx("book-btn")}>
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("details-review")}>
        <div className={cx("details-review-title")}>
          <h1>REVIEW SNAPSHOT</h1>
          <span className={cx("details-review-title-rcm")}>
            <h1>100%</h1>
            <p>of respondents would recommend this to a friend</p>
          </span>
        </div>
        <div className={cx("details-review-star")}>
          <div className={cx("details-review-star-destri")}>
            <h3>RATINGS DISTRIBUTION</h3>
            <button title="Show only 5 stars reviews">
              <p>5 Stars</p>
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <span className={cx("star-bar", "five-stars")}></span>
              <p>{data.reviews - 8}</p>
            </button>
            <button title="Show only 4 stars reviews">
              <p>4 Stars</p>
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <span className={cx("star-bar", "four-stars")}></span>
              <p>6</p>
            </button>
            <button title="Show only 3 stars reviews">
              <p>3 Stars</p>
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <span className={cx("star-bar", "three-stars")}></span>
              <p>2</p>
            </button>
            <button title="Show only 2 stars reviews">
              <p>2 Stars</p>
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <span className={cx("star-bar", "two-stars")}></span>
              <p>0</p>
            </button>
            <button title="Show only 1 star reviews">
              <p>1 Star</p>
              <FontAwesomeIcon
                icon={faStar}
                className={cx("star-yellow", "star-1")}
              />
              <span className={cx("star-bar", "one-star")}></span>
              <p>0</p>
            </button>
          </div>
          <div className={cx("details-review-star-amount")}>
            <div className={cx("details-info-star", "mt-0")}>
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
            </div>
            <p>
              <b>{data.rate}</b> ({data.reviews} reviews)
            </p>
            <a href="#">Write a review</a>
          </div>
        </div>
        <div className={cx("details-review-sort")}>
          <select>
            <option value="">Non-Sort</option>
            <option value="">Most recent</option>
            <option value="">Lowest rated</option>
            <option value="">Highest rated</option>
            <option value="">Oldest</option>
            <option value="">Image</option>
          </select>
        </div>
        <div className={cx("details-review-area-container")}>
          <div className={cx("details-review-area")}>
            <h1>so much fun!!!</h1>
            <div className={cx("details-info-star", "mt-0")}>
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <i>5</i>
            </div>
            <p>
              We went for a bachelorette trip and had the best time! The water
              was fast and high, and our guides Andrew and Adam rocked! The
              whole guide crew was a blast and made the trip super fun. Bring
              sunscreen.
            </p>
            <div className={cx("details-review-area-auth")}>
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
            <span className={cx("review-tag")}>Would recommend to friend</span>
            <span className={cx("review-tag")}>Experienced guides</span>
            <span className={cx("review-tag")}>Fun</span>
          </div>
          <div className={cx("details-review-area")}>
            <h1>How turn 65</h1>
            <div className={cx("details-info-star", "mt-0")}>
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <i>5</i>
            </div>
            <p>
              I was originally booked for a 3 day trip on the Tuolumne River but
              due to water flows it was done in 1 day. OARS did their best to
              make up for the change and did a great job.
            </p>
            <div className={cx("details-review-area-auth")}>
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
            <span className={cx("review-tag")}>Would recommend to friend</span>
            <span className={cx("review-tag")}>Fun</span>
          </div>
          <div className={cx("details-review-area")}>
            <h1>THIS TRIP IS AMAZING</h1>
            <div className={cx("details-info-star", "mt-0")}>
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <i>5</i>
            </div>
            <p>
              I was nervous about the level of intensity of this trip on my
              middled-aged body. But, the guides were fantastic, the rapid were
              amazing, and although high intensity, it never felt scary or
              uncomfort
            </p>
            <div className={cx("details-review-area-auth")}>
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
            <span className={cx("review-tag")}>Would recommend to friend</span>
            <span className={cx("review-tag")}>Experienced guides</span>
          </div>
          <div className={cx("details-review-area")}>
            <h1>GREAT TRIP!</h1>
            <div className={cx("details-info-star", "mt-0")}>
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
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
            <div className={cx("details-review-area-auth")}>
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
            <span className={cx("review-tag")}>Would recommend to friend</span>
            <span className={cx("review-tag")}>Great food & drink</span>
          </div>
          <div className={cx("details-review-area")}>
            <h1>DON'T MISS A GREAT OPPORTUNITY - THE TUOLUMNE AWAITS</h1>
            <div className={cx("details-info-star", "mt-0")}>
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
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
            <div className={cx("details-review-area-auth")}>
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
            <span className={cx("review-tag")}>Would recommend to friend</span>
            <span className={cx("review-tag")}>Fun</span>
          </div>
          <div className={cx("details-review-area")}>
            <h1>THREE WONDERFUL DAYS ON THE TUOLOMNE!</h1>
            <div className={cx("details-info-star", "mt-0")}>
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <FontAwesomeIcon icon={faStar} className={cx("star-yellow")} />
              <i>5</i>
            </div>
            <p>
              Chris, Travis, Calvin, and Clavey made our 3 days on the Tuolumne
              River unforgettable. The white water was thrilling and the camping
              was relaxing making this the perfect adventure for our family.
            </p>
            <div className={cx("details-review-area-auth")}>
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
            <span className={cx("review-tag")}>Would recommend to friend</span>
            <span className={cx("review-tag")}>Well organized</span>
          </div>
          <button className={cx("loadmore-btn")}>LOAD MORE</button>
        </div>
      </div>
    </div>
  );
}

export default TourDetail;
