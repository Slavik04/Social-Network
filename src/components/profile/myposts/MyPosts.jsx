import React from "react";
import Post from "./Post/Post";
import s from "./MyPost.module.css"

const MyPosts = () => {
  return (
      <div>
        <div>
          <h3>My Posts</h3>
        </div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        <div className={s.posts}>
          <Post/>
          <Post/>
        </div>
      </div>
  );
};

export default MyPosts;