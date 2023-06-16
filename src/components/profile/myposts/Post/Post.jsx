import React from "react";
import s from "./Post.module.css"

const Post = (props) => {
  return (
      <div>
        <div className={s.item}>
          <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="ava"/>
          {props.message}
          <div>
            likes {props.likesCount}
          </div>
        </div>
      </div>
  );
};

export default Post;