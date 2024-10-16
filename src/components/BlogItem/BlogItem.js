import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./BlogItem.module.scss";
import { Link } from "react-router-dom";
import { blogs_link } from "../../config/api_link";

const cx = classNames.bind(styles);

function BlogItem({ start, limit }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  var api = blogs_link;
  useEffect(() => {
    api = api + "?" + `_start=${start}&_limit=${limit}`;
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        if (!response.ok) throw new Error("Network response is not ok^^");
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [start, limit]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      {data.map((item, index) => (
        <Link key={index} to={`/blog`} className={cx("blog-item-container")}>
          <div className={cx("blog-item")}>
            <img
              src="https://www.oars.com/wp-content/uploads/2022/07/Body-wipes-for-camping-410x232.jpg"
              alt=""
            />
            <p className={cx("blog-item-tag")}>{item.type}</p>
            <a className={cx("blog-item-title")}>{item.title}</a>
          </div>
          <p>
            By {item.author} at {item.date}
          </p>
        </Link>
      ))}
    </>
  );
}

export default BlogItem;
