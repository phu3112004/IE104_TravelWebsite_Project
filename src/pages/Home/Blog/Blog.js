import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Blog.module.scss";
import BlogItem from "../../../components/BlogItem";

const cx = classNames.bind(styles);

function Blog() {
  return (
    <div className={cx("blog-container")}>
      <div className={cx("blog-link")}>
        <h1>EXPLORE THE BLOG</h1>
        <Link to="/blog" className={cx("blog-button")}>
          VIEW ALL BLOG POSTS
        </Link>
      </div>
      <div className={cx("blog-item-container")}>
        <BlogItem start={0} limit={3} />
      </div>
    </div>
  );
}

export default Blog;
