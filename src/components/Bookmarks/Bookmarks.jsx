import PropTypes from "prop-types";

const Bookmarks = ({ bookmark, readingTime }) => {
  return (
    <div className="md:w-1/3 ml-5 bg-gray-200 p-5">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Spent time on read: {readingTime} min</h2>
      </div>
      <h2 className="text-3xl font-bold mb-4">Bookmarked Blogs: {bookmark.length}</h2>
      <div>
        {bookmark.map((blog, index) => (
          <div key={index} className="bg-white p-2 mb-2 rounded-sm">
            <h2 className="text-2xl">{blog.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmark: PropTypes.array,
  readingTime: PropTypes.number
};

export default Bookmarks;
