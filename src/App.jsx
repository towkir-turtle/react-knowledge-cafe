import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const addToBookmarkHandler = (blog) => {
    setBookmark([...bookmark, blog]);
  };

  const markAsReadHandler = (time, id) => {
    setReadingTime(readingTime + time);
    const remainingBookmark = bookmark.filter(blog => blog.id !== id);
    setBookmark(remainingBookmark);
  };
  return (
    <>
      <Header />
      <div className="flex mt-10">
        <Blogs
          addToBookmarkHandler={addToBookmarkHandler}
          markAsReadHandler={markAsReadHandler}
        />
        <Bookmarks bookmark={bookmark} readingTime={readingTime} />
      </div>
    </>
  );
}

export default App;
