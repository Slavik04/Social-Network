import React, {useState} from "react";
import s from "./MyPost.module.css"
import {useDispatch, useSelector} from "react-redux";
import Post from "./Post/Post";
import {addPost} from "../../../redux/actions/profilePageActions";

const MyPosts = (props) => {
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState('')

  const allPosts = useSelector(state => state.profilePageReducer.posts)

  let posts = allPosts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  return (
      <div>
        <div>
          <h3>My Posts</h3>
        </div>
        <div>
          <form>
            <textarea onChange={e => setInputValue(e.target.value)} value={inputValue} />
            <div>
              <button onClick={(evt) => addPost(dispatch, inputValue, evt)}>Add post</button>
            </div>
          </form>
        </div>
        <div className={s.posts}>
          {posts.length > 0 ?
              <div>
                {posts}
              </div>
              :
              <div>
                Посты отсутствуют
              </div>
          }
        </div>
      </div>
  );
};

export default MyPosts;