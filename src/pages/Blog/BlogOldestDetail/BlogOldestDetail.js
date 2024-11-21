
import React from 'react'
import styles from "./BlogOldestDetail.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export default function BlogOldestDetail({title,author,date,img}) {
  return (
    <div className={cx("main")} >
        <div className={cx("col")}>
            <h3>{title}</h3>
            <p>{author}</p>
        </div>
        <div className={cx("col")}>
            <img src={img}></img>
        </div>
    </div>
  )
}