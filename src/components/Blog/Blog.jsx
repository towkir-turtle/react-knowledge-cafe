import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, addToBookmarkHandler, markAsReadHandler }) => {
  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-10">
      <img className="w-full mb-5" src={cover} alt="title" />
      <div className="flex justify-between items-center mb-2">
        <div className="flex">
          <img className="w-14 h-14" src={author_img} alt="" />
          <div className="ml-2">
            <h3>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex">
          <p>
            {reading_time} min read
            <button onClick={() => addToBookmarkHandler(blog)}>
              <CiBookmark className="inline-block text-xl cursor-pointer ml-1" />
            </button>
          </p>
        </div>
      </div>
      <h2 className="text-4xl mb-5">{title}</h2>
      <div>
        {hashtags.map((hash, index) => (
          <span key={index}>
            <a>#{hash} </a>
          </span>
        ))}
      </div>
      <button
        className="text-purple-800 underline mt-1"
        onClick={() => markAsReadHandler(reading_time, id)}
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  addToBookmarkHandler: PropTypes.func,
  markAsReadHandler: PropTypes.func,
};

export default Blog;
