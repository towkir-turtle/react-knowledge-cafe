import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";

const Blogs = ({ addToBookmarkHandler, markAsReadHandler }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("blogs.json");
      const data = await response.json();
      setBlogs(data);
    })();
  }, []);
  return (
    <div className="md:w-2/3">
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          addToBookmarkHandler={addToBookmarkHandler}
          markAsReadHandler={markAsReadHandler}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  addToBookmarkHandler: PropTypes.func,
  markAsReadHandler: PropTypes.func,
};

export default Blogs;
