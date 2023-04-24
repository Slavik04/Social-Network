import React from "react";
import s from "./Post.module.css"

const Post = () => {
  return (
      <div>
        <div className={s.item}>
          <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="ava"/>
          Post 1
          <div>
            like 0
          </div>
        </div>
      </div>
  );
};

export default Post;