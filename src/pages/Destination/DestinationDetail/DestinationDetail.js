import { useParams } from "react-router-dom";
import { useState,useEffect } from 'react';
import styles from '../DestinationDetail/styles.scss'
import classNames from 'classnames/bind';
import {countryData} from '../../../config/data'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TourItem from '../../../components/TourItem'
import {
  faStar,
  faAngleLeft,
  faAngleRight,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)

function DestinationDetail() {

  const { country } = useParams();
  const selectedCountry = countryData.find(item => item.location === country);
 
  
  
  return (
    <div id="main">
        <div className={cx("Detailpage")}>
            <div className={cx("header-view")}>
              <img src={selectedCountry.image} />
            </div>
            <div className={cx("overview")}>

            </div>
            <div className={cx("adventures")}>
              <TourItem query="location" queryContent={country}/>
            </div>
            <div className={cx("map")}>

            </div>
            <div className={cx("features")}>
              
            </div>
        </div>
    </div>
  );
}

export default DestinationDetail;
