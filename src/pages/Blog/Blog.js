import React, { useState,useEffect } from "react";
import styles from "./Blog.module.scss";
import classNames from "classnames/bind";
import BlogDetail from "./BlogDetail/BlogDetail";
import {blognewestData} from "../../config/data";

import BlogOldestDetail from "./BlogOldestDetail/BlogOldestDetail";
const cx = classNames.bind(styles);

function Blog() {
  const [types, setTypes] = useState("Mẹo");
  // const [blogDatanews,setBlogDatanews] = useState([]);
  // const [blogOldest,setBlogOldest] = useState([]);
  const handleTypes = (type) => {
    setTypes(type);
  };
   const blogDatanews = blognewestData.filter((item) => item.news === true && item.type === types);
   const blogOldest =  blognewestData.filter((item) => item.news === false && item.type === types);
 

  console.log(blogOldest);
  return (
    <div className={cx("blog-page")}>
      <div className={cx("blog-nav-item-container")}>
        <a href="#" className={cx("blog-nav-item")}>The Blog</a>
        <a
          href="#"
          className={cx("blog-nav-item")}
          onClick={(e) => {
            e.preventDefault();
            handleTypes("Mẹo");
          }}
        >
          Tips
        </a>
        <a
          href="#"
          className={cx("blog-nav-item")}
          onClick={(e) => {
            e.preventDefault();
            handleTypes("Phiêu lưu");
          }}
        >
          Adventures
        </a>
        <a
          href="#"
          className={cx("blog-nav-item")}
          onClick={(e) => {
            e.preventDefault();
            handleTypes("Video");
          }}
        >
          Videos
        </a>
      </div>
      <div className={cx("blog-content")}>
        <div className={cx("blog-content-newsest")}>
            {blogDatanews.map((item,index)=>(
                <div key={index} className={cx("blog-content-newsest-item")}>
                    <img src={item.img} alt="blog" />
                    <h3>{item.title}</h3>
                    <div>
                    <p style={{width:"70%"}}>{item.content} </p>
                    <p style={{fontStyle:"italic"}}>{item.author}</p>
                    </div>
                    
                </div>
            ))}
            <div className={cx("blog-content-oldest")}>
            {blogOldest.map((item,index)=>(
              <div key={index} >
                  <BlogOldestDetail title={item.title} author={item.author} date={item.date} img={item.img}/>
              </div>
            ))}
            </div>
        </div>
          <>
          <div style={{marginTop:"42px"}}>
          <h3 style={{textAlign:"center",fontSize:"40px"}}>Các bài báo khác</h3>
          <BlogDetail query="type" queryContent={types}/>
          </div>
          </>
          
      </div>
    </div>
  );
}

export default Blog;