import React, {useState} from "react";
import s from "./MyPost.module.css"
import {useDispatch, useSelector} from "react-redux";
import Post from "./Post/Post";
import ADD_POST from "../../../redux/actions/profilePageActions";

const MyPosts = (props) => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()
  const allPosts = useSelector(state => state.profilePageReducer.posts)

  let posts = allPosts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

  const addPost = (inputValue) => {
    const post = {
      message: inputValue,
      likesCount: 0,
    }
    dispatch({type: ADD_POST, payload: post})
  }

  return (
      <div>
        <div>
          <h3>My Posts</h3>
        </div>
        <div>
          <form>
            <textarea onChange={e => setInputValue(e.target.value)} value={inputValue} />
            <div>
              <button onClick={() => addPost()}>Add post</button>
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