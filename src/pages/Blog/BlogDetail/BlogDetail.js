
import React, { useState ,useEffect} from "react";
import styles from "./BlogDetail.module.scss";
import classNames from "classnames/bind";
import { blogs_link } from "../../../config/api_link";
const cx = classNames.bind(styles);
export default function BlogDetail({start, limit,query,queryContent}) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
  let api = blogs_link;
  useEffect(() => {
    if (limit) api += `?_start=${start}&_limit=${limit}`;
    if (query && queryContent) api += "?" + query + "=" + queryContent;

    console.log(api);
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [start, limit, query, queryContent]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

    return (
    <div className={cx("blog-content-card")}>
        {data.map((item, index) => (
            <div key={index} className={cx("blog-item")}>
                <div className={cx("blog-item-content")}>
                     <h2>{item.title}</h2>
                     <p>{item.author}  {item.date}</p>
                </div>
                <div className={cx("blog-item-image")}>
                    <img src={item.img} alt={item.title} />
                </div>
            </div>
        ))}
    </div>
  )
}